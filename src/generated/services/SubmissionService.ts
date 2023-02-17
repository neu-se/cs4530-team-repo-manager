/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { submission } from '../models/submission';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubmissionService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @param page
     * @param perPage
     * @returns submission OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteSubmissions(
        siteId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<submission> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/submissions',
            path: {
                'site_id': siteId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * @param formId
     * @param page
     * @param perPage
     * @returns submission OK
     * @returns error error
     * @throws ApiError
     */
    public listFormSubmissions(
        formId: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<submission> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/forms/{form_id}/submissions',
            path: {
                'form_id': formId,
            },
            query: {
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * @param submissionId
     * @param query
     * @param page
     * @param perPage
     * @returns submission OK
     * @returns error error
     * @throws ApiError
     */
    public listFormSubmission(
        submissionId: string,
        query?: string,
        page?: number,
        perPage?: number,
    ): CancelablePromise<Array<submission> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/submissions/{submission_id}',
            path: {
                'submission_id': submissionId,
            },
            query: {
                'query': query,
                'page': page,
                'per_page': perPage,
            },
        });
    }

    /**
     * @param submissionId
     * @returns error error
     * @throws ApiError
     */
    public deleteSubmission(
        submissionId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/submissions/{submission_id}',
            path: {
                'submission_id': submissionId,
            },
        });
    }

}
