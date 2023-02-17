/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { envVar } from '../models/envVar';
import type { envVarValue } from '../models/envVarValue';
import type { error } from '../models/error';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class EnvironmentVariablesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * [Beta] Returns all environment variables for an account or site. An account corresponds to a team in the Netlify UI. To use this endpoint, opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param contextName Filter by deploy context
     * @param scope Filter by scope
     * @param siteId If specified, only return environment variables set on this site
     * @returns envVar OK
     * @returns error error
     * @throws ApiError
     */
    public getEnvVars(
        accountId: string,
        contextName?: 'all' | 'dev' | 'branch-deploy' | 'deploy-preview' | 'production',
        scope?: 'builds' | 'functions' | 'runtime' | 'post-processing',
        siteId?: string,
    ): CancelablePromise<Array<envVar> | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/env',
            path: {
                'account_id': accountId,
            },
            query: {
                'context_name': contextName,
                'scope': scope,
                'site_id': siteId,
            },
        });
    }

    /**
     * [Beta] Creates new environment variables. Granular scopes are available on Pro plans and above.  To use this endpoint, opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param siteId If provided, create an environment variable on the site level, not the account level
     * @param requestBody
     * @returns error error
     * @returns envVar OK
     * @throws ApiError
     */
    public createEnvVars(
        accountId: string,
        siteId?: string,
        requestBody?: Array<{
            /**
             * The existing or new name of the key, if you wish to rename it (case-sensitive)
             */
            key?: string;
            /**
             * The scopes that this environment variable is set to (Pro plans and above)
             */
            scopes?: Array<'builds' | 'functions' | 'runtime' | 'post-processing'>;
            values?: Array<envVarValue>;
        }>,
    ): CancelablePromise<error | Array<envVar>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/accounts/{account_id}/env',
            path: {
                'account_id': accountId,
            },
            query: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * [Beta] Returns an individual environment variable. To use this endpoint, opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param key The environment variable key (case-sensitive)
     * @param siteId If provided, return the environment variable for a specific site (no merging is performed)
     * @returns envVar OK
     * @returns error error
     * @throws ApiError
     */
    public getEnvVar(
        accountId: string,
        key: string,
        siteId?: string,
    ): CancelablePromise<envVar | error> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/accounts/{account_id}/env/{key}',
            path: {
                'account_id': accountId,
                'key': key,
            },
            query: {
                'site_id': siteId,
            },
        });
    }

    /**
     * [Beta] Updates an existing environment variable and all of its values. Existing values will be replaced by values provided. To use this endpoint, opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param key The existing environment variable key name (case-sensitive)
     * @param siteId If provided, update an environment variable set on this site
     * @param requestBody
     * @returns envVar OK
     * @returns error error
     * @throws ApiError
     */
    public updateEnvVar(
        accountId: string,
        key: string,
        siteId?: string,
        requestBody?: {
            /**
             * The existing or new name of the key, if you wish to rename it (case-sensitive)
             */
            key?: string;
            /**
             * The scopes that this environment variable is set to (Pro plans and above)
             */
            scopes?: Array<'builds' | 'functions' | 'runtime' | 'post-processing'>;
            values?: Array<envVarValue>;
        },
    ): CancelablePromise<envVar | error> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/accounts/{account_id}/env/{key}',
            path: {
                'account_id': accountId,
                'key': key,
            },
            query: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * [Beta] Updates or creates a new value for an existing environment variable. To use this endpoint, opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param key The existing environment variable key name (case-sensitive)
     * @param siteId If provided, update an environment variable set on this site
     * @param requestBody
     * @returns error error
     * @returns envVar Created (success)
     * @throws ApiError
     */
    public setEnvVarValue(
        accountId: string,
        key: string,
        siteId?: string,
        requestBody?: {
            /**
             * The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`.
             */
            context?: 'dev' | 'branch-deploy' | 'deploy-preview' | 'production';
            /**
             * The environment variable's unencrypted value
             */
            value?: string;
        },
    ): CancelablePromise<error | envVar> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/accounts/{account_id}/env/{key}',
            path: {
                'account_id': accountId,
                'key': key,
            },
            query: {
                'site_id': siteId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * [Beta] Deletes an environment variable. To use this endpoint, opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param key The environment variable key (case-sensitive)
     * @param siteId If provided, delete the environment variable from this site
     * @returns error error
     * @throws ApiError
     */
    public deleteEnvVar(
        accountId: string,
        key: string,
        siteId?: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_id}/env/{key}',
            path: {
                'account_id': accountId,
                'key': key,
            },
            query: {
                'site_id': siteId,
            },
        });
    }

    /**
     * [Beta] Deletes a specific environment variable value. To use this endpoint,  opt in to the beta environment variable experience using the Netlify UI.
     * @param accountId Scope response to account_id
     * @param id The environment variable value's ID
     * @param key The environment variable key name (case-sensitive)
     * @param siteId If provided, delete the value from an environment variable on this site
     * @returns error error
     * @throws ApiError
     */
    public deleteEnvVarValue(
        accountId: string,
        id: string,
        key: string,
        siteId?: string,
    ): CancelablePromise<error> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/accounts/{account_id}/env/{key}/value/{id}',
            path: {
                'account_id': accountId,
                'id': id,
                'key': key,
            },
            query: {
                'site_id': siteId,
            },
        });
    }

}
