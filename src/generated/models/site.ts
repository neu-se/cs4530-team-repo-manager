/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { deploy } from './deploy';
import type { minifyOptions } from './minifyOptions';
import type { repoInfo } from './repoInfo';

export type site = {
    id?: string;
    state?: string;
    plan?: string;
    name?: string;
    custom_domain?: string;
    domain_aliases?: Array<string>;
    password?: string;
    notification_email?: string;
    url?: string;
    ssl_url?: string;
    admin_url?: string;
    screenshot_url?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
    session_id?: string;
    ssl?: boolean;
    force_ssl?: boolean;
    managed_dns?: boolean;
    deploy_url?: string;
    published_deploy?: deploy;
    account_name?: string;
    account_slug?: string;
    git_provider?: string;
    deploy_hook?: string;
    capabilities?: Record<string, any>;
    processing_settings?: {
        skip?: boolean;
        css?: minifyOptions;
        js?: minifyOptions;
        images?: {
            optimize?: boolean;
        };
        html?: {
            pretty_urls?: boolean;
        };
    };
    build_settings?: repoInfo;
    id_domain?: string;
    default_hooks_data?: {
        access_token?: string;
    };
    build_image?: string;
    prerender?: string;
};

