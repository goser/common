import {describe, expect, it} from 'vitest';
import {capitalizeWords} from './capitalizeWords';

describe('capitalizeWords', () => {
    it('should work correctly', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('Hello world')).toBe('Hello World');
        expect(capitalizeWords('hello World')).toBe('Hello World');
        expect(capitalizeWords('hELLo woRLD')).toBe('Hello World');
    });
}); 