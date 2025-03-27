/**
 * When union types get intersected with common properties,
 * the type can get a bit messy. This helper type "merges" the common properties
 * with the members of the union
 *
 * Example:
 *     type IntersectedUnion = {common: string} & ({special1: string} | {special2: string})
 *
 *     // this shows as:
 *     // type IntersectedUnion = {
 *     //     common: string;
 *     // } & ({
 *     //     special1: string;
 *     // } | {
 *     //     special2: string;
 *     // })
 *
 *     type SimpleUnion = FlattenProps<IntersectedUnion>
 *
 *     // this shows as:
 *     // type SimpleUnion = {
 *     //     common: string;
 *     //     special1: string;
 *     // } | {
 *     //     common: string;
 *     //     special2: string;
 *     // }
 */
export type FlattenProps<T> = {
    [P in keyof T]: T[P];
} & {};
