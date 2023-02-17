/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { metadata } from '../models/metadata';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MetadataService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns metadata OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteMetadata(
        siteId: string,
    ): CancelablePromise<metadata | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/metadata',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param requestBody
     * @returns error error
     * @throws ApiError
     */
    public updateSiteMetadata(
        siteId: string,
        requestBody: metadata,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/metadata',
            path: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
