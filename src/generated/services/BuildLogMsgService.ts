/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class BuildLogMsgService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param buildId
     * @returns error error
     * @throws ApiError
     */
    public updateSiteBuildLog(
        buildId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/builds/{build_id}/log',
            path: {
                'build_id': buildId,
            },
        });
    }

}
