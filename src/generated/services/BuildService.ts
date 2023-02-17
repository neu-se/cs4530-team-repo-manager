/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { build } from '../models/build';
import type { buildSetup } from '../models/buildSetup';
import type { buildStatus } from '../models/buildStatus';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BuildService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @param page
     * @param perPage
     * @returns build OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteBuilds(
        siteId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<build> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/builds',
            path: {
                'site_id': siteId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * @param siteId
     * @param requestBody
     * @returns build OK
     * @returns error error
     * @throws ApiError
     */
    public createSiteBuild(
        siteId: string,
        requestBody?: buildSetup,
    ): CancelablePromise<build | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/builds',
            path: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param buildId
     * @returns build OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteBuild(
        buildId: string,
    ): CancelablePromise<build | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/builds/{build_id}',
            path: {
                'build_id': buildId,
            },
        });
    }

    /**
     * @param buildId
     * @returns error error
     * @throws ApiError
     */
    public notifyBuildStart(
        buildId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/builds/{build_id}/start',
            path: {
                'build_id': buildId,
            },
        });
    }

    /**
     * @param accountId
     * @returns buildStatus OK
     * @returns error error
     * @throws ApiError
     */
    public getAccountBuildStatus(
        accountId: string,
    ): CancelablePromise<Array<buildStatus> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{account_id}/builds/status',
            path: {
                'account_id': accountId,
            },
        });
    }

}
