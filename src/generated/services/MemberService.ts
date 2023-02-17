/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { member } from '../models/member';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MemberService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param accountSlug
     * @returns member OK
     * @returns error error
     * @throws ApiError
     */
    public listMembersForAccount(
        accountSlug: string,
    ): CancelablePromise<Array<member> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{account_slug}/members',
            path: {
                'account_slug': accountSlug,
            },
        });
    }

    /**
     * @param accountSlug
     * @param email
     * @param role
     * @returns member OK
     * @returns error error
     * @throws ApiError
     */
    public addMemberToAccount(
        accountSlug: string,
        email: string,
        role?: 'Owner' | 'Collaborator' | 'Controller',
    ): CancelablePromise<Array<member> | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{account_slug}/members',
            path: {
                'account_slug': accountSlug,
            },
            query: {
                'role': role,
                'email': email,
            },
        });
    }

}
