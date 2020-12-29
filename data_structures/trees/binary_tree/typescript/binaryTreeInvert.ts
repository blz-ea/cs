import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';

export function binaryTreeInvertDFS<T>(root: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (root) {
        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        binaryTreeInvertDFS(root.left);
        binaryTreeInvertDFS(root.right);
    }

    return root;
}

export function binaryTreeInvertDFSStack<T>(root: BinaryTreeNode<T>): BinaryTreeNode<T> {
    const stack = new Stack<BinaryTreeNode<T>>();
    stack.push(root);

    while (!stack.isEmpty) {
        const node = stack.pop();

        if (node) {
            const temp = node.left;
            node.left = node.right;
            node.right = temp;

            stack.push(node.left);
            stack.push(node.right);
        }
    }

    return root;
}
