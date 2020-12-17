import { majorityElementSort, majorityElementMoore } from './solution-ts';

const testRunData: [number[], number][] = [
    // inputData, expectedResult
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2],
];

describe('Testing majority element', () => {
    describe('Testing `majorityElement`', () => {
        test.each(testRunData)('given %p should return majority element %p', (inputData, expectedResult) => {
            expect(majorityElementSort(inputData)).toBe(expectedResult);
        });
    });

    describe('Testing `majorityElementMoor`', () => {
        test.each(testRunData)('given %p should return majority element %p', (inputData, expectedResult) => {
            expect(majorityElementMoore(inputData)).toBe(expectedResult);
        });
    });
});
