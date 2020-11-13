import { BaseBinaryTreeNodeInterface } from '@ds/trees/types';

/**
 * Depth First Traversal - In order
 * - Visits all the nodes in the left subtree
 * - Then the root node
 * - Visits all the nodes in the right subtree
 * Note: In Binary Search Tree values returned in a sorted order
 * @example
 *       10
 *    5     13
 * 2    7 11    15
 *
 * @return [2, 5, 7, 10, 11, 13, 15]
 */

export default function DepthFirstTraversalInOrder<T>(root: BaseBinaryTreeNodeInterface<T>): T[] {
    let result: T[] = [];

    if (!root) {
        return result;
    }

    if (root.left) {
        result = result.concat(DepthFirstTraversalInOrder(root.left));
    }

    result.push(root.val);

    if (root.right) {
        result = result.concat(DepthFirstTraversalInOrder(root.right));
    }

    return result;
}
