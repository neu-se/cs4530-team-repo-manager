import { Octokit } from "octokit";
import dotenv from 'dotenv'
import * as fs from 'fs'
import { simpleGit, CleanOptions } from 'simple-git';
import { exec } from "@actions/exec";
import { Netlify } from "./generated";
import { pRateLimit } from "p-ratelimit";
import { AxiosHttpRequest } from "./generated/core/AxiosHttpRequest";
import axios from "axios";

const limit = pRateLimit({
    interval: 20000,             // 1000 ms == 1 second
    rate: 1,                   // 30 API calls per interval
    concurrency: 1,            // no more than 10 running at once
    maxDelay: 100000000              // an API call delayed > 2 sec is rejected
});


dotenv.config();

axios.interceptors.response.use(undefined, (error) => {
    console.log(error)
});
const netlify = new Netlify({
    TOKEN: process.env.NETLIFY_TOKEN,
    CREDENTIALS: 'include',
    WITH_CREDENTIALS: true,
}, AxiosHttpRequest);

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

type Repo = {
    name: string;
    full_name: string;
    ssh_url?: string;
    html_url?: string;
}

async function fetchTeamRepos(): Promise<Repo[]> {
    const repos = await octokit.paginate(octokit.rest.repos.listForOrg, { org: 'neu-cs4530', per_page: 100 })
    return repos.filter(eachRepo => eachRepo.name.startsWith("spring-23")
        // && eachRepo.name.includes("test")
    );
}
async function createNetlifyForRepo(repo: Repo) {
    try {
        console.log(`Starting: ${repo.full_name}`)
        const ret = await netlify.site.createSiteInTeam('neu-cs4530', false, {
            name: repo.name,
            build_settings: {
                cmd: 'CI= npm install && cd frontend && npm run-script build',
                dir: 'frontend/build',
                repo_branch: 'main',
            },
        })
        console.log(`Finished: ${repo.full_name}`)
    } catch (err) {
        console.trace(err);
        console.log(`Unable to create site for ${repo.name}`)
        // throw new Error(`Unable to create site for ${repo.name}`)
    }
    // console.log(ret);
}
async function syncSitesWithNetlify() {
    try {
        const existingSites = await netlify.site.listSitesForAccount('neu-cs4530');
        if (!('length' in existingSites)) {
            throw new Error();
        }
        const existingSiteNames = existingSites.map(eachSite => eachSite.name);
        // console.log(existingSiteNames)
        const repos = await fetchTeamRepos();
        const reposNotCreated = repos.filter(eachRepo => !existingSiteNames.includes(eachRepo.name));
        try {
            await Promise.all(reposNotCreated.map(eachrepo => limit(() => createNetlifyForRepo(eachrepo))));
        }
        catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.trace(err)
    }
}

function extractTeamNumber(repoURL: string) {
    const dat = repoURL.match(/-(\d+)$/);
    if (dat)
        return dat[1];
    return '';
}
async function cloneRepoIfNeeded(repo: Repo) {
    const exists = fs.existsSync(`repos/${repo.full_name}`);
    if (!exists && repo.ssh_url)
        await simpleGit().clone(repo.ssh_url, `repos/${repo.full_name}`)
}

async function applyPatch(patchName: string) {
    const repos = await fetchTeamRepos();

    await Promise.all(repos.map(cloneRepoIfNeeded));
    await Promise.all(repos.map(async (eachRepo) => {
        try {
            const sg = simpleGit(`repos/${eachRepo.full_name}`);
            await exec(`git checkout main`, [], { cwd: `repos/${eachRepo.full_name}` });
            await exec('git reset --hard', [], { cwd: `repos/${eachRepo.full_name}` })
            await sg.pull();
            await sg.applyPatch(process.cwd() + "/" + patchName);
            await exec('git commit -a -m "Apply fix for Heroku builds"', [], { cwd: `repos/${eachRepo.full_name}` })
            // await sg.commit('Apply fix from upstream for ', undefined, { '-a': '' });
            // await exec('git push --force')
            await sg.push();
        } catch (er) {
            console.error(er);
            console.error(`Error on ${eachRepo.full_name}`)
        }
    }))
    // console.log(repos.map(repo => extractTeamNumber(repo.name)).sort((a, b) => a.localeCompare(b, 'en-us', { numeric: true })).join("\n"));
}
// applyPatch('10-26-fix-video.diff');

async function addTAs() {
    const repos = await fetchTeamRepos();
    // const team = await octokit.rest.teams.getByName({ org: 'neu-cs4530', team_slug: 'fall-2022-tas' })
    // const staffTeamID = team.data.id;

    repos.map(async (eachRepo) => {
        await octokit.rest.teams.addOrUpdateRepoPermissionsInOrg({
            org: 'neu-cs4530', team_slug: process.env.STAFF_TEAM_SLUG || "FIX ME", permission: 'admin',
            owner: 'neu-cs4530', repo: eachRepo.name
        })
    })


}
async function inviteToNetlify() {
    const members = await netlify.member.listMembersForAccount('neu-cs4530');
    if (!('length' in members)) {
        throw members;
    }
    const existingEmails = members.map(eachMember => eachMember.email);
    console.log(existingEmails);
    const emails = fs.readFileSync('emails.txt', 'utf-8').split("\n");
    await emails.map(async (eachEmail) => {
        if (existingEmails.includes(eachEmail)) {
            return;
        }
        await limit(async () => {
            if (eachEmail.trim() !== '') {
                console.log(eachEmail)
                try {
                    await netlify.member.addMemberToAccount('neu-cs4530', eachEmail, 'Collaborator')
                } catch (err) {
                    console.trace(err);
                    throw err;
                }
            }
        });
    });
}
async function createTeamRepo(teamNumber: string) {
    const repo = await octokit.rest.repos.createInOrg({
        org: 'neu-cs4530',
        name: `spring-23-team-${teamNumber}`,
        private: true,
        auto_init: true,
        gitignore_template: 'Node',
        license_template: 'mit',
    });
    //TODO add collaborator
    console.log(repo);
}
// applyPatch('11-15-22-fix-heroku.diff')
// inviteToNetlify();
// addTAs();
// syncSitesWithNetlify();