/**
 * Retrieve all values of a mapped type as array
 *
 * Example:
 * type MyMappedType = {
 *     g: string
 *     prop4: 'Tarzan',
 *     prop5: boolean,
 *     prop6: number,
 * }
 * type MyValues = ValuesOf<MyMappedType>;
 * // => string | number | boolean | "Tarzan"
 */
export declare type ValuesOf<T extends object> = {
    [K in keyof T]: T[K];
}[keyof T];
