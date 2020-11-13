import BinarySearchTree from '@ds/trees/binary_search_tree/typescript/BinarySearchTree';
import BinarySearchTreeNode from '@ds/trees/binary_search_tree/typescript/BinarySearchTreeNode';

describe('Testing Binary Search Tree', () => {
    let testTree: BinarySearchTree<number>;
    beforeEach(() => {
        testTree = new BinarySearchTree();
        /**
         *       8
         *     5   15
         *   3   9    12
         * 1       10    13
         *   2       11
         */
        testTree.insert(8, 5, 15, 9, 3, 12, 10, 11, 1, 2, 13);
    });

    it('should create empty tree', () => {
        const bst = new BinarySearchTree();
        expect(bst.root).toBeInstanceOf(BinarySearchTreeNode);
        expect(bst.isEmpty).toBeTruthy();
    });

    it('should insert a node into a tree', () => {
        const bst = new BinarySearchTree();
        bst.insertNode(1);
        expect(bst.root.val).toEqual(1);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
    });

    /**
     *       8
     *     5   9
     *   3       10
     */
    it('should insert multiple nodes into a tree using `insertNode` method', () => {
        const bst = new BinarySearchTree();
        bst.insertNode(8);
        bst.insertNode(5);
        bst.insertNode(9);
        bst.insertNode(3);
        bst.insertNode(10);

        expect(bst.root.val).toBe(8);
        expect(bst.root.left.val).toBe(5);
        expect(bst.root.left.left.val).toBe(3);
        expect(bst.root.left.right).toBeNull();
        expect(bst.root.right.val).toBe(9);
        expect(bst.root.right.right.val).toBe(10);
        expect(bst.root.right.left).toBeNull();
    });

    it('should insert multiple nodes into a tree using `insert` method', () => {
        expect(testTree.traverseInOrder()).toEqual([1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 15]);
    });

    it('should search for a node in the tree - root node', () => {
        const result = testTree.search(8);
        expect(result).toBeInstanceOf(BinarySearchTreeNode);
        expect(result.parent).toBeNull();
        expect(result.val).toBe(8);
    });

    it('should search for a node in the tree - left', () => {
        const result = testTree.search(2);
        expect(result).toBeInstanceOf(BinarySearchTreeNode);
        expect(result.parent.val).toBe(1);
        expect(result.val).toBe(2);
    });

    it('should search for a node in the tree - right', () => {
        const result = testTree.search(11);
        expect(result).toBeInstanceOf(BinarySearchTreeNode);
        expect(result.parent.val).toBe(10);
        expect(result.val).toBe(11);
    });

    it('should search for a node in the tree - not found', () => {
        const result = testTree.search(20);
        expect(result).toBeNull();
    });

    it('should return node with smallest value', () => {
        const result = testTree.getMin();
        expect(result.val).toBe(1);
    });

    it('should return node with largest value', () => {
        const result = testTree.getMax();
        expect(result.val).toBe(15);
    });

    it('should remove a node from the tree - remove leaf (no left and no right)', () => {
        testTree.remove(2);
        expect(testTree.traverseInOrder()).toEqual([1, 3, 5, 8, 9, 10, 11, 12, 13, 15]);
        expect(testTree.search(2)).toBeNull();
    });

    it('should remove a node from the tree - remove leaf (no left)', () => {
        testTree.remove(1);
        expect(testTree.traverseInOrder()).toEqual([2, 3, 5, 8, 9, 10, 11, 12, 13, 15]);
        expect(testTree.search(1)).toBeNull();
    });

    it('should remove a node from the tree - remove leaf (no right)', () => {
        testTree.remove(3);
        expect(testTree.traverseInOrder()).toEqual([1, 2, 5, 8, 9, 10, 11, 12, 13, 15]);
        expect(testTree.search(3)).toBeNull();
    });

    it('should remove a node from the tree - remove edge (with left and with right) ', () => {
        testTree.remove(12);
        expect(testTree.traverseInOrder()).toEqual([1, 2, 3, 5, 8, 9, 10, 11, 13, 15]);
        expect(testTree.search(12)).toBeNull();
    });

    it('should remove a node from the tree - remove all nodes', () => {
        const testData = [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 15];

        while (testData.length) {
            testTree.remove(testData[0]);
            testData.splice(0, 1);
            expect(testTree.traverseInOrder()).toEqual(testData);
        }
    });
});
