export const WAIT_FOR_DEFAULT_TIMEOUT = 10000;
export const WAIT_FOR_DEFAULT_POLL_TIME = 250;
/**
 * Creates a promise that polls a function to resolve with a value.
 * @param resolver Function that returns the value that should be waited for
 * @param timeoutMs Time to wait for
 * @param message Optional message to append to reject message
 * @param unresolvedValue Optional value that should be considered non result (default undefined)
 * @returns Promise that resolves when resolver has a result or rejects on timeout
 */
export async function waitFor(resolver, timeoutMs, message, unresolvedValue) {
    timeoutMs = timeoutMs || WAIT_FOR_DEFAULT_TIMEOUT;
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            const result = resolver();
            if (result !== unresolvedValue) {
                clear();
                resolve(result);
            }
        }, WAIT_FOR_DEFAULT_POLL_TIME);
        let timeout = 0;
        if (timeoutMs > 0) {
            timeout = setTimeout(() => {
                clear();
                reject(`Condition not met after ${timeoutMs}ms. Condition: ${resolver}${message ? ` Message: ${message}` : ''}`);
            }, timeoutMs);
        }
        const clear = () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    });
}
