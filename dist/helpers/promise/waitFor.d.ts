export declare const WAIT_FOR_DEFAULT_TIMEOUT = 10000;
export declare const WAIT_FOR_DEFAULT_POLL_TIME = 250;
/**
 * Creates a promise that polls a function to resolve with a value.
 * @param resolver Function that returns the value that should be waited for
 * @param timeoutMs Time to wait for
 * @param message Optional message to append to reject message
 * @param unresolvedValue Optional value that should be considered non result (default undefined)
 * @returns Promise that resolves when resolver has a result or rejects on timeout
 */
export declare function waitFor<T extends any>(resolver: () => any, timeoutMs?: number, message?: string, unresolvedValue?: any): Promise<T>;
