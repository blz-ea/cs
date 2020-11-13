import createBalancedBinarySearchTree from '@ds/trees/binary_search_tree/typescript/binarySearchTreeCreateBalanced';
import BinarySearchTreeNode from '@ds/trees/binary_search_tree/typescript/BinarySearchTreeNode';
import DepthFirstTraversalInOrder from '@ds/trees/binary_tree_traverse/typescript/inOrder';

describe('Testing `binarySearchTreeCreateBalanced`', () => {
    it('should create balanced binary search tree from inorder traversed array', () => {
        const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const bst = createBalancedBinarySearchTree<number>(testArray);

        expect(bst.val).toBe(5);
        expect(bst.left).toBeInstanceOf(BinarySearchTreeNode);
        expect(bst.right).toBeInstanceOf(BinarySearchTreeNode);

        expect(bst.left.val).toBe(2);
        expect(bst.left.left.val).toBe(1);
        expect(bst.left.right.val).toBe(3);
        expect(bst.left.right.right.val).toBe(4);

        expect(bst.right.val).toBe(7);
        expect(bst.right.left.val).toBe(6);
        expect(bst.right.right.val).toBe(8);
        expect(bst.right.right.right.val).toBe(9);

        expect(DepthFirstTraversalInOrder(bst)).toEqual(testArray);
    });
});
