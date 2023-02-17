/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { error } from '../models/error';
import type { sniCertificate } from '../models/sniCertificate';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SniCertificateService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @param certificate
     * @param key
     * @param caCertificates
     * @returns sniCertificate OK
     * @returns error error
     * @throws ApiError
     */
    public provisionSiteTlsCertificate(
        siteId: string,
        certificate?: string,
        key?: string,
        caCertificates?: string,
    ): CancelablePromise<sniCertificate | error> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sites/{site_id}/ssl',
            path: {
                'site_id': siteId,
            },
            query: {
                'certificate': certificate,
                'key': key,
                'ca_certificates': caCertificates,
            },
        });
    }

    /**
     * @param siteId
     * @returns sniCertificate OK
     * @returns error error
     * @throws ApiError
     */
    public showSiteTlsCertificate(
        siteId: string,
    ): CancelablePromise<sniCertificate | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/ssl',
            path: {
                'site_id': siteId,
            },
        });
    }

}
