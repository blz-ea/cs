import BinaryTreeNode from '../BinaryTreeNode';
import binaryTreeCreateBFS, { binaryTreeCreateCompleteRecursive } from '../binaryTreeCreateBFS';
import BredthFirstTraverse from '@ds/trees/binary_tree_traverse/typescript/bredthFirst';

describe('testing Binary Tree - Create Binary Tree from Bredth First Search Traversal', () => {
    /**
     * Should create Binary Tree that look like this:
     *      1
     *   2    3
     * 4  5 6
     */
    it('should create Binary Tree from array', () => {
        const root = binaryTreeCreateBFS<number>([1, 2, 3, 4, 5, 6]);

        expect(root).toBeInstanceOf(BinaryTreeNode);
        expect(root.left).toBeInstanceOf(BinaryTreeNode);
        expect(root.right).toBeInstanceOf(BinaryTreeNode);

        expect(root.val).toBe(1);
        expect(root.left.val).toBe(2);
        expect(root.right.val).toBe(3);

        expect(root.left.left.val).toBe(4);
        expect(root.left.right.val).toBe(5);

        expect(root.right.left.val).toBe(6);
        expect(root.right.right).toBeNull();
    });

    /**
     * Should create Binary Tree that look like this:
     *      3
     *   9    20
     *      15  7
     */
    it('should create Binary Tree from array - with null values', () => {
        const root = binaryTreeCreateBFS([3, 9, 20, null, null, 15, 7]);
        expect(root.val).toBe(3);
        expect(root.left.val).toBe(9);
        expect(root.left.left).toBe(null);
        expect(root.left.right).toBe(null);

        expect(root.right.val).toBe(20);
        expect(root.right.left.val).toBe(15);
        expect(root.right.right.val).toBe(7);
    });

    /**
     * Should create Binary Tree that look like this:
     *        1
     *     2    2
     *      3     3
     */
    it('should create Binary Tree from array - with null values 2', () => {
        const testData = [1, 2, 2, null, 3, null, 3];
        const tree = binaryTreeCreateBFS(testData);
        expect(tree.val).toBe(1);
        expect(tree.left.val).toBe(2);
        expect(tree.left.left).toBe(null);
        expect(tree.left.right.val).toBe(3);
        expect(tree.right.val).toBe(2);
        expect(tree.right.left).toBe(null);
        expect(tree.right.right.val).toBe(3);
    });
    /**
     * Should create Binary Tree that look like this:
     *        1
     *     2    3
     *   4  5  6  7
     * 8  9
     */
    it('should create complete binary tree in level(bredth) order', () => {
        const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const tree = binaryTreeCreateCompleteRecursive(testData);
        expect(BredthFirstTraverse(tree)).toEqual(testData);
    });
});
