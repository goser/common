//
// this file contains typing stuff that is not needed but helped me understanding things
//

import {Equal} from './Equal';
import {Expect} from './Expect';
import {ValuesOfMap} from './ValuesOfMap';

const localeStrings = [
    'de',
    'en',
    'fr',
] as const;

export type Locale = typeof localeStrings[number];

type ExcludingLocale<LocaleToExclude extends Locale> = Exclude<Locale, LocaleToExclude>;

type FullCombination = `${Locale}_${Locale}`;
// => "de_de" | "de_en" | "de_fr" | "en_de" | "en_en" | "en_fr" | "fr_de" | "fr_en" | "fr_fr"

type FullCombinationAsKeyMap = {
    [P in FullCombination]: 1
};
// => {de_de: 1, de_en: 1, de_fr: 1, en_de: 1, en_en: 1, en_fr: 1, fr_de: 1, fr_en: 1, fr_fr: 1}

type FlaggedCombinationAsKeyMap = {
    [P in FullCombination]: P extends `${infer L1}_${infer L2}` ? L2 extends L1 ? 0 : 1 : never
};
// => { de_fr: 1, de_de: 0, de_en: 1, en_de: 1, en_en: 0, en_fr: 1, fr_de: 1, fr_en: 1, fr_fr: 0 }

const test: FlaggedCombinationAsKeyMap = {
    de_fr: 1,
    de_de: 0,
    de_en: 1,
    en_de: 1,
    en_en: 0,
    en_fr: 1,
    fr_de: 1,
    fr_en: 1,
    fr_fr: 0
};

type DuplicatesAsValueMap = {
    [P in Locale]: `${P}_${P}`
};
// => {de: "de_de", en: "en_en", fr: "fr_fr"}

type DuplicatesAsUnion = {
    [P in Locale]: `${P}_${P}`
}[Locale];
// => "de_de" | "en_en" | "fr_fr"

type FilteredByDuplicatesAsUnion = Exclude<FullCombination, DuplicatesAsUnion>;
// => "de_en" | "de_fr" | "en_de" | "en_fr" | "fr_de" | "fr_en"


//////////////////////////////////////////////////////////////////


type Mu = {
    [P in FilteredByDuplicatesAsUnion]: P extends `${infer L1}_${infer L2}` ? [L1, L2] : never
};

const testMu: ValuesOfMap<Mu> = ['fr', 'de'];

// test Expect
type Expect_OK = Expect<true>;
// @ts-expect-error
type Expect_FAIL = Expect<false>;

// test Equal
type A = {a: number};
type B = {a: number};
type C = {a: string};
type equal = Expect<Equal<A, B>>;
// @ts-expect-error
type notEqual = Expect<Equal<A, C>>;

// recursive properties as string e.g 'prop1.subProp.subProp'
// includes functions too
type NestedKeyOf<ObjectType extends object> =
    {[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
    }[keyof ObjectType & (string | number)];



type WithLoadingProperty<T> = T extends {type: any} ? (
    T |
    (Pick<T, Exclude<keyof T, 'type'>> & {type: `${T['type']}.loading`}) |
    (Pick<T, Exclude<keyof T, 'type'>> & {type: `${T['type']}.done`})
) : T


type TypedAction = {type: string}


type Action = {type: 'A', propA: number} | {type: 'B', propB: number} | {type: 'C', propC: number};

const create = <A extends TypedAction, Type extends string = A['type']>(typeString: Type, method: (action: Extract<A, {type: Type}>) => void) => {

}

// KEEP THIS LINE TO UNDERSTAND THINGS
const c2 = <A extends {type: string}>() => <T extends A['type'], L extends (a: Extract<A, {type: T}>) => void>(type: T, loader: L) => { };
c2<Action>()('A', (a) => {a.type})

const c3 = <A extends {type: string},>(t: any, l: any) => c2<A>()


type Ex = Extract<Action, {type: 'B'}>;

create<Action>('B', (p) => {
    p.type = 'A';
    p.type = 'B';
});


const map = {
    a: () => 'A',
    b: () => 1,
    c: () => true,
};

type Map = typeof map;
type Keys = keyof Map
type Values = Map[Keys]

type Distribute<U> = U extends any ? {type: U} : never
type Mapped = Distribute<Values>

type MapReturnTypes<T> = T extends any ? {[K in keyof T]: ReturnType<T[K] extends () => any ? T[K] : never>} : never

type returnTypes = MapReturnTypes<Map>

type UnionToIntersection<T> =
    (T extends any ? (x: T) => any : never) extends
    (x: infer R) => any ? R : never

type Dupe<T> = keyof T extends any ? ({[K in keyof T]: {type: K, ret: T[K]}}) : never

type deepMapped = Dupe<Map>;

type Doppy<T> = T[keyof T]

type d = Doppy<deepMapped>


type MappedKeys = `${keyof Map}.loadinfg`