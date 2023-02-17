/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { ticket } from '../models/ticket';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TicketService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param clientId
     * @returns error error
     * @returns ticket ok
     * @throws ApiError
     */
    public createTicket(
        clientId: string,
    ): CancelablePromise<error | ticket> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/oauth/tickets',
            query: {
                'client_id': clientId,
            },
        });
    }

    /**
     * @param ticketId
     * @returns ticket ok
     * @returns error error
     * @throws ApiError
     */
    public showTicket(
        ticketId: string,
    ): CancelablePromise<ticket | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/oauth/tickets/{ticket_id}',
            path: {
                'ticket_id': ticketId,
            },
        });
    }

}
