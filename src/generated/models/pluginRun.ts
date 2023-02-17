/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { pluginRunData } from './pluginRunData';

export type pluginRun = (pluginRunData & {
    deploy_id?: string;
});

