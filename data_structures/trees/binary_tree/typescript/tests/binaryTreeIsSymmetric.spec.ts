import { isSymmetric, isSymmetricIterative } from '@ds/trees/binary_tree/typescript/binaryTreeIsSymmetric';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';

describe('Testing `binaryTreeIsSymmetric`', () => {
    describe('Recursive version', () => {
        it('should return true when validating symmetric binary tree', () => {
            const tree1 = binaryTreeCreateBFS([1, 2, 2, 3, 4, 4, 3]);
            expect(isSymmetric(tree1)).toBe(true);
        });
        it('should return false when validating symmetric binary tree', () => {
            const tree1 = binaryTreeCreateBFS([1, 2, 1]);
            expect(isSymmetric(tree1)).toBe(false);

            const tree2 = binaryTreeCreateBFS([1, 2, 2, null, 3, null, 3]);
            expect(isSymmetric(tree2)).toBe(false);
        });
    });
    describe('Iterative version', () => {
        it('should return true when validating symmetric binary tree', () => {
            const tree1 = binaryTreeCreateBFS([1, 2, 2, 3, 4, 4, 3]);
            expect(isSymmetricIterative(tree1)).toBe(true);
        });
        it('should return false when validating symmetric binary tree', () => {
            const tree1 = binaryTreeCreateBFS([1, 2, 1]);
            expect(isSymmetricIterative(tree1)).toBe(false);

            const tree3 = binaryTreeCreateBFS([1, 2, 2, null, 3, null, 3]);
            expect(isSymmetricIterative(tree3)).toBe(false);
        });
    });
});
