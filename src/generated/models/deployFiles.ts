/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { functionSchedule } from './functionSchedule';

export type deployFiles = {
    files?: any;
    draft?: boolean;
    async?: boolean;
    functions?: any;
    function_schedules?: Array<functionSchedule>;
    branch?: string;
    framework?: string;
};

