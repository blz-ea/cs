import Queue from '@ds/queue/typescript/Queue';
import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';

export default function binaryTreeCreateBFS<T>(array: T[]): BinaryTreeNode<T> {
    if (!array || array.length === 0) {
        return null;
    }

    const valueQueue: Queue<T> = new Queue<T>();
    const treeNodeQueue: Queue<BinaryTreeNode<T>> = new Queue<BinaryTreeNode<T>>();

    for (let i = 1; i < array.length; i++) {
        valueQueue.enqueue(array[i]);
    }

    const root = new BinaryTreeNode(array[0]);
    treeNodeQueue.enqueue(root);

    while (!valueQueue.isEmpty) {
        const leftLeaf = valueQueue.isEmpty ? null : new BinaryTreeNode(valueQueue.dequeue());
        const rightLeaf = valueQueue.isEmpty ? null : new BinaryTreeNode(valueQueue.dequeue());

        const current = treeNodeQueue.dequeue();
        if (leftLeaf && leftLeaf.val != null) {
            current.left = leftLeaf;
            treeNodeQueue.enqueue(leftLeaf);
        }

        if (rightLeaf != null && leftLeaf.val != null) {
            current.right = rightLeaf;
            treeNodeQueue.enqueue(rightLeaf);
        }
    }

    return root;
}

export function binaryTreeCreateCompleteRecursive<T>(arr: T[], root = null, i = 0): BinaryTreeNode<T> {
    const arrayLength = arr.length;
    if (i < arrayLength) {
        root = new BinaryTreeNode<T>(arr[i]);

        root.left = binaryTreeCreateCompleteRecursive<T>(arr, root.left, 2 * i + 1);
        root.right = binaryTreeCreateCompleteRecursive<T>(arr, root.right, 2 * i + 2);
    }

    return root;
}
