import { BaseBinaryTreeNodeInterface } from '@ds/trees/types';
import Stack from '@ds/stack/typescript/Stack';
import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

/**
 * Depth First Traversal - Post Order
 *
 * - Visits all the nodes in the left subtree
 * - Visits all the nodes in the right subtree
 * - Visits the root nodes
 * @example
 *      10
 *   5     13
 * 2  7  11  15
 *
 * @return [2, 7, 5, 11, 15, 13, 10]
 */
export default function DepthFirstTraversalPostOrder<T>(root: BaseBinaryTreeNodeInterface<T>): T[] {
    let result: T[] = [];

    if (!root) {
        return result;
    }

    if (root.left) {
        result = result.concat(DepthFirstTraversalPostOrder(root.left));
    }

    if (root.right) {
        result = result.concat(DepthFirstTraversalPostOrder(root.right));
    }

    result.push(root.val);

    return result;
}

export function DepthFirstTraversalPostOrderStack<T>(root: BaseBinaryTreeNodeInterface<T>): T[] {
    const result: T[] = [];
    if (!root) {
        return result;
    }

    const stack = new Stack<BinaryTreeNode<T>>();
    stack.push(root);

    let prev: BinaryTreeNode<T> = null;

    while (!stack.isEmpty) {
        const current = stack.peek();

        if (!prev || prev.left === current || prev.right === current) {
            if (current.left) {
                stack.push(current.left);
            } else if (current.right) {
                stack.push(current.right);
            } else {
                stack.pop();
                result.push(current.val);
            }
        } else if (current.left === prev) {
            if (current.left) {
                stack.push(current.right);
            } else {
                stack.pop();
                result.push(current.val);
            }
        } else if (current.right === prev) {
            stack.pop();
            result.push(current.val);
        }

        prev = current;
    }

    return result;
}
