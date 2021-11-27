import { ValuesOfMap } from './ValuesOfMap';
declare type FullCombination<Type extends string> = `${Type}_${Type}`;
declare type DuplicatesAsUnion<Type extends string> = {
    [P in Type]: `${P}_${P}`;
}[Type];
declare type WithoutDuplicates<Type extends string> = Exclude<FullCombination<Type>, DuplicatesAsUnion<Type>>;
declare type TupleMap<Type extends string> = {
    [P in WithoutDuplicates<Type>]: P extends `${infer L1}_${infer L2}` ? [L1, L2] : never;
};
/**
 * Represents a tuple with combinations of a given string type while excluding duplicates
 *
 * Example:
 * type MyStrings = 'a' | 'b' | 'c';
 * type MyTuples = ExclusiveTuples<MyStrings>;
 * // => ["a", "c"] | ["c", "a"] | ["a", "b"] | ["b", "a"] | ["b", "c"] | ["c", "b"]
 */
export declare type ExclusiveTuple<Type extends string> = ValuesOfMap<TupleMap<Type>>;
export {};
