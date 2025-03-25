/**
 * Returns percentage change between old and new value.
 * @see https://www.mathsisfun.com/numbers/percentage-change.html
 */
export function percentageChange(oldValue, newValue) {
    return (newValue - oldValue) / Math.abs(oldValue) * 100;
}
