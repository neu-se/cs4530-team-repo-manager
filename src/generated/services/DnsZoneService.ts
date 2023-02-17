/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { dnsRecord } from '../models/dnsRecord';
import type { dnsRecordCreate } from '../models/dnsRecordCreate';
import type { dnsRecords } from '../models/dnsRecords';
import type { dnsZone } from '../models/dnsZone';
import type { dnsZones } from '../models/dnsZones';
import type { dnsZoneSetup } from '../models/dnsZoneSetup';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DnsZoneService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param siteId
     * @returns dnsZone OK
     * @returns error error
     * @throws ApiError
     */
    public getDnsForSite(
        siteId: string,
    ): CancelablePromise<Array<dnsZone> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sites/{site_id}/dns',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param siteId
     * @returns dnsZone OK
     * @returns error error
     * @throws ApiError
     */
    public configureDnsForSite(
        siteId: string,
    ): CancelablePromise<Array<dnsZone> | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sites/{site_id}/dns',
            path: {
                'site_id': siteId,
            },
        });
    }

    /**
     * @param requestBody
     * @returns error error
     * @returns dnsZone Created
     * @throws ApiError
     */
    public createDnsZone(
        requestBody: dnsZoneSetup,
    ): CancelablePromise<error | dnsZone> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dns_zones',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param accountSlug
     * @returns dnsZones get all DNS zones the user has access to
     * @returns error error
     * @throws ApiError
     */
    public getDnsZones(
        accountSlug?: string,
    ): CancelablePromise<dnsZones | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dns_zones',
            query: {
                'account_slug': accountSlug,
            },
        });
    }

    /**
     * @param zoneId
     * @returns dnsZone get a single DNS zone
     * @returns error error
     * @throws ApiError
     */
    public getDnsZone(
        zoneId: string,
    ): CancelablePromise<dnsZone | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dns_zones/{zone_id}',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * @param zoneId
     * @returns error error
     * @throws ApiError
     */
    public deleteDnsZone(
        zoneId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dns_zones/{zone_id}',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * @param zoneId
     * @param accountId the account of the dns zone
     * @param transferAccountId the account you want to transfer the dns zone to
     * @param transferUserId the user you want to transfer the dns zone to
     * @returns dnsZone transfer a DNS zone to another account
     * @returns error error
     * @throws ApiError
     */
    public transferDnsZone(
        zoneId: string,
        accountId: string,
        transferAccountId: string,
        transferUserId: string,
    ): CancelablePromise<dnsZone | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dns_zones/{zone_id}/transfer',
            path: {
                'zone_id': zoneId,
            },
            query: {
                'account_id': accountId,
                'transfer_account_id': transferAccountId,
                'transfer_user_id': transferUserId,
            },
        });
    }

    /**
     * @param zoneId
     * @returns dnsRecords get all DNS records for a single DNS zone
     * @returns error error
     * @throws ApiError
     */
    public getDnsRecords(
        zoneId: string,
    ): CancelablePromise<dnsRecords | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dns_zones/{zone_id}/dns_records',
            path: {
                'zone_id': zoneId,
            },
        });
    }

    /**
     * @param zoneId
     * @param requestBody
     * @returns error error
     * @returns dnsRecord Created
     * @throws ApiError
     */
    public createDnsRecord(
        zoneId: string,
        requestBody: dnsRecordCreate,
    ): CancelablePromise<error | dnsRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dns_zones/{zone_id}/dns_records',
            path: {
                'zone_id': zoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param zoneId
     * @param dnsRecordId
     * @returns dnsRecord get a single DNS record
     * @returns error error
     * @throws ApiError
     */
    public getIndividualDnsRecord(
        zoneId: string,
        dnsRecordId: string,
    ): CancelablePromise<dnsRecord | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dns_zones/{zone_id}/dns_records/{dns_record_id}',
            path: {
                'zone_id': zoneId,
                'dns_record_id': dnsRecordId,
            },
        });
    }

    /**
     * @param zoneId
     * @param dnsRecordId
     * @returns error error
     * @throws ApiError
     */
    public deleteDnsRecord(
        zoneId: string,
        dnsRecordId: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/dns_zones/{zone_id}/dns_records/{dns_record_id}',
            path: {
                'zone_id': zoneId,
                'dns_record_id': dnsRecordId,
            },
        });
    }

}
