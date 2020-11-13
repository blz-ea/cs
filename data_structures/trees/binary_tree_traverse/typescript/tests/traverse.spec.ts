import DepthFirstTraversalPreOrder from '@ds/trees/binary_tree_traverse/typescript/preOrder';
import DepthFirstTraversalPostOrder from '@ds/trees/binary_tree_traverse/typescript/postOrder';
import DepthFirstTraversalInOrder from '@ds/trees/binary_tree_traverse/typescript/inOrder';
import BredthFirstTraverse from '@ds/trees/binary_tree_traverse/typescript/bredthFirst';

import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

describe('Testing Binary Tree Traversal', () => {
    let testTree: BinaryTreeNode<number>;

    beforeEach(() => {
        const root = new BinaryTreeNode<number>(10);
        const node2 = new BinaryTreeNode<number>(5);
        const node3 = new BinaryTreeNode<number>(13);
        const node4 = new BinaryTreeNode<number>(2);
        const node5 = new BinaryTreeNode<number>(7);
        const node6 = new BinaryTreeNode<number>(11);
        const node7 = new BinaryTreeNode<number>(15);

        root.left = node2;
        root.right = node3;

        node2.left = node4;
        node2.right = node5;

        node3.left = node6;
        node3.right = node7;

        testTree = root;
    });

    it('should traverse Binary Tree - DFS InOrder', () => {
        expect(DepthFirstTraversalInOrder(testTree)).toEqual([2, 5, 7, 10, 11, 13, 15]);
    });

    it('should traverse Binary Tree - DFS PreOrder', () => {
        expect(DepthFirstTraversalPreOrder(testTree)).toEqual([10, 5, 2, 7, 13, 11, 15]);
    });

    it('should traverse Binary Tree - DFS PostOrder', () => {
        expect(DepthFirstTraversalPostOrder(testTree)).toEqual([2, 7, 5, 11, 15, 13, 10]);
    });

    it('should traverse Binary Tree - BFS', () => {
        expect(BredthFirstTraverse(testTree)).toEqual([10, 5, 13, 2, 7, 11, 15]);
    });
});
