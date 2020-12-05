import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';

export const pathSumRecursiveDFS = (root: BinaryTreeNode<number>, sum: number): boolean => {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return root.val === sum;
    }

    return pathSumRecursiveDFS(root.left, sum - root.val) || pathSumRecursiveDFS(root.right, sum - root.val);
};

export const pathSumStack = (root: BinaryTreeNode<number>, sum: number): boolean => {
    if (!root) {
        return false;
    }

    const stack = new Stack<[BinaryTreeNode<number>, number]>();

    stack.push([root, root.val]);

    while (!stack.isEmpty) {
        const [node, val] = stack.pop();

        if (!node.left && !node.right && val === sum) {
            return true;
        } else {
            if (node.left) {
                stack.push([node.left, val + node.left.val]);
            }

            if (node.right) {
                stack.push([node.right, val + node.right.val]);
            }
        }
    }

    return false;
};
