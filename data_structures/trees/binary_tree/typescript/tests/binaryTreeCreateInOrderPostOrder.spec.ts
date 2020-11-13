import { binaryTreeCreateInOrderPostOrderSimple } from '@ds/trees/binary_tree/typescript/binaryTreeCreateInOrderPostOrder';
import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

function validateTree<T>(tree: BinaryTreeNode<T>): void {
    expect(tree.val).toBe(3);
    expect(tree.left).toBeInstanceOf(BinaryTreeNode);
    expect(tree.right).toBeInstanceOf(BinaryTreeNode);
    expect(tree.left.val).toBe(9);
    expect(tree.right.val).toBe(20);

    expect(tree.left.left).toBeNull();
    expect(tree.left.right).toBeNull();

    expect(tree.right.left.val).toBe(15);
    expect(tree.right.right.val).toBe(7);
}

describe('Testing create binary search tree from inOrder and postOrder traversal', () => {
    /**
     * Tree that will be constructed from traversals
     *       3
     *    9   20
     *      15  7
     */
    let postOrder: number[];
    let inOrder: number[];

    beforeEach(() => {
        postOrder = [9, 15, 7, 20, 3];
        inOrder = [9, 3, 15, 20, 7];
    });

    it('should create binary tree recursively', () => {
        const tree = binaryTreeCreateInOrderPostOrderSimple(inOrder, postOrder);
        validateTree(tree);
    });
});
