from math import floor
from typing import List, TypeVar, Union, Final
from data_structures.trees.binary_search_tree.python.binary_search_tree_node import BinarySearchTreeNode

T = TypeVar('T')


def create_balanced_binary_search_tree(array: List[T], low: int = 0, high: int = None) -> Union[BinarySearchTreeNode[T], None]:
    if high is None:
        high = len(array) - 1

    if low > high:
        return None

    if low == high:
        return BinarySearchTreeNode(array[low])

    mid: Final = floor((low + high) / 2)
    root: Final = BinarySearchTreeNode(array[mid])

    root.left = create_balanced_binary_search_tree(array, low, mid - 1)
    root.right = create_balanced_binary_search_tree(array, mid + 1, high)

    return root
