/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { buildHook } from '../models/buildHook';
import type { buildHookSetup } from '../models/buildHookSetup';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BuildHookService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns buildHook OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteBuildHooks(
        siteId: string,
    ): CancelablePromise<Array<buildHook> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/build_hooks',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param requestBody
     * @returns error error
     * @returns buildHook Created
     * @throws ApiError
     */
    public createSiteBuildHook(
        siteId: string,
        requestBody: buildHookSetup,
    ): CancelablePromise<error | buildHook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/build_hooks',
            path: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param id
     * @returns buildHook OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteBuildHook(
        siteId: string,
        id: string,
    ): CancelablePromise<buildHook | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/build_hooks/{id}',
            path: {
                'site_id': siteId,
                'id': id,
            },
        });
    }

    /**
     * @param siteId
     * @param id
     * @param requestBody
     * @returns error error
     * @throws ApiError
     */
    public updateSiteBuildHook(
        siteId: string,
        id: string,
        requestBody: buildHookSetup,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/build_hooks/{id}',
            path: {
                'site_id': siteId,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param id
     * @returns error error
     * @throws ApiError
     */
    public deleteSiteBuildHook(
        siteId: string,
        id: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sites/{site_id}/build_hooks/{id}',
            path: {
                'site_id': siteId,
                'id': id,
            },
        });
    }

}
