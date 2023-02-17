/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { hook } from '../models/hook';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HookService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns hook OK
     * @returns error error
     * @throws ApiError
     */
    public listHooksBySiteId(
        siteId: string,
    ): CancelablePromise<Array<hook> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hooks',
            query: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param requestBody
     * @returns error error
     * @returns hook OK
     * @throws ApiError
     */
    public createHookBySiteId(
        siteId: string,
        requestBody: hook,
    ): CancelablePromise<error | hook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/hooks',
            query: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param hookId
     * @returns hook OK
     * @returns error error
     * @throws ApiError
     */
    public getHook(
        hookId: string,
    ): CancelablePromise<hook | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hooks/{hook_id}',
            path: {
                'hook_id': hookId,
            },
        });
    }

    /**
     * @param hookId
     * @param requestBody
     * @returns hook OK
     * @returns error error
     * @throws ApiError
     */
    public updateHook(
        hookId: string,
        requestBody: hook,
    ): CancelablePromise<hook | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/hooks/{hook_id}',
            path: {
                'hook_id': hookId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param hookId
     * @returns void
     * @throws ApiError
     */
    public deleteHook(
        hookId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/hooks/{hook_id}',
            path: {
                'hook_id': hookId,
            },
        });
    }

    /**
     * @param hookId
     * @returns hook OK
     * @returns error error
     * @throws ApiError
     */
    public enableHook(
        hookId: string,
    ): CancelablePromise<hook | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/hooks/{hook_id}/enable',
            path: {
                'hook_id': hookId,
            },
        });
    }

}
