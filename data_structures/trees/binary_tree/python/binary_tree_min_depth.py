from typing import TypeVar

from data_structures.queue.pyhton.queue import Queue
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode

T = TypeVar('T')


def binary_tree_min_depth_recursive(root: BinaryTreeNode[T]) -> int:
    """
    Returns min depth of binary tree
    """
    if root is None:
        return 0

    left = binary_tree_min_depth_recursive(root.left)
    right = binary_tree_min_depth_recursive(root.right)

    if left == 0 or right == 0:
        return max(left, right) + 1
    else:
        return min(left, right) + 1


def binary_tree_min_depth_iterative_bfs(root: BinaryTreeNode[T]) -> int:
    if not root:
        return 0

    queue: Queue[BinaryTreeNode[T]] = Queue()
    queue.enqueue(root)
    depth = 1

    while not queue.is_empty:
        size = queue.is_empty + 1
        for i in range(size):
            curr_node: BinaryTreeNode[T] = queue.dequeue()

            if not curr_node.left and not curr_node.right:
                return depth

            if curr_node.left:
                queue.enqueue(curr_node.left)

            if curr_node.right:
                queue.enqueue(curr_node.right)

        depth += 1

    return depth

