import { factorialNumberOfTrailingZeros } from './solution-ts';

const testRunData: [number, number][] = [
    // inputData | expectedOutput
    [3, 0],
    [5, 1],
    [0, 0],
    [4617, 1151],
];

describe('Testing `factorialTrailingZeroes`', () => {
    test.each(testRunData)('given %p factorial should return %p of zeros', (inputData, expectedOutput) => {
        expect(factorialNumberOfTrailingZeros(inputData)).toBe(expectedOutput);
    });
});
