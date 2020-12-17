import { excelTitleToNumber } from './solution-ts';

const testRunData: [string, number][] = [
    // input | expectedResult
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['Z', 26],
    ['AA', 27],
    ['AB', 28],
    ['ZY', 701],
];

describe('Testing `excelTitleToNumber`', () => {
    test.each(testRunData)('given %p should return %p', (input, expectedResult) => {
        expect(excelTitleToNumber(input)).toBe(expectedResult);
    });
});
