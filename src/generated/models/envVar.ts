/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { envVarUser } from './envVarUser';
import type { envVarValue } from './envVarValue';

/**
 * Environment variable model definition
 */
export type envVar = {
    /**
     * The environment variable key, like ALGOLIA_ID (case-sensitive)
     */
    key?: string;
    /**
     * The scopes that this environment variable is set to
     */
    scopes?: Array<'builds' | 'functions' | 'runtime' | 'post-processing'>;
    /**
     * An array of Value objects containing values and metadata
     */
    values?: Array<envVarValue>;
    /**
     * The timestamp of when the value was last updated
     */
    updated_at?: string;
    updated_by?: envVarUser;
};

