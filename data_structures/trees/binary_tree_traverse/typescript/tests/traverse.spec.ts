import DepthFirstTraversalPreOrder, {
    DepthFirstTraversalPreOrderStack,
} from '@ds/trees/binary_tree_traverse/typescript/preOrder';
import DepthFirstTraversalPostOrder, {
    DepthFirstTraversalPostOrderStack,
} from '@ds/trees/binary_tree_traverse/typescript/postOrder';
import DepthFirstTraversalInOrder, {
    DepthFirstTraversalInOrderStack,
} from '@ds/trees/binary_tree_traverse/typescript/inOrder';
import BredthFirstTraverse from '@ds/trees/binary_tree_traverse/typescript/bredthFirst';
import binaryTreeCreateBFS from '@ds/trees/binary_tree/typescript/binaryTreeCreateBFS';
import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

describe('Testing Binary Tree Traversal', () => {
    let testTree: BinaryTreeNode<number>;

    beforeEach(() => {
        testTree = binaryTreeCreateBFS([10, 5, 13, 2, 7, 11, 15]);
    });

    it('should traverse Binary Tree - DFS InOrder recursive', () => {
        expect(DepthFirstTraversalInOrder(testTree)).toEqual([2, 5, 7, 10, 11, 13, 15]);
    });

    it('should traverse Binary Tree - DFS InOrder using stack', () => {
        expect(DepthFirstTraversalInOrderStack(testTree)).toEqual([2, 5, 7, 10, 11, 13, 15]);
    });

    it('should traverse Binary Tree - DFS PreOrder', () => {
        expect(DepthFirstTraversalPreOrder(testTree)).toEqual([10, 5, 2, 7, 13, 11, 15]);
    });

    it('should traverse Binary Tree - DFS PreOrder using stack', () => {
        expect(DepthFirstTraversalPreOrderStack(testTree)).toEqual([10, 5, 2, 7, 13, 11, 15]);
    });

    it('should traverse Binary Tree - DFS PostOrder', () => {
        expect(DepthFirstTraversalPostOrder(testTree)).toEqual([2, 7, 5, 11, 15, 13, 10]);
    });

    it('should traverse Binary Tree - DFS PostOrder using stack', () => {
        expect(DepthFirstTraversalPostOrderStack(testTree)).toEqual([2, 7, 5, 11, 15, 13, 10]);
    });

    it('should traverse Binary Tree - BFS', () => {
        expect(BredthFirstTraverse(testTree)).toEqual([10, 5, 13, 2, 7, 11, 15]);
    });
});
