import BinarySearchTreeNode from '@ds/trees/binary_search_tree/typescript/BinarySearchTreeNode';

export function createBinarySearchTreePreOrder<T>(
    preorder: T[],
    start = 0,
    end = preorder.length - 1,
): BinarySearchTreeNode<T> {
    // Base case
    if (start > end) {
        return null;
    }

    // Construct the root node
    const node = new BinarySearchTreeNode<T>(preorder[start]);

    // Search for the index of first element in current range of preorder
    // which is larger than the value of root node
    let i = start;
    while (i <= end) {
        if (preorder[i] > node.val) {
            break;
        }
        i++;
    }

    node.left = createBinarySearchTreePreOrder<T>(preorder, start + 1, i - 1);
    node.right = createBinarySearchTreePreOrder<T>(preorder, i, end);

    return node;
}
