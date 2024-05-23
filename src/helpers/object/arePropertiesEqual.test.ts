import {arePropertiesEqual} from './arePropertiesEqual';
import {describe, expect, it} from 'vitest';

describe('arePropertiesEqual', () => {
    it('should return true if two objects contain the same properties', () => {
        const arr: any[] = [];
        const result = arePropertiesEqual({a: 'str', b: 123, c: false, d: true, e: arr}, {a: 'str', b: 123, c: false, d: true, e: arr});
        expect(result).toBe(true);
    });
    it('should return false if two objects not contain the same properties', () => {
        const arr: any = [];
        const result = arePropertiesEqual({a: 'str', b: 1231, c: false, d: true, e: arr}, {a: 'str', b: 123, c: false, d: true, e: arr});
        expect(result).toBe(false);
    });
});