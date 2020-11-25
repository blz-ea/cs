from typing import TypeVar, Tuple
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.queue.pyhton.queue import Queue

T = TypeVar('T')


def binary_tree_is_symmetric_recursive(root: BinaryTreeNode[T]) -> bool:
    if root is None:
        return True

    return binary_tree_is_mirror(root.left, root.right)


def binary_tree_is_mirror(p: BinaryTreeNode[T], q: BinaryTreeNode[T]) -> bool:
    if not p and not q:
        return True

    if not p or not q or p.val != q.val:
        return False

    return binary_tree_is_mirror(p.left, q.right) and binary_tree_is_mirror(p.right, q.left)


def binary_tree_is_symmetric_iterative(root: BinaryTreeNode[T]) -> bool:
    if not root:
        return True

    q1: Queue[BinaryTreeNode[T]] = Queue()
    q2: Queue[BinaryTreeNode[T]] = Queue()

    q1.enqueue(root.left)
    q2.enqueue(root.right)

    while not q1.is_empty or not q2.is_empty:
        left: BinaryTreeNode[T] = q1.dequeue()
        right: BinaryTreeNode[T] = q2.dequeue()

        if not left and not right:
            continue

        if not left or not right or left.val != right.val:
            return False

        q1.enqueue(left.left)
        q1.enqueue(left.right)

        q2.enqueue(right.right)
        q2.enqueue(right.left)

    return True
