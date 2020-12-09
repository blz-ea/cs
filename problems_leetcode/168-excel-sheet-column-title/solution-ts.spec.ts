import { convertToTitle } from './solution-ts';

const testRunData: [number, string][] = [
    // input | expectedResult
    [1, 'A'],
    [28, 'AB'],
    [701, 'ZY'],
];

describe('Testing `convertToTitle` - excel sheet column title ', () => {
    test.each(testRunData)('given %p should retirn %p', (input, expectedResult) => {
        expect(convertToTitle(input)).toBe(expectedResult);
    });
});
