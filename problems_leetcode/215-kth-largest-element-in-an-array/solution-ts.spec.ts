import { findKthLargest, findKthLargestSelection } from './solution-ts';

describe('Testing `findKthLargest`', () => {
    const testFuncs: CallableFunction[] = [findKthLargest, findKthLargestSelection];

    testFuncs.forEach((func) => {
        test(`Function ${func.name} should successfully return Kth largest number`, () => {
            expect(func([3, 2, 1, 5, 6, 4], 2)).toBe(5);
            expect(func([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
        });
    });
});
