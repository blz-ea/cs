import BinaryTreeNode from './BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';
import Queue from '@ds/queue/typescript/Queue';

/**
 * Returns binary tree's maximum depth
 */
export default function binaryTreeMaxDepth<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    return Math.max(binaryTreeMaxDepth<T>(root.left), binaryTreeMaxDepth<T>(root.right)) + 1;
}

export function binaryTreeMaxDepthIterativeBFS<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    const queue = new Queue<BinaryTreeNode<T>>();
    queue.enqueue(root);

    let level = 1;
    let depth = 0;

    while (!queue.isEmpty) {
        let node_count = 0;
        for (let i = 0; i < level; i++) {
            const curr_node = queue.dequeue();

            if (curr_node.left) {
                node_count++;
                queue.enqueue(curr_node.left);
            }

            if (curr_node.right) {
                node_count++;
                queue.enqueue(curr_node.right);
            }
        }

        level = node_count;
        depth++;
    }

    return depth;
}

export function binaryTreeMaxDepthIterative<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    const stack = new Stack<BinaryTreeNode<T>>();
    const depth = new Stack<number>();

    stack.push(root);
    depth.push(1);

    let max = 0;

    while (!stack.isEmpty) {
        const node = stack.pop();
        const currentDepth = depth.pop();

        max = Math.max(currentDepth, max);

        if (node.right) {
            stack.push(node.right);
            depth.push(currentDepth + 1);
        }

        if (node.left) {
            stack.push(node.left);
            depth.push(currentDepth + 1);
        }
    }

    return max;
}
