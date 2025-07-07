//
// this file contains typing stuff that is not needed but helped me understanding things
//
import {} from './Equal';
import {} from './Expect';
import {} from './ValuesOfMap';
const localeStrings = [
    'de',
    'en',
    'fr',
];
// => { de_fr: 1, de_de: 0, de_en: 1, en_de: 1, en_en: 0, en_fr: 1, fr_de: 1, fr_en: 1, fr_fr: 0 }
const test = {
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
const testMu = ['fr', 'de'];
const create = (typeString, method) => {
};
// KEEP THIS LINE TO UNDERSTAND THINGS
const c2 = () => (type, loader) => { };
c2()('A', (a) => { a.type; });
const c3 = (t, l) => c2();
create('B', (p) => {
    p.type = 'A';
    p.type = 'B';
});
const map = {
    a: () => 'A',
    b: () => 1,
    c: () => true,
};
