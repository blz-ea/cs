import BinaryTreeNode from '@ds/trees/binary_tree/typescript/BinaryTreeNode';
import Queue from '@ds/queue/typescript/Queue';
import HashTable from '@ds/hash_table/typescript/HashTable';
import Stack from '@ds/stack/typescript/Stack';

export function binaryTreeCreateInOrderPreOrderSimple<T>(preOrder: T[], inOrder: T[]): BinaryTreeNode<T> {
    /**
     * Example Tree:
     *    3
     *  9  20
     *    15 7
     *
     * preOrder = [3,9,20,15,7]
     * inOrder = [9,3,15,20,7]
     *
     * Steps:
     *
     * Pop first element from preOrder
     * Find index of popped element in inOrder
     * Create root node -> first element in preOrder
     * Recursively populate left and right
     * - Left: Pass preOrder array unchanged, inOrder will equal to array from 0 till root's index in inOrder
     * - Right: Pass preOrder array unchanged, inOrder will equal to array from  root's index+1 till the end of array
     * Return root
     *
     * Ref: https://www.techiedelight.com/construct-binary-tree-from-inorder-preorder-traversal/
     */

    if (!inOrder || inOrder.length == 0) {
        return null;
    }

    const popped = preOrder.shift();
    const index = inOrder.indexOf(popped);
    const root = new BinaryTreeNode(inOrder[index]);

    root.left = binaryTreeCreateInOrderPreOrderSimple(preOrder, inOrder.slice(0, index));
    root.right = binaryTreeCreateInOrderPreOrderSimple(preOrder, inOrder.slice(index + 1));

    return root;
}

export function binaryTreeCreateInOrderPreOrder<T>(preOrder: T[], inOrder: T[]): BinaryTreeNode<T> {
    const queue = new Queue<T>().fromArray(preOrder);
    const hashTable = new HashTable<T, number>();

    for (let i = 0; i < inOrder.length; i++) {
        hashTable.put(inOrder[i], i);
    }

    const helper = (start: number, end: number): BinaryTreeNode<T> => {
        if (start > end) {
            return null;
        }

        const node = queue.dequeue();
        const rootIndex = hashTable.get(node);

        const root = new BinaryTreeNode(inOrder[rootIndex]);
        root.left = helper(start, rootIndex - 1);
        root.right = helper(rootIndex + 1, end);
        return root;
    };

    return helper(0, inOrder.length - 1);
}

export function binaryTreeCreateInOrderPreOrderIterative<T>(preOrder: T[], inOrder: T[]): BinaryTreeNode<T> {
    /**
     * preOrder = [3,9,20,15,7]
     * inOrder = [9,3,15,20,7]
     *
     * stack = 3
     * hashTable = [
     *  9  : 0
     *  3  : 1
     *  15 : 2
     *  20 : 3
     *  7  : 4
     * ]
     *
     *
     */
    if (!preOrder || preOrder.length === 0) {
        return null;
    }

    const hashTable = new HashTable();

    for (let i = 0; i < inOrder.length; i++) {
        hashTable.put(inOrder[i], i);
    }

    const stack = new Stack<BinaryTreeNode<T>>();
    const root = new BinaryTreeNode(preOrder[0]);

    stack.push(root);

    for (let i = 1; i < preOrder.length; i++) {
        const node = new BinaryTreeNode(preOrder[i]);

        if (hashTable.get(node.val) < hashTable.get(stack.peek().val)) {
            stack.peek().left = node;
        } else {
            let parent = new BinaryTreeNode(null);
            while (!stack.isEmpty && hashTable.get(node.val) > hashTable.get(stack.peek().val)) {
                parent = stack.pop();
            }
            parent.right = node;
        }

        stack.push(node);
    }

    return root;
}

export function binaryTreeCreateInOrderPreOrderIterativeNoHashTable<T>(preOrder: T[], inOrder: T[]): BinaryTreeNode<T> {
    if (!preOrder || preOrder.length == 0) {
        return;
    }

    let j = 0;
    let i = 0;

    let pp: BinaryTreeNode<T> | null = null;
    let ptr: BinaryTreeNode<T> | null = null;

    const stack = new Stack<BinaryTreeNode<T>>();
    const root = new BinaryTreeNode(null);
    stack.push(root);

    while (i < inOrder.length) {
        if (stack.peek().val === inOrder[i]) {
            pp = stack.pop();
            i++;
        } else if (pp) {
            ptr = new BinaryTreeNode(preOrder[j]);
            pp.right = ptr;
            pp = null;
            stack.push(ptr);
            j++;
        } else {
            ptr = new BinaryTreeNode(preOrder[j]);
            stack.peek().left = ptr;
            stack.push(ptr);
            j++;
        }
    }

    ptr = root.left;
    return ptr;
}
