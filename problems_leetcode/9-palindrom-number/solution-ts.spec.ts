import isPalindromeNumber from './solution-ts';

const testRunData: [number, boolean][] = [
    [121, true],
    [-121, false],
    [10, false],
    [-101, false],
];

describe('Testing is `isPalindromeNumber`', () => {
    testRunData.forEach((el) => {
        const data = el[0];
        const returnVal = el[1];
        test(`should return ${returnVal} when run with ${data}`, () => {
            expect(isPalindromeNumber(data)).toEqual(returnVal);
        });
    });
});
