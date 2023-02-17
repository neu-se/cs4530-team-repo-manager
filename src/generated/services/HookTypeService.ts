/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { hookType } from '../models/hookType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class HookTypeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns hookType OK
     * @returns error error
     * @throws ApiError
     */
    public listHookTypes(): CancelablePromise<Array<hookType> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/hooks/types',
        });
    }

}
