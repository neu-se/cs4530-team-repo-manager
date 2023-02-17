/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Environment variable value model definition
 */
export type envVarValue = {
    /**
     * The environment variable value's universally unique ID
     */
    id?: string;
    /**
     * The environment variable's unencrypted value
     */
    value?: string;
    /**
     * The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`.
     */
    context?: envVarValue.context;
};

export namespace envVarValue {

    /**
     * The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`.
     */
    export enum context {
        ALL = 'all',
        DEV = 'dev',
        BRANCH_DEPLOY = 'branch-deploy',
        DEPLOY_PREVIEW = 'deploy-preview',
        PRODUCTION = 'production',
    }


}

