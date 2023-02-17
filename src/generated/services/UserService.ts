/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { user } from '../models/user';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns user OK
     * @returns error error
     * @throws ApiError
     */
    public getCurrentUser(): CancelablePromise<Array<user> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
        });
    }

}
