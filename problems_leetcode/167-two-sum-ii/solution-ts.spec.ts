import { twoSum2, twoSum2BinarySearch, twoSum2TwoPointer } from './solution-ts';

const testRunData: [number[], number, [number, number]][] = [
    // input numbers, target, expected
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
];

describe('Testing `twoSum II`', () => {
    test.each(testRunData)('twoSum2 - given %p and target %p should return %p', (nums, target, expected) => {
        expect(twoSum2(nums, target)).toEqual(expected);
    });
    test.each(testRunData)('twoSum2TwoPointer - given %p and target %p should return %p', (nums, target, expected) => {
        expect(twoSum2TwoPointer(nums, target)).toEqual(expected);
    });
    test.each(testRunData)(
        'twoSum2BinarySearch - given %p and target %p should return %p',
        (nums, target, expected) => {
            expect(twoSum2BinarySearch(nums, target)).toEqual(expected);
        },
    );
});
