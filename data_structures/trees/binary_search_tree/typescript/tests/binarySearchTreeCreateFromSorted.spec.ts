import { sortedArrayToBstRecursive, sortedArrayToBstRecursiveOptimized } from '../binarySearchTreeCreateFromSorted';
import bredthFirst from '../../../binary_tree_traverse/typescript/bredthFirst';

describe('Testing `sortedArrayToBst`', () => {
    it('should create BST from sorted array using recursive function', () => {
        const bst = sortedArrayToBstRecursive([-10, -3, 0, 5, 9]);
        expect(bredthFirst(bst)).toEqual([0, -3, 9, -10, 5]);
    });

    it('should create BST from sorted array using optimized recursive function', () => {
        const bst = sortedArrayToBstRecursiveOptimized([-10, -3, 0, 5, 9]);
        expect(bredthFirst(bst)).toEqual([0, -3, 9, -10, 5]);
    });
});
