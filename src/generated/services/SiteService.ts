/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { site } from '../models/site';
import type { siteSetup } from '../models/siteSetup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SiteService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param name
     * @param filter
     * @param page
     * @param perPage
     * @returns site OK
     * @returns error error
     * @throws ApiError
     */
    public listSites(
        name?: string,
        filter?: 'all' | 'owner' | 'guest',
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<site> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites',
            query: {
                'name': name,
                'filter': filter,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * @param requestBody
     * @param configureDns
     * @returns error error
     * @returns site Created
     * @throws ApiError
     */
    public createSite(
        requestBody: siteSetup,
        configureDns?: boolean,
    ): CancelablePromise<error | site> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites',
            query: {
                'configure_dns': configureDns,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @returns site OK
     * @returns error error
     * @throws ApiError
     */
    public getSite(
        siteId: string,
    ): CancelablePromise<site | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param requestBody
     * @returns site OK
     * @returns error error
     * @throws ApiError
     */
    public updateSite(
        siteId: string,
        requestBody: siteSetup,
    ): CancelablePromise<site | error> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sites/{site_id}',
            path: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @returns error error
     * @throws ApiError
     */
    public deleteSite(
        siteId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sites/{site_id}',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * [Beta] Unlinks the repo from the site.
     *
     * This action will also:
     * - Delete associated deploy keys
     * - Delete outgoing webhooks for the repo
     * - Delete the site's build hooks
     * @param siteId
     * @returns site OK
     * @throws ApiError
     */
    public unlinkSiteRepo(
        siteId: string,
    ): CancelablePromise<site> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/unlink_repo',
            path: {
                'site_id': siteId,
            },
            errors: {
                404: `Site not found`,
            },
        });
    }

    /**
     * @param accountSlug
     * @param configureDns
     * @param requestBody
     * @returns error error
     * @returns site Created
     * @throws ApiError
     */
    public createSiteInTeam(
        accountSlug: string,
        configureDns?: boolean,
        requestBody?: siteSetup,
    ): CancelablePromise<error | site> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{account_slug}/sites',
            path: {
                'account_slug': accountSlug,
            },
            query: {
                'configure_dns': configureDns,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param accountSlug
     * @param name
     * @param page
     * @param perPage
     * @returns site OK
     * @returns error error
     * @throws ApiError
     */
    public listSitesForAccount(
        accountSlug: string,
        name?: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<site> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{account_slug}/sites',
            path: {
                'account_slug': accountSlug,
            },
            query: {
                'name': name,
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
