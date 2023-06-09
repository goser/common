"use strict";
//
// this file contains typing stuff that is not needed but helped me understanding things
//
Object.defineProperty(exports, "__esModule", { value: true });
var localeStrings = [
    'de',
    'en',
    'fr',
];
// => { de_fr: 1, de_de: 0, de_en: 1, en_de: 1, en_en: 0, en_fr: 1, fr_de: 1, fr_en: 1, fr_fr: 0 }
var test = {
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
var testMu = ['fr', 'de'];
