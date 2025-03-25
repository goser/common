/**
 * Returns Percentage difference of two numbers of the same kind.
 * @see https://www.mathsisfun.com/percentage-difference.html
 */
export function percentageDifference(a, b) {
    return (a - b) / (a + b) / 2 * 100;
}
