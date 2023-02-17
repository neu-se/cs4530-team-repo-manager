/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { paymentMethod } from '../models/paymentMethod';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PaymentMethodService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns paymentMethod OK
     * @returns error error
     * @throws ApiError
     */
    public listPaymentMethodsForUser(): CancelablePromise<Array<paymentMethod> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/billing/payment_methods',
        });
    }

}
