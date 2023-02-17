/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { asset } from '../models/asset';
import type { assetSignature } from '../models/assetSignature';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssetService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns asset OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteAssets(
        siteId: string,
    ): CancelablePromise<Array<asset> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/assets',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param name
     * @param size
     * @param contentType
     * @param visibility
     * @returns error error
     * @returns assetSignature Created
     * @throws ApiError
     */
    public createSiteAsset(
        siteId: string,
        name: string,
        size: number,
        contentType: string,
        visibility?: string,
    ): CancelablePromise<error | assetSignature> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/assets',
            path: {
                'site_id': siteId,
            },
            query: {
                'name': name,
                'size': size,
                'content_type': contentType,
                'visibility': visibility,
            },
        });
    }

    /**
     * @param siteId
     * @param assetId
     * @returns asset OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteAssetInfo(
        siteId: string,
        assetId: string,
    ): CancelablePromise<asset | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/assets/{asset_id}',
            path: {
                'site_id': siteId,
                'asset_id': assetId,
            },
        });
    }

    /**
     * @param siteId
     * @param assetId
     * @param state
     * @returns asset Updated
     * @returns error error
     * @throws ApiError
     */
    public updateSiteAsset(
        siteId: string,
        assetId: string,
        state: string,
    ): CancelablePromise<asset | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/assets/{asset_id}',
            path: {
                'site_id': siteId,
                'asset_id': assetId,
            },
            query: {
                'state': state,
            },
        });
    }

    /**
     * @param siteId
     * @param assetId
     * @returns error error
     * @throws ApiError
     */
    public deleteSiteAsset(
        siteId: string,
        assetId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sites/{site_id}/assets/{asset_id}',
            path: {
                'site_id': siteId,
                'asset_id': assetId,
            },
        });
    }

}
