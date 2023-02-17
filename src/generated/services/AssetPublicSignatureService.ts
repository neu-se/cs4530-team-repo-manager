/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { assetPublicSignature } from '../models/assetPublicSignature';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AssetPublicSignatureService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @param assetId
     * @returns assetPublicSignature OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteAssetPublicSignature(
        siteId: string,
        assetId: string,
    ): CancelablePromise<assetPublicSignature | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/assets/{asset_id}/public_signature',
            path: {
                'site_id': siteId,
                'asset_id': assetId,
            },
        });
    }

}
