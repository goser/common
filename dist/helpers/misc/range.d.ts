export type RangeMethod<T = number> = {
    /**
     * Creates an array of integers.
     * <pre>
     * Examples:
     *     range(5, 10); // [5, 6, 7, 8, 9]
     *     // with steps
     *     range(0, 6, 2); // [0, 2, 4]
     *     range(10, 12, 0.5); // [10, 10.5, 11, 11.5]
     * </pre>
     * @param start Number to begin with
     * @param end Number to end with (end is not included in array)
     * @param step Multiplier for the steps. Defaults to 1
     */
    (start: number, end: number, step?: number): T[];
    /**
     * Create an array of integers with count as length
     * <pre>
     * Example:
     *     range(5); // [0, 1, 2, 3, 4]
     * </pre>
     * @param count Length of the created array
     */
    (count: number): T[];
};
export declare const range: RangeMethod;
