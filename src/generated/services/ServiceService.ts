/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { service } from '../models/service';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ServiceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param search
     * @returns service services
     * @returns error error
     * @throws ApiError
     */
    public getServices(
        search?: string,
    ): CancelablePromise<Array<service> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/',
            query: {
                'search': search,
            },
        });
    }

    /**
     * @param addonName
     * @returns service services
     * @returns error error
     * @throws ApiError
     */
    public showService(
        addonName: string,
    ): CancelablePromise<service | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{addonName}',
            path: {
                'addonName': addonName,
            },
        });
    }

    /**
     * @param addonName
     * @returns error error
     * @returns any retrieving from provider
     * @throws ApiError
     */
    public showServiceManifest(
        addonName: string,
    ): CancelablePromise<error | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/services/{addonName}/manifest',
            path: {
                'addonName': addonName,
            },
        });
    }

}
