import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';

export function isValidBSTStack<T>(root: BinaryTreeNode<T>): boolean {
    if (root === null) {
        return true;
    }

    const stack = new Stack<BinaryTreeNode<T>>();
    let pre = null;

    while (root !== null || !stack.isEmpty) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        if (pre !== null && root.val <= pre.val) {
            return false;
        }

        pre = root;
        root = root.right;
    }

    return true;
}
