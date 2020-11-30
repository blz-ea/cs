import binaryTreeCreateBFS from '../binaryTreeCreateBFS';
import { binaryTreeMinDepthIterativeBFS, binaryTreeMinDepthRecursive } from '../binaryTreeMinDepth';

const testRunData = [
    // expectedResult | input
    [[3, 9, 20, null, null, 15, 7], 2],
    [[2, null, 3, null, 4, null, 5, null, 6], 5],
];

describe('testing Binary Tree - Max Depth', () => {
    test.each(testRunData)(
        'recursive - given %p binary tree should return min depth %i',
        (input: Array<number & null>, expectedResult: number) => {
            expect(binaryTreeMinDepthRecursive(binaryTreeCreateBFS(input))).toBe(expectedResult);
        },
    );

    test.each(testRunData)(
        'iterative - given %p binary tree should return min depth %i',
        (input: Array<number & null>, expectedResult: number) => {
            expect(binaryTreeMinDepthIterativeBFS(binaryTreeCreateBFS(input))).toBe(expectedResult);
        },
    );
});
