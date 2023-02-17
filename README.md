# Team Repository Manager for CS4530

Setup:
Create a file `.env` in this directory. Contents:

```
GH_TOKEN=....
NETLIFY_TOKEN=...
STAFF_TEAM_SLUG=slug of team for staff for that year
```

How to create team repos for this class:

0. Create a [personal access token for GitHub](https://github.com/settings/tokens), put in .env . Create a [personal access token for Netlify](https://app.netlify.com/user/applications), put in .env
1. Create a new team on GitHub for staff, note the name //Manual, todo
2. Get a CSV with teams and names //Manual, todo
3. Create empty private repos programatically on GitHub, use pattern (semester)-(year)-team(teamnumber) //Automate, not yet implemented
4. Invite students to collaborate on those repos //Automate, not yet implmeneted
5. Add the staff team as a member of each repo //Call `inviteToNetlify`
6. Create netlify projects to mirror GitHub projects //Call `syncSitesWithNetlify`
7. Invite students to netlify projects //Call `inviteToNetlify`

After releasing solution for IP2:
1. Take the starter code repo (solution to IP2?), add each team as a remote
2. Push from local starter code repo to each team's remote
