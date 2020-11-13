import { BaseBinaryTreeNodeInterface } from '@ds/trees/types';

/**
 * Depth First Traversal - Pre Order
 * - Visits the root node
 * - Visits all the nodes in the left subtree
 * - Visits all the nodes in the right subtree
 * @example
 *      10
 *   5     13
 * 2  7  11  15
 *
 * @return [10, 5, 2, 7, 13, 11, 15]
 */
export default function DepthFirstTraversalPreOrder<T>(root: BaseBinaryTreeNodeInterface<T>): T[] {
    let result: T[] = [];

    if (!root) {
        return result;
    }

    result.push(root.val);

    if (root.left) {
        result = result.concat(DepthFirstTraversalPreOrder(root.left));
    }

    if (root.right) {
        result = result.concat(DepthFirstTraversalPreOrder(root.right));
    }

    return result;
}
