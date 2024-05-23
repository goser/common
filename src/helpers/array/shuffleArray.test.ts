import {describe, expect, it} from 'vitest';
import {shuffleArray} from './shuffleArray';

describe('shuffleArray', () => {
    it('should return new array with randomized item position', () => {
        const list = 'abcdefghijklmnopqrstuvwxyz'.split('');

        const shuffled1 = shuffleArray(list);
        expect(shuffled1).not.toStrictEqual(list);

        const shuffled2 = shuffleArray(list);
        expect(shuffled2).not.toStrictEqual(list);

        expect(shuffled1).not.toStrictEqual(shuffled2);

        expect(shuffled1.sort()).toStrictEqual(list);
        expect(shuffled2.sort()).toStrictEqual(list);
    })
})