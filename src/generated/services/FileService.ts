/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
// import type { file } from '../models/file';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FileService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns file OK
     * @returns error error
     * @throws ApiError
     */
    public listSiteFiles(
        siteId: string,
    ): CancelablePromise<Array<any> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/files',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @param filePath
     * @returns file OK
     * @returns error error
     * @throws ApiError
     */
    public getSiteFileByPathName(
        siteId: string,
        filePath: string,
    ): CancelablePromise<any | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/files/{file_path}',
            path: {
                'site_id': siteId,
                'file_path': filePath,
            },
        });
    }

    /**
     * @param deployId
     * @param path
     * @param requestBody
     * @param size
     * @returns file OK
     * @returns error error
     * @throws ApiError
     */
    public uploadDeployFile(
        deployId: string,
        path: string,
        requestBody: Blob,
        size?: number,
    ): CancelablePromise<any | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/deploys/{deploy_id}/files/{path}',
            path: {
                'deploy_id': deployId,
                'path': path,
            },
            query: {
                'size': size,
            },
            body: requestBody,
            mediaType: 'application/octet-stream',
        });
    }

}
