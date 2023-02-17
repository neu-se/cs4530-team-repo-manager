/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { accountUsageCapability } from './accountUsageCapability';

export type accountMembership = {
    id?: string;
    name?: string;
    slug?: string;
    type?: string;
    capabilities?: {
        sites?: accountUsageCapability;
        collaborators?: accountUsageCapability;
    };
    billing_name?: string;
    billing_email?: string;
    billing_details?: string;
    billing_period?: string;
    payment_method_id?: string;
    type_name?: string;
    type_id?: string;
    owner_ids?: Array<string>;
    roles_allowed?: Array<string>;
    created_at?: string;
    updated_at?: string;
};

