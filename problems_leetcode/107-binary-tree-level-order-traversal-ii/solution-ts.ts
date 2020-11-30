import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import SinglyLinkedList from '@ds/linked_list/typescript/SinglyLinkedList';
import Stack from '@ds/stack/typescript/Stack';

export function binaryTreeLevelOrderTraversalBottomRecursive<T>(root: BinaryTreeNode<T>): T[][] {
    const result: SinglyLinkedList<T[]> = new SinglyLinkedList<T[]>();
    binaryTreeLevelOrderTraversalBottomRecursiveDFS(root, 0, result);

    return result.toArray();
}

function binaryTreeLevelOrderTraversalBottomRecursiveDFS<T>(
    root: BinaryTreeNode<T>,
    level: number,
    result: SinglyLinkedList<T[]>,
): void {
    if (!root) {
        return;
    }

    if (level === result.length) {
        result.unshift([], level);
    }

    const listNode = result.find(level);

    if (listNode) {
        listNode.val.push(root.val);
    }

    binaryTreeLevelOrderTraversalBottomRecursiveDFS(root.left, level + 1, result);
    binaryTreeLevelOrderTraversalBottomRecursiveDFS(root.right, level + 1, result);
}

export function binaryTreeLevelOrderTraversalBottomStack<T>(root: BinaryTreeNode<T>): T[][] {
    const result: SinglyLinkedList<T[]> = new SinglyLinkedList<T[]>();
    const stack: Stack<[BinaryTreeNode<T>, number]> = new Stack();

    stack.push([root, 0]);

    while (!stack.isEmpty) {
        const [node, level] = stack.pop();

        if (level == result.length) {
            result.unshift([], level);
        }

        const listNode = result.find(level);

        if (listNode) {
            listNode.val.push(node.val);
        }

        if (node.right) {
            stack.push([node.right, level + 1]);
        }

        if (node.left) {
            stack.push([node.left, level + 1]);
        }
    }

    return result.toArray();
}
