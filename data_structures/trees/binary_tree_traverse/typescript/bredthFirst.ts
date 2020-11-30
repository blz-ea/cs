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

        result.push(queueNode.val);

        if (queueNode.left) {
            queue.enqueue(queueNode.left);
        }

        if (queueNode.right) {
            queue.enqueue(queueNode.right);
        }
    }

    return result;
}
