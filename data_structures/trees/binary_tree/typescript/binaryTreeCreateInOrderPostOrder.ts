import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

export function binaryTreeCreateInOrderPostOrderSimple<T>(inOrder: T[], postOrder: T[]): BinaryTreeNode<T> {
    let inOrderIndex = inOrder.length - 1;
    let postOrderIndex = postOrder.length - 1;

    const build = (inOrder: T[], postOrder: T[], root: BinaryTreeNode<T>): BinaryTreeNode<T> => {
        if (postOrderIndex < 0) {
            return null;
        }

        const node = new BinaryTreeNode<T>(postOrder[postOrderIndex--]);

        if (inOrder[inOrderIndex] != node.val) {
            node.right = build(inOrder, postOrder, node);
        }

        inOrderIndex--;

        if (root === null || inOrder[inOrderIndex] !== root.val) {
            node.left = build(inOrder, postOrder, root);
        }

        return node;
    };

    return build(inOrder, postOrder, null);
}
