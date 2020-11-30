import binaryTreeCreateBFS from '../binaryTreeCreateBFS';
import binaryTreeMaxDepthRecursive, {
    binaryTreeMaxDepthIterative,
    binaryTreeMaxDepthIterativeBFS,
} from '../binaryTreeMaxDepth';

const testRunData = [
    // input | expectedResult
    [[1, null, 2], 2],
    [[], 0],
    [[3, 9, 20, null, null, 15, 7], 3],
];

describe('testing Binary Tree - Max Depth', () => {
    test.each(testRunData)(
        'recursive - given binary tree %p should return %i maximum depth',
        (input: Array<number & null>, expectedResult: number) => {
            expect(binaryTreeMaxDepthRecursive(binaryTreeCreateBFS(input))).toBe(expectedResult);
        },
    );

    test.each(testRunData)(
        'iterative - given binary tree %p return %i maximum depth',
        (input: Array<number & null>, expectedResult: number) => {
            expect(binaryTreeMaxDepthIterative(binaryTreeCreateBFS(input))).toBe(expectedResult);
        },
    );

    test.each(testRunData)(
        'iterative bfs - given binary tree %p return %i maximum depth',
        (input: Array<number | null>, expectedResult: number) => {
            expect(binaryTreeMaxDepthIterativeBFS(binaryTreeCreateBFS(input))).toBe(expectedResult);
        },
    );
});
