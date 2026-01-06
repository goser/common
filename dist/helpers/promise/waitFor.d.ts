export declare const WAIT_FOR_DEFAULT_TIMEOUT = 10000;
export declare const WAIT_FOR_DEFAULT_POLL_TIME = 250;
type Options = {
    timeoutMs?: number;
    pollMs?: number;
    message?: string;
    unresolvedValue?: any;
};
/**
 * Creates a promise that polls a function to resolve with a value.
 * @param resolver Function that returns the value that should be waited for
 * @param Options Options for the wait
 * @returns Promise that resolves when resolver has a result or rejects on timeout
 */
export declare function waitFor<T extends any>(resolver: () => T | Promise<T>, options?: Options): Promise<T>;
export {};
