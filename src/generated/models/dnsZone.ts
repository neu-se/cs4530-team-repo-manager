/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { dnsRecord } from './dnsRecord';

export type dnsZone = {
    id?: string;
    name?: string;
    errors?: Array<string>;
    supported_record_types?: Array<string>;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    records?: Array<dnsRecord>;
    dns_servers?: Array<string>;
    account_id?: string;
    site_id?: string;
    account_slug?: string;
    account_name?: string;
    domain?: string;
    ipv6_enabled?: boolean;
    dedicated?: boolean;
};

