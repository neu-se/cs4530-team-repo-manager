/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deploy } from '../models/deploy';
import type { deployFiles } from '../models/deployFiles';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DeployService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @param page
     * @param perPage
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteDeploys(
        siteId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<deploy> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/deploys',
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
     * @param title
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public createSiteDeploy(
        siteId: string,
        requestBody: deployFiles,
        title?: string,
    ): CancelablePromise<deploy | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/deploys',
            path: {
                'site_id': siteId,
            },
            query: {
                'title': title,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param deployId
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteDeploy(
        siteId: string,
        deployId: string,
    ): CancelablePromise<deploy | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/deploys/{deploy_id}',
            path: {
                'site_id': siteId,
                'deploy_id': deployId,
            },
        });
    }

    /**
     * @param siteId
     * @param deployId
     * @param requestBody
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public updateSiteDeploy(
        siteId: string,
        deployId: string,
        requestBody: deployFiles,
    ): CancelablePromise<deploy | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/deploys/{deploy_id}',
            path: {
                'site_id': siteId,
                'deploy_id': deployId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param deployId
     * @returns error error
     * @returns deploy Cancelled
     * @throws ApiError
     */
    public cancelSiteDeploy(
        deployId: string,
    ): CancelablePromise<error | deploy> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deploys/{deploy_id}/cancel',
            path: {
                'deploy_id': deployId,
            },
        });
    }

    /**
     * @param siteId
     * @param deployId
     * @returns error error
     * @returns deploy Created
     * @throws ApiError
     */
    public restoreSiteDeploy(
        siteId: string,
        deployId: string,
    ): CancelablePromise<error | deploy> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/deploys/{deploy_id}/restore',
            path: {
                'site_id': siteId,
                'deploy_id': deployId,
            },
        });
    }

    /**
     * @param siteId
     * @returns error error
     * @throws ApiError
     */
    public rollbackSiteDeploy(
        siteId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/rollback',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param deployId
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public getDeploy(
        deployId: string,
    ): CancelablePromise<deploy | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deploys/{deploy_id}',
            path: {
                'deploy_id': deployId,
            },
        });
    }

    /**
     * @param deployId
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public lockDeploy(
        deployId: string,
    ): CancelablePromise<deploy | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deploys/{deploy_id}/lock',
            path: {
                'deploy_id': deployId,
            },
        });
    }

    /**
     * @param deployId
     * @returns deploy OK
     * @returns error error
     * @throws ApiError
     */
    public unlockDeploy(
        deployId: string,
    ): CancelablePromise<deploy | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deploys/{deploy_id}/unlock',
            path: {
                'deploy_id': deployId,
            },
        });
    }

}
