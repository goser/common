import {describe, expect, it} from 'vitest';
import {pickRandom} from './pickRandom';

describe('pickRandom', () => {
    it('should return random value from array', () => {
        const list = 'abcdefghijklmnopqrstuvwxyz'.split('');
        expect(list).toContain(pickRandom(list));
        expect(list).toContain(pickRandom(list));
        expect(list).toContain(pickRandom(list));
        expect(list).toContain(pickRandom(list));
        expect(list).toContain(pickRandom(list));
        expect(list).toContain(pickRandom(list));
        expect(list).toContain(pickRandom(list));
    })
})