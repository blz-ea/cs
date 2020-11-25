import { isValidBSTStack } from '@ds/trees/binary_search_tree/typescript/binarySearchTreeIsValid';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';

describe('Function should verify if given tree is BST', () => {
    it('stack version - should return true', () => {
        const tree = binaryTreeCreateBFS([2, 1, 3]);
        expect(isValidBSTStack(tree)).toBe(true);
    });

    it('stack version - should return false', () => {
        const tree = binaryTreeCreateBFS([5, 1, 4, null, null, 3, 6]);
        expect(isValidBSTStack(tree)).toBe(false);
    });
});
