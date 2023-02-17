/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
// import type { function } from '../models/function';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FunctionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param deployId
     * @param name
     * @param requestBody
     * @param runtime
     * @param size
     * @param xNfRetryCount
     * @returns function OK
     * @returns error error
     * @throws ApiError
     */
    public uploadDeployFunction(
        deployId: string,
        name: string,
        requestBody: Blob,
        runtime?: string,
        size?: number,
        xNfRetryCount?: number,
    ): CancelablePromise<any | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/deploys/{deploy_id}/functions/{name}',
            path: {
                'deploy_id': deployId,
                'name': name,
            },
            headers: {
                'X-Nf-Retry-Count': xNfRetryCount,
            },
            query: {
                'runtime': runtime,
                'size': size,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
        });
    }

}
