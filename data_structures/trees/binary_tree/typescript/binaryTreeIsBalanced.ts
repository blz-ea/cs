import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';

function helper<T>(root: BinaryTreeNode<T>): number {
    if (root === null) {
        return 0;
    }

    const left = helper(root.left);
    const right = helper(root.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    }

    return Math.max(left, right) + 1;
}

export function isBalanced<T>(root: BinaryTreeNode<T>): boolean {
    if (root === null) {
        return true;
    }

    return helper(root) !== -1;
}

export function isBalancedIterative<T>(root: BinaryTreeNode<T>): boolean {
    const stack = new Stack<BinaryTreeNode<T>>();
    const depths = new Map();

    let node = root;
    let last = null;

    while (!stack.isEmpty || node) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.peek();
            if (!node.right || node.right === last) {
                node = stack.pop();
                const left = depths.get(node.left) || 0;
                const right = depths.get(node.right) || 0;

                if (Math.abs(left - right) > 1) {
                    return false;
                }

                depths.set(node, 1 + Math.max(left, right));
                last = node;
                node = null;
            } else {
                node = node.right;
            }
        }
    }

    return true;
}
