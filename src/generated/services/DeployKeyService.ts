/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deployKey } from '../models/deployKey';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DeployKeyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns deployKey OK
     * @returns error error
     * @throws ApiError
     */
    public listDeployKeys(): CancelablePromise<Array<deployKey> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deploy_keys',
        });
    }

    /**
     * @returns error error
     * @returns deployKey Created
     * @throws ApiError
     */
    public createDeployKey(): CancelablePromise<error | deployKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/deploy_keys',
        });
    }

    /**
     * @param keyId
     * @returns deployKey OK
     * @returns error error
     * @throws ApiError
     */
    public getDeployKey(
        keyId: string,
    ): CancelablePromise<deployKey | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/deploy_keys/{key_id}',
            path: {
                'key_id': keyId,
            },
        });
    }

    /**
     * @param keyId
     * @returns error error
     * @throws ApiError
     */
    public deleteDeployKey(
        keyId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/deploy_keys/{key_id}',
            path: {
                'key_id': keyId,
            },
        });
    }

}
