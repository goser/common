//
// this file contains typing stuff that is not needed but helped me understanding things
//



import {ValuesOf} from './ValuesOfMap';

const localeStrings = [
    'de',
    'en',
    'fr',
] as const;

export type Locale = typeof localeStrings[number]

type ExcludingLocale<LocaleToExclude extends Locale> = Exclude<Locale, LocaleToExclude>;

type FullCombination = `${Locale}_${Locale}`;
// => "de_de" | "de_en" | "de_fr" | "en_de" | "en_en" | "en_fr" | "fr_de" | "fr_en" | "fr_fr"

type FullCombinationAsKeyMap = {
    [P in FullCombination]: 1
}
// => {de_de: 1, de_en: 1, de_fr: 1, en_de: 1, en_en: 1, en_fr: 1, fr_de: 1, fr_en: 1, fr_fr: 1}

type FlaggedCombinationAsKeyMap = {
    [P in FullCombination]: P extends `${infer L1}_${infer L2}` ? L2 extends L1 ? 0 : 1 : never
}
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

type FilteredByDuplicatesAsUnion = Exclude<FullCombination, DuplicatesAsUnion>
// => "de_en" | "de_fr" | "en_de" | "en_fr" | "fr_de" | "fr_en"


//////////////////////////////////////////////////////////////////


type Mu = {
    [P in FilteredByDuplicatesAsUnion]: P extends `${infer L1}_${infer L2}` ? [L1, L2] : never
}

const testMu : ValuesOf<Mu> = ['fr','de']
