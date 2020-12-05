import { pathSumRecursiveDFS, pathSumStack } from './solution-ts';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';

const testRunData = [
    // inputTree | pathSum | expectedResult
    [true, [5, 4, 8, 11, 13, 4, 7, 2, 1], 22],
];

describe('Testing `pathSum`', () => {
    test.each(testRunData)(
        'recursive - should return `%p` given a binary tree %p if there is a root to leaf path of given sum `%i`',
        (expectedResult: boolean, inputTree: number[], pathSum: number) => {
            expect(pathSumRecursiveDFS(binaryTreeCreateBFS(inputTree), pathSum)).toBe(expectedResult);
        },
    );
    test.each(testRunData)(
        'iterative - should return `%p` given a binary tree %p if there is a root to leaf path of given sum `%i`',
        (expectedResult: boolean, inputTree: number[], pathSum: number) => {
            expect(pathSumStack(binaryTreeCreateBFS(inputTree), pathSum)).toBe(expectedResult);
        },
    );
});
