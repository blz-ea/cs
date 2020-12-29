import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';
import { binaryTreeInvertDFS, binaryTreeInvertDFSStack } from '@ds/trees/binary_tree/typescript/binaryTreeInvert';

/**
 * Input
 *      1
 *   2    3
 * 4  5 6
 *
 * Inverted
 *      1
 *   3    2
 *    6 5  4
 */
const testData1 = [
    [1, 2, 3, 4, 5, 6],
    [1, 3, 2, null, 6, 5, 4],
];

/**
 * Input
 *      3
 *   9    20
 *      15  7
 *
 * Inverted
 *      3
 *   20   9
 * 7  15
 *
 */
const testData2 = [
    [3, 9, 20, null, null, 15, 7],
    [3, 20, 9, 7, 15],
];
/**
 * Input
 *        1
 *     2    5
 *   4    7
 * Inverted
 *        1
 *     5    2
 *      7    4
 */
const testData3 = [
    [1, 2, 5, 4, null, 7],
    [1, 5, 2, null, 7, null, 4],
];
/**
 * Input
 *        1
 *     2    3
 *   4  5  6  7
 * 8  9
 *
 * Inverted
 *        1
 *     3    2
 *   7  6 5  4
 *          9  8
 */
const testData4 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 3, 2, 7, 6, 5, 4, null, null, null, null, null, null, 9, 8],
];
const testRunData = [testData1, testData2, testData3, testData4];

describe('Testing functions that invert binary trees', () => {
    test.each(testRunData)('recursive - it should return invert binary tree %p to %p', (input, expectedOutput) => {
        expect(binaryTreeInvertDFS(binaryTreeCreateBFS<number>(input))).toEqual(binaryTreeCreateBFS(expectedOutput));
    });

    test.each(testRunData)('iterative - it should return inverted binary tree %p to %p', (input, expectedOutput) => {
        expect(binaryTreeInvertDFSStack(binaryTreeCreateBFS<number>(input))).toEqual(
            binaryTreeCreateBFS(expectedOutput),
        );
    });
});
