import { binaryTreeIsSameRecursive, binaryTreeIsSameStack } from '@ds/trees/binary_tree/typescript/binaryTreeIsSame';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';

describe('Testing `binaryTreeIsSame`', () => {
    describe('Recursive version', () => {
        it('should return true when validating two equal binary trees', () => {
            const tree1 = binaryTreeCreateBFS([1, 2, 3]);
            const tree2 = binaryTreeCreateBFS([1, 2, 3]);
            expect(binaryTreeIsSameRecursive(tree1, tree2)).toBe(true);
        });
        it('should return false when validating two binary trees', () => {
            const tree1 = binaryTreeCreateBFS([1, 2]);
            const tree2 = binaryTreeCreateBFS([1, null, 2]);
            expect(binaryTreeIsSameRecursive(tree1, tree2)).toBe(false);

            const tree3 = binaryTreeCreateBFS([1, 2, 1]);
            const tree4 = binaryTreeCreateBFS([1, 1, 2]);
            expect(binaryTreeIsSameRecursive(tree3, tree4)).toBe(false);
        });
    });
    describe('Iterative version', () => {
        it('should return true when validating two equal binary trees', () => {
            const tree1 = binaryTreeCreateBFS([1, 2, 3]);
            const tree2 = binaryTreeCreateBFS([1, 2, 3]);
            expect(binaryTreeIsSameStack(tree1, tree2)).toBe(true);
        });
        it('should return false when validating two binary trees', () => {
            const tree1 = binaryTreeCreateBFS([1, 2]);
            const tree2 = binaryTreeCreateBFS([1, null, 2]);
            expect(binaryTreeIsSameStack(tree1, tree2)).toBe(false);

            const tree3 = binaryTreeCreateBFS([1, 2, 1]);
            const tree4 = binaryTreeCreateBFS([1, 1, 2]);
            expect(binaryTreeIsSameStack(tree3, tree4)).toBe(false);
        });
    });
});
