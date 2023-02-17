/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { accessToken } from '../models/accessToken';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccessTokenService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param ticketId
     * @returns error error
     * @returns accessToken ok
     * @throws ApiError
     */
    public exchangeTicket(
        ticketId: string,
    ): CancelablePromise<error | accessToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/oauth/tickets/{ticket_id}/exchange',
            path: {
                'ticket_id': ticketId,
            },
        });
    }

}
