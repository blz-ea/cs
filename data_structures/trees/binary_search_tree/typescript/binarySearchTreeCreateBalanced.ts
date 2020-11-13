import BinarySearchTreeNode from '@ds/trees/binary_search_tree/typescript/BinarySearchTreeNode';

export default function createBalancedBinarySearchTree<T>(
    array: T[],
    low = 0,
    high: number = array.length - 1,
): BinarySearchTreeNode<T> {
    if (low > high) {
        return null;
    }

    if (low === high) {
        return new BinarySearchTreeNode<T>(array[low]);
    }

    const mid = Math.floor((low + high) / 2);
    const root = new BinarySearchTreeNode<T>(array[mid]);

    root.left = createBalancedBinarySearchTree<T>(array, low, mid - 1);
    root.right = createBalancedBinarySearchTree<T>(array, mid + 1, high);

    return root;
}
