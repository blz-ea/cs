import BinaryTreeNode from './BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';

/**
 * Returns binary tree's maximum depth
 */
export default function binaryTreeMaxDepth<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    return Math.max(binaryTreeMaxDepth<T>(root.left) + 1, binaryTreeMaxDepth<T>(root.right) + 1);
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
