import BinaryTreeNode from './BinaryTreeNode';
import Queue from '@ds/queue/typescript/Queue';

/**
 * Returns binary tree's minimum depth
 */
export function binaryTreeMinDepthRecursive<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    const left = binaryTreeMinDepthRecursive(root.left);
    const right = binaryTreeMinDepthRecursive(root.right);

    if (left === 0 || right === 0) {
        return Math.max(left, right) + 1;
    } else {
        return Math.min(left, right) + 1;
    }
}

export function binaryTreeMinDepthIterativeBFS<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    const queue = new Queue<BinaryTreeNode<T>>();
    queue.enqueue(root);

    let depth = 1;

    while (!queue.isEmpty) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currNode = queue.dequeue();

            if (currNode.left === null && currNode.right === null) {
                return depth;
            }

            if (currNode.left) {
                queue.enqueue(currNode.left);
            }

            if (currNode.right) {
                queue.enqueue(currNode.right);
            }
        }

        depth++;
    }

    return depth;
}
