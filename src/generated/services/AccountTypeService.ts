/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { accountType } from '../models/accountType';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountTypeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns accountType OK
     * @returns error error
     * @throws ApiError
     */
    public listAccountTypesForUser(): CancelablePromise<Array<accountType> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/types',
        });
    }

}
