import BinaryTreeNode from '../BinaryTreeNode';

describe('testing Binary Tree', () => {
    it('should create Binary Tree Node', () => {
        const node = new BinaryTreeNode<number>(0);

        expect(node).toBeInstanceOf(BinaryTreeNode);
        expect(node.val).toBe(0);
        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
    });

    it('should link Binary Tree nodes together', () => {
        const node = new BinaryTreeNode<number>(1);
        const leftNode = new BinaryTreeNode<number>(2);
        const rightNode = new BinaryTreeNode<number>(3);

        expect(node.val).toBe(1);

        node.left = leftNode;
        expect(node.left.val).toBe(2);
        expect(node.left.left).toBeNull();
        expect(node.left.right).toBeNull();
        expect(node.right).toBeNull();

        node.right = rightNode;
        expect(node.right.val).toBe(3);
        expect(node.right.left).toBeNull();
        expect(node.right.left).toBeNull();
    });
});
