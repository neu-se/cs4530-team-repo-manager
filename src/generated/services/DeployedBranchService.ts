/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deployedBranch } from '../models/deployedBranch';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DeployedBranchService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns deployedBranch OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteDeployedBranches(
        siteId: string,
    ): CancelablePromise<Array<deployedBranch> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/deployed-branches',
            path: {
                'site_id': siteId,
            },
        });
    }

}
