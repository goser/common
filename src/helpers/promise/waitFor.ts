export const WAIT_FOR_DEFAULT_TIMEOUT = 10000
export const WAIT_FOR_DEFAULT_POLL_TIME = 250

type Options = {

    /// Time to wait for, set to 0 if wait forever
    timeoutMs?: number
    /// Time to wait between resolver calls
    pollMs?: number
    /// Optional message to append to reject message
    message?: string
    /// Optional value that should be considered non result (default undefined)
    unresolvedValue?: any
}

/**
 * Creates a promise that polls a function to resolve with a value.
 * @param resolver Function that returns the value that should be waited for
 * @param Options Options for the wait
 * @returns Promise that resolves when resolver has a result or rejects on timeout
 */
export async function waitFor<T extends any,>(resolver: () => T | Promise<T>, options: Options = {}): Promise<T> {

    const timeoutMs = options.timeoutMs !== undefined ? options.timeoutMs : WAIT_FOR_DEFAULT_TIMEOUT
    const {unresolvedValue, message, pollMs} = options

    return new Promise((resolve, reject) => {
        let interval: number
        const check = () => {
            const result = resolver()
            function checkResult(res: T) {
                if (res !== unresolvedValue) {
                    clear()
                    resolve(res)
                } else {
                    next()
                }
            }
            if (result instanceof Promise) {
                result.then(checkResult).catch(reason => reject(reason))
            } else {
                checkResult(result)
            }
        }
        const next = () => {
            interval = setTimeout(check, pollMs || WAIT_FOR_DEFAULT_POLL_TIME)
        }
        let timeout = 0
        if (timeoutMs > 0) {
            timeout = setTimeout(() => {
                clear()
                reject(`Condition not met after ${timeoutMs}ms. Condition: ${resolver}${message ? ` Message: ${message}` : ''}`)
            }, timeoutMs)
        }
        const clear = () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }

        next()
    })
}