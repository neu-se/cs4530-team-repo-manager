/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { form } from '../models/form';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FormService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns form OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteForms(
        siteId: string,
    ): CancelablePromise<Array<form> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/forms',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param formId
     * @returns error error
     * @throws ApiError
     */
    public deleteSiteForm(
        siteId: string,
        formId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sites/{site_id}/forms/{form_id}',
            path: {
                'site_id': siteId,
                'form_id': formId,
            },
        });
    }

}
