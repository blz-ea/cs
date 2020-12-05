import { maxProfit } from './solution-ts';

const testRunData = [
    // inputData | expectedResult
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
];

describe('testing `maxProfix` - should return best time to buy and sell stock', () => {
    test.each(testRunData)('given %p should return %i', (inputData: number[], expectedResult) => {
        expect(maxProfit(inputData)).toBe(expectedResult);
    });
});
