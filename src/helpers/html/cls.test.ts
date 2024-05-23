import {describe, expect, it} from 'vitest';
import {cls} from './cls';

/*
export function cls(...args: any[]) {
    return args.filter(arg => !!arg).map(arg => '' + arg).join(' ');
}
*/

describe('cls', () => {

    it('should return simple string unchanged', () => {
        expect(cls('class1')).toBe('class1');
        expect(cls('anotherClass')).toBe('anotherClass');

    });

    it('should space concatenate multiple strings', () => {
        expect(cls('class1', 'class2')).toBe('class1 class2');
        expect(cls('classA', 'classB')).toBe('classA classB');
    });

    it('should ignore falsy values', () => {
        expect(cls(false)).toBe('');
        expect(cls(0)).toBe('');
        let useExtendedStyle = false;
        expect(cls('someClass', useExtendedStyle && 'extendedClass')).toBe('someClass');
        useExtendedStyle = true;
        expect(cls('someClass', useExtendedStyle && 'extendedClass')).toBe('someClass extendedClass');
    });

    // I forgot why I added this feature but it had some use case :D
    it('should stringify input', () => {
        const weirdType = {
            toString: () => 'WEIRD'
        }
        expect(cls(weirdType)).toBe('WEIRD');
    });
})