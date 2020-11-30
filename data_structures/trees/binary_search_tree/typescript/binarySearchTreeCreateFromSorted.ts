import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

export function sortedArrayToBstRecursive<T>(array: T[]): BinaryTreeNode<T> {
    if (!array || array.length === 0) {
        return null;
    }

    const mid = Math.floor(array.length / 2);
    const root = new BinaryTreeNode(array[mid]);

    root.left = sortedArrayToBstRecursive(array.slice(0, mid));
    root.right = sortedArrayToBstRecursive(array.slice(mid + 1));

    return root;
}

export function sortedArrayToBstRecursiveOptimized<T>(array: T[]): BinaryTreeNode<T> {
    if (!array || array.length === 0) {
        return null;
    }

    return sortedArrayToBstRecursiveOptimizedBuild(array, 0, array.length - 1);
}

function sortedArrayToBstRecursiveOptimizedBuild<T>(array: T[], low: number, high: number): BinaryTreeNode<T> {
    if (low === high) {
        return null;
    }

    const mid = Math.floor((low + high) / 2);
    const root = new BinaryTreeNode(array[mid]);

    root.left = sortedArrayToBstRecursiveOptimizedBuild(array, low, mid);
    root.right = sortedArrayToBstRecursiveOptimizedBuild(array, mid + 1, high);

    return root;
}
