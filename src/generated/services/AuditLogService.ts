/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { auditLog } from '../models/auditLog';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuditLogService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param accountId
     * @param query
     * @param logType
     * @param page
     * @param perPage
     * @returns auditLog OK
     * @returns error error
     * @throws ApiError
     */
    public listAccountAuditEvents(
        accountId: string,
        query?: string,
        logType?: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<auditLog> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/audit',
            path: {
                'account_id': accountId,
            },
            query: {
                'query': query,
                'log_type': logType,
                'page': page,
                'per_page': perPage,
            },
        });
    }

}
