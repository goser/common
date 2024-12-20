import {describe, expect, it} from 'vitest';
import {parseIntSafe} from './parseIntSafe';

describe('parseIntSafe', () => {
    it('should parse a number', () => {
        expect(parseIntSafe('123', 0)).toBe(123);
        expect(parseIntSafe('0', 0)).toBe(0);
        expect(parseIntSafe('100.00', 0)).toBe(100);
        expect(parseIntSafe('100.99', 0)).toBe(100);
    });
    it('should return the fallback value if the input is not a number', () => {
        expect(parseIntSafe('abc', 0)).toBe(0);
        expect(parseIntSafe('', 0)).toBe(0);
    });
});