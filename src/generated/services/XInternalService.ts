/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { plugin } from '../models/plugin';
import type { pluginParams } from '../models/pluginParams';
import type { pluginRun } from '../models/pluginRun';
import type { pluginRunData } from '../models/pluginRunData';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class XInternalService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * This is an internal-only endpoint.
     * @param siteId
     * @param _package
     * @param requestBody
     * @returns plugin OK
     * @returns error error
     * @throws ApiError
     */
    public updatePlugin(
        siteId: string,
        _package: string,
        requestBody?: pluginParams,
    ): CancelablePromise<plugin | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/plugins/{package}',
            path: {
                'site_id': siteId,
                'package': _package,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * This is an internal-only endpoint.
     * @param siteId
     * @param packages
     * @param state
     * @returns pluginRun OK
     * @returns error error
     * @throws ApiError
     */
    public getLatestPluginRuns(
        siteId: string,
        packages: Array<string>,
        state?: string,
    ): CancelablePromise<Array<pluginRun> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/plugin_runs/latest',
            path: {
                'site_id': siteId,
            },
            query: {
                'packages': packages,
                'state': state,
            },
        });
    }

    /**
     * This is an internal-only endpoint.
     * @param deployId
     * @param requestBody
     * @returns error error
     * @returns pluginRun CREATED
     * @throws ApiError
     */
    public createPluginRun(
        deployId: string,
        requestBody?: pluginRunData,
    ): CancelablePromise<error | pluginRun> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deploys/{deploy_id}/plugin_runs',
            path: {
                'deploy_id': deployId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
