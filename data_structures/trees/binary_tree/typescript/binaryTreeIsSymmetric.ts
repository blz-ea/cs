import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Queue from '@ds/queue/typescript/Queue';

export function isSymmetric<T>(root: BinaryTreeNode<T>): boolean {
    if (!root) {
        return true;
    }

    return isMirror(root.left, root.right);
}

function isMirror<T>(p: BinaryTreeNode<T>, q: BinaryTreeNode<T>): boolean {
    if (p === null && q === null) {
        return true;
    }

    if (p === null || q === null || p.val !== q.val) {
        return false;
    }

    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
}

export function isSymmetricIterative<T>(root: BinaryTreeNode<T>): boolean {
    if (!root) {
        return true;
    }

    const q1 = new Queue<BinaryTreeNode<T>>();
    const q2 = new Queue<BinaryTreeNode<T>>();

    q1.enqueue(root.left);
    q2.enqueue(root.right);

    while (!q1.isEmpty && !q2.isEmpty) {
        const left = q1.dequeue();
        const right = q2.dequeue();
        if (!left && !right) {
            continue;
        }

        if (!left || !right || left.val !== right.val) {
            return false;
        }

        q1.enqueue(left.left);
        q1.enqueue(left.right);

        q2.enqueue(right.right);
        q2.enqueue(right.left);
    }

    return true;
}
