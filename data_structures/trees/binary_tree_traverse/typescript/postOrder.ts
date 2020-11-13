import { BaseBinaryTreeNodeInterface } from '@ds/trees/types';

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
