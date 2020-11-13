from typing import List, TypeVar, Union
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.queue.pyhton.queue import Queue

T = TypeVar("T")


def binary_tree_create_bfs(values: List[T]) -> Union[None, BinaryTreeNode[T]]:
    if not values or len(values) == 0:
        return None

    tree_node_queue: Queue[BinaryTreeNode[T]] = Queue[BinaryTreeNode[T]]()
    integer_queue: Queue[T] = Queue[T]()

    for i in range(1, len(values)):
        integer_queue.enqueue(values[i])

    tree_node = BinaryTreeNode(values[0])
    tree_node_queue.enqueue(tree_node)

    while not integer_queue.is_empty:
        left_val = None if integer_queue.is_empty else integer_queue.dequeue()
        right_val = None if integer_queue.is_empty else integer_queue.dequeue()

        current: BinaryTreeNode[T] = tree_node_queue.dequeue()

        if left_val is not None:
            left = BinaryTreeNode(left_val)
            current.left = left
            tree_node_queue.enqueue(left)

        if right_val is not None:
            right = BinaryTreeNode(right_val)
            current.right = right
            tree_node_queue.enqueue(right)

    return tree_node


def binary_tree_create_bfs_recursive(arr: List[T], root: Union[BinaryTreeNode, None] = None,
                                     i: int = 0) -> 'BinaryTreeNode[T]':
    length = len(arr)
    if i < length:
        root = BinaryTreeNode(arr[i])
        root.left = binary_tree_create_bfs_recursive(arr, root.left, 2 * i + 1)
        root.right = binary_tree_create_bfs_recursive(arr, root.right, 2 * i + 2)

    return root
