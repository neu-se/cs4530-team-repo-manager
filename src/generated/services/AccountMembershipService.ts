/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { accountMembership } from '../models/accountMembership';
import type { accountSetup } from '../models/accountSetup';
import type { accountUpdateSetup } from '../models/accountUpdateSetup';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountMembershipService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns accountMembership OK
     * @returns error error
     * @throws ApiError
     */
    public listAccountsForUser(): CancelablePromise<Array<accountMembership> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts',
        });
    }

    /**
     * @param requestBody
     * @returns error error
     * @returns accountMembership Created
     * @throws ApiError
     */
    public createAccount(
        requestBody: accountSetup,
    ): CancelablePromise<error | accountMembership> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param accountId
     * @returns accountMembership OK
     * @returns error error
     * @throws ApiError
     */
    public getAccount(
        accountId: string,
    ): CancelablePromise<Array<accountMembership> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
        });
    }

    /**
     * @param accountId
     * @param requestBody
     * @returns accountMembership OK
     * @returns error error
     * @throws ApiError
     */
    public updateAccount(
        accountId: string,
        requestBody?: accountUpdateSetup,
    ): CancelablePromise<accountMembership | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param accountId
     * @returns error error
     * @throws ApiError
     */
    public cancelAccount(
        accountId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_id}',
            path: {
                'account_id': accountId,
            },
        });
    }

}
