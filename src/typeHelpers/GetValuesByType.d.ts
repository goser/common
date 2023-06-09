/**
 * Get all values of a given mapped type which match the given type.
 *
 * Example:
 * type MyMappedType = {
 *     a: number
 *     b: boolean
 *     c: string
 *     d: bigint
 *     e: string
 *     f: number
 * }
 * type MyStrings = GetValuesByType<MyMappedType, string>
 * // => "c" | "e"
 *
 */
export type GetValuesByType<T extends object, V> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
