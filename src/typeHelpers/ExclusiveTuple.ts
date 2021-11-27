import {ValuesOf} from './ValuesOfMap';

// TODO find a way that has more elegance than an intermediate string literal map

// store to string literal type
// a union of all possible combinations
type FullCombination<Type extends string> = `${Type}_${Type}`;

// a union of all duplicate combinations
type DuplicatesAsUnion<Type extends string> = {
    [P in Type]: `${P}_${P}`
}[Type];

// a union of possible combinations without duplicates
type WithoutDuplicates<Type extends string> = Exclude<FullCombination<Type>, DuplicatesAsUnion<Type>>

// a map of combinations to tuples
type TupleMap<Type extends string> = {
    [P in WithoutDuplicates<Type>]: P extends `${infer L1}_${infer L2}` ? [L1, L2] : never
}

/**
 * Represents a tuple with combinations of a given string type while excluding duplicates
 *
 * Example:
 * type MyStrings = 'a' | 'b' | 'c';
 * type MyTuples = ExclusiveTuples<MyStrings>;
 * // => ["a", "c"] | ["c", "a"] | ["a", "b"] | ["b", "a"] | ["b", "c"] | ["c", "b"]
 */
export type ExclusiveTuple<Type extends string> = ValuesOf<TupleMap<Type>>;
