import {createWordingProxy} from './WordingProxy';

type MyWords = {
    emptyFunction: () => string
    functionWithParameters: (a: string, b: number) => void
    simpleArray: [1, 2, 3, 4],
    parent: {
        emptyFunction: () => string
        sub: {
            emptyFunction: () => string
        }
    },
}

describe('createWordingProxy', () => {
    it('should work', async () => {
        const wordings = createWordingProxy<MyWords>('W');
        const testAll = (what: any, expected: string) => {
            expect('' + what).toStrictEqual(expected);
            expect(what.toString()).toStrictEqual(expected);
            expect(what.valueOf()).toStrictEqual(expected);
            expect(what == expected).toBeTruthy();
        };
        // testAll(wordings.emptyFunction(), 'W.emptyFunction()');
        // testAll(wordings.parent.emptyFunction(), 'W.parent.emptyFunction()');
        // testAll(wordings.parent.sub.emptyFunction(), 'W.parent.sub.emptyFunction()');
        // testAll(wordings.simpleArray[0], 'W.simpleArray[0]');
        // testAll(wordings.simpleArray[3], 'W.simpleArray[3]');
        testAll(wordings.functionWithParameters('abc', 123), 'W.functionWithParameters(\'abc\', 123)');


        // expect(wordings.simpleArray[0].toString()).toStrictEqual('W.simpleArray[0]')
        // expect(wordings.simpleArray[99].toString()).toStrictEqual('W.simpleArray[99]')
        // console.log(">" + wordings.simpleArray[99]);
    });
});