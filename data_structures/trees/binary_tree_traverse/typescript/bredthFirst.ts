import { BaseBinaryTreeNodeInterface } from '@ds/trees/types';
import Queue from '@ds/queue/typescript/Queue';

/**
 * Bredth First Traverse
 *
 * - Visits nodes one layer after another
 * @example
 *      10
 *   5     13
 * 2  7  11  15
 *
 * @return [10, 5, 13, 2, 7, 11, 15]
 */

export default function BredthFirstTraverse<T>(root: BaseBinaryTreeNodeInterface<T>): T[] {
    let currentNode;
    const result: T[] = [];

    if (!root) {
        return result;
    }

    const queue: Queue<BaseBinaryTreeNodeInterface<T>> = new Queue();

    queue.enqueue(root);

    while (!queue.isEmpty) {
        const queueNode = queue.dequeue();

        if (!queueNode) {
            return result;
        }

        currentNode = queueNode;

        if (currentNode.val) {
            result.push(currentNode.val);
        }

        if (currentNode.left) {
            queue.enqueue(currentNode.left);
        }

        if (currentNode.right) {
            queue.enqueue(currentNode.right);
        }
    }

    return result;
}
