
/**
 * Returns the percentage error between an estimated value and an actual value.
 * @see https://www.mathsisfun.com/numbers/percentage-error.html
 */
export function percentageError(actual: number, estimated: number, absolute: boolean = false) {
    if (absolute) {
        return Math.abs(estimated - actual) / Math.abs(actual) * 100
    }
    return (estimated - actual) / actual * 100
}