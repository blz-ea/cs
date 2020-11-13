import BinarySearchTreeNode from '@ds/trees/binary_search_tree/typescript/BinarySearchTreeNode';

describe('Testing Binary Search Tree Node', () => {
    it('should create Binary Search Tree node with value', () => {
        const node = new BinarySearchTreeNode<number>(1);

        expect(node.left).toBeNull();
        expect(node.right).toBeNull();
        expect(node.parent).toBeNull();
        expect(node.val).toBe(1);
    });

    it('should create Binary Search Tree node with parent', () => {
        const parent = new BinarySearchTreeNode<number>(2);
        const node = new BinarySearchTreeNode<number>(1, parent);

        expect(node.parent).toBe(parent);
    });

    it('should create left and right leaf', () => {
        const root = new BinarySearchTreeNode<number>(1);
        const left = new BinarySearchTreeNode<number>(2);
        const right = new BinarySearchTreeNode<number>(3);

        root.left = left;
        root.right = right;
        root.left.parent = root;
        root.right.parent = root;

        expect(root.parent).toBeNull();
        expect(root.left).toEqual(left);
        expect(root.right).toEqual(right);
        expect(root.left.parent).toEqual(root);
        expect(root.right.parent).toEqual(root);
    });
});
