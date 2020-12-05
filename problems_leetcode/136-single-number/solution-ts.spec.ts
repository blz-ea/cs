import { singleNumber, singleNumberXOR } from './solution-ts';

const testRunData = [
    // inputData | expectedResult
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[5], 5],
];

describe('testing `singleNumber` - should return number that is repeated once', () => {
    test.each(testRunData)('using map - given %p should return %i', (inputData: number[], expectedResult: number) => {
        expect(singleNumber(inputData)).toBe(expectedResult);
    });
    test.each(testRunData)('using xor - given %p should return %i', (inputData: number[], expectedResult: number) => {
        expect(singleNumberXOR(inputData)).toBe(expectedResult);
    });
});
