/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { splitTest } from '../models/splitTest';
import type { splitTests } from '../models/splitTests';
import type { splitTestSetup } from '../models/splitTestSetup';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SplitTestService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @param requestBody
     * @returns error error
     * @returns splitTest Created
     * @throws ApiError
     */
    public createSplitTest(
        siteId: string,
        requestBody: splitTestSetup,
    ): CancelablePromise<error | splitTest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/traffic_splits',
            path: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @returns splitTests split_tests
     * @returns error error
     * @throws ApiError
     */
    public getSplitTests(
        siteId: string,
    ): CancelablePromise<splitTests | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/traffic_splits',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param splitTestId
     * @param requestBody
     * @returns error error
     * @returns splitTest Created
     * @throws ApiError
     */
    public updateSplitTest(
        siteId: string,
        splitTestId: string,
        requestBody: splitTestSetup,
    ): CancelablePromise<error | splitTest> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/traffic_splits/{split_test_id}',
            path: {
                'site_id': siteId,
                'split_test_id': splitTestId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param siteId
     * @param splitTestId
     * @returns splitTest split_test
     * @returns error error
     * @throws ApiError
     */
    public getSplitTest(
        siteId: string,
        splitTestId: string,
    ): CancelablePromise<splitTest | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/traffic_splits/{split_test_id}',
            path: {
                'site_id': siteId,
                'split_test_id': splitTestId,
            },
        });
    }

    /**
     * @param siteId
     * @param splitTestId
     * @returns error error
     * @throws ApiError
     */
    public enableSplitTest(
        siteId: string,
        splitTestId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/traffic_splits/{split_test_id}/publish',
            path: {
                'site_id': siteId,
                'split_test_id': splitTestId,
            },
        });
    }

    /**
     * @param siteId
     * @param splitTestId
     * @returns error error
     * @throws ApiError
     */
    public disableSplitTest(
        siteId: string,
        splitTestId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/traffic_splits/{split_test_id}/unpublish',
            path: {
                'site_id': siteId,
                'split_test_id': splitTestId,
            },
        });
    }

}
