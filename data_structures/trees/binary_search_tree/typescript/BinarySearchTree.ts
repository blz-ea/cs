import BinarySearchTreeNode, {
    BinarySearchTreeNodeLeafType,
} from '@ds/trees/binary_search_tree/typescript/BinarySearchTreeNode';
import DepthFirstTraversalPostOrder from '@ds/trees/binary_tree_traverse/typescript/postOrder';
import DepthFirstTraversalPreOrder from '@ds/trees/binary_tree_traverse/typescript/preOrder';
import DepthFirstTraversalInOrder from '@ds/trees/binary_tree_traverse/typescript/inOrder';
import BredthFirstTraverse from '@ds/trees/binary_tree_traverse/typescript/bredthFirst';

export default class BinarySearchTree<T> {
    root: BinarySearchTreeNode<T>;

    constructor() {
        this.root = new BinarySearchTreeNode<T>();
    }

    /**
     * Inserts multiple node passed as arguments
     * @param values Values to insert
     */
    insert(...values: T[]): this {
        for (const node of values) {
            this.insertNode(node);
        }
        return this;
    }

    /**
     * Inserts a single node
     * @param value Value to insert
     */
    insertNode(value: T): this {
        const node = new BinarySearchTreeNode(value);

        if (this.isEmpty) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (current) {
            if (current && value < current.val) {
                // Go left
                if (current.left) {
                    // Go down the tree if there is something on the left
                    current = current.left;
                } else {
                    current.left = node;
                    break;
                }
            } else {
                // Go right
                if (current.right) {
                    // Go down the tree if there is something on the right
                    current = current.right;
                } else {
                    current.right = node;
                    break;
                }
            }
        }

        node.parent = current;
        return this;
    }

    /**
     * Finds a node based on provided value
     * @param value Value to search
     */
    search(value: T): BinarySearchTreeNodeLeafType<T> {
        if (this.isEmpty) {
            return null;
        }

        let node = this.root;

        while (node && node.val !== value) {
            if (value < node.val) {
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return node;
    }

    /**
     * Gets maximum value in the tree
     * @param node Optional start node
     */
    getMax(node?: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
        if (this.isEmpty) {
            return null;
        }

        if (!node) {
            node = this.root;
        }

        while (node.right) {
            node = node.right;
        }

        return node;
    }

    /**
     * Gets minimum value in the tree
     * @param node Optional starting node
     */
    getMin(node?: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
        if (this.isEmpty) {
            return null;
        }

        if (!node) {
            node = this.root;
        }

        while (node.left) {
            node = node.left;
        }

        return node;
    }

    /**
     * Removes node from the tree
     * @param value Value to remove
     */
    remove(value: T): boolean {
        if (this.isEmpty) {
            return false;
        }

        const node = this.search(value);

        if (node) {
            if (!node.left && !node.right) {
                this.reassignNodes(node, null);
            } else if (!node.left) {
                this.reassignNodes(node, node.right);
            } else if (!node.right) {
                this.reassignNodes(node, node.left);
            } else {
                const temp = this.getMax(node.left);
                this.remove(temp.val);
                node.val = temp.val;
            }

            return true;
        }

        return false;
    }

    /**
     * Helper function: Assigns children to parent node
     * @param node Node whose parent value will be set to @param children
     * @param children Children(s) that will be assigned to node's parent value
     */
    reassignNodes(node: BinarySearchTreeNode<T>, children: BinarySearchTreeNode<T>): void {
        if (children) {
            children.parent = node.parent;
        }

        if (node.parent) {
            if (node === node.parent.right) {
                node.parent.right = children;
            } else {
                node.parent.left = children;
            }
        } else {
            this.root = children;
        }
    }

    get isEmpty(): boolean {
        return !this.root || !this.root.val;
    }

    traversePreOrder(): T[] {
        return DepthFirstTraversalPreOrder(this.root);
    }

    traverseInOrder(): T[] {
        return DepthFirstTraversalInOrder(this.root);
    }

    traversePostOrder(): T[] {
        return DepthFirstTraversalPostOrder(this.root);
    }

    traverseDepth(): T[] {
        return BredthFirstTraverse(this.root);
    }
}
