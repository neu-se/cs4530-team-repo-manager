/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { snippet } from '../models/snippet';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SnippetService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns snippet OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteSnippets(
        siteId: string,
    ): CancelablePromise<Array<snippet> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/snippets',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param requestBody
     * @returns error error
     * @returns snippet OK
     * @throws ApiError
     */
    public createSiteSnippet(
        siteId: string,
        requestBody: snippet,
    ): CancelablePromise<error | snippet> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/snippets',
            path: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param snippetId
     * @returns snippet OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteSnippet(
        siteId: string,
        snippetId: string,
    ): CancelablePromise<snippet | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/snippets/{snippet_id}',
            path: {
                'site_id': siteId,
                'snippet_id': snippetId,
            },
        });
    }

    /**
     * @param siteId
     * @param snippetId
     * @param requestBody
     * @returns error error
     * @throws ApiError
     */
    public updateSiteSnippet(
        siteId: string,
        snippetId: string,
        requestBody: snippet,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/snippets/{snippet_id}',
            path: {
                'site_id': siteId,
                'snippet_id': snippetId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param snippetId
     * @returns error error
     * @throws ApiError
     */
    public deleteSiteSnippet(
        siteId: string,
        snippetId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sites/{site_id}/snippets/{snippet_id}',
            path: {
                'site_id': siteId,
                'snippet_id': snippetId,
            },
        });
    }

}
