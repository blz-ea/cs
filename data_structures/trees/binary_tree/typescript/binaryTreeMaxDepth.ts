import BinaryTreeNode from './BinaryTreeNode';

/**
 * Returns binary tree's maximum depth
 */
export default function binaryTreeMathDepth<T>(root: BinaryTreeNode<T>): number {
    if (!root) {
        return 0;
    }

    return Math.max(binaryTreeMathDepth<T>(root.left) + 1, binaryTreeMathDepth<T>(root.right) + 1);
}
