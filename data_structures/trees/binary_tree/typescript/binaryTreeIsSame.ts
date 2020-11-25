import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Stack from '@ds/stack/typescript/Stack';

/**
 * Function that validates recursively if two binary trees are equal
 * @param p
 * @param q
 */
function binaryTreeIsSameRecursive<T>(p: BinaryTreeNode<T>, q: BinaryTreeNode<T>): boolean {
    if (p && q) {
        const left = binaryTreeIsSameRecursive(p.left, q.left);
        const right = binaryTreeIsSameRecursive(p.right, q.right);

        return p.val === q.val && left && right;
    } else {
        return p === q;
    }
}

function binaryTreeIsSameStack<T>(p: BinaryTreeNode<T>, q: BinaryTreeNode<T>): boolean {
    const stack = new Stack<[BinaryTreeNode<T>, BinaryTreeNode<T>]>();
    stack.push([p, q]);

    while (!stack.isEmpty) {
        const [node1, node2] = stack.pop();

        if (node1 && node2 && node1.val === node2.val) {
            stack.push([node1.right, node2.right]);
            stack.push([node1.left, node2.left]);
        } else if (!node1 && !node2) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

export { binaryTreeIsSameRecursive, binaryTreeIsSameStack };
