/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { serviceInstance } from '../models/serviceInstance';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceInstanceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns serviceInstance OK
     * @returns error error
     * @throws ApiError
     */
    public listServiceInstancesForSite(
        siteId: string,
    ): CancelablePromise<Array<serviceInstance> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/service-instances',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param addon
     * @param requestBody
     * @returns error error
     * @returns serviceInstance Created
     * @throws ApiError
     */
    public createServiceInstance(
        siteId: string,
        addon: string,
        requestBody: any,
    ): CancelablePromise<error | serviceInstance> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/services/{addon}/instances',
            path: {
                'site_id': siteId,
                'addon': addon,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param addon
     * @param instanceId
     * @returns serviceInstance OK
     * @returns error error
     * @throws ApiError
     */
    public showServiceInstance(
        siteId: string,
        addon: string,
        instanceId: string,
    ): CancelablePromise<serviceInstance | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/services/{addon}/instances/{instance_id}',
            path: {
                'site_id': siteId,
                'addon': addon,
                'instance_id': instanceId,
            },
        });
    }

    /**
     * @param siteId
     * @param addon
     * @param instanceId
     * @param requestBody
     * @returns error error
     * @throws ApiError
     */
    public updateServiceInstance(
        siteId: string,
        addon: string,
        instanceId: string,
        requestBody: any,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/services/{addon}/instances/{instance_id}',
            path: {
                'site_id': siteId,
                'addon': addon,
                'instance_id': instanceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param addon
     * @param instanceId
     * @returns error error
     * @throws ApiError
     */
    public deleteServiceInstance(
        siteId: string,
        addon: string,
        instanceId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sites/{site_id}/services/{addon}/instances/{instance_id}',
            path: {
                'site_id': siteId,
                'addon': addon,
                'instance_id': instanceId,
            },
        });
    }

}
