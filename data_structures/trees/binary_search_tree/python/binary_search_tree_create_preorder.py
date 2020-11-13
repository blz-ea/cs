from typing import List, TypeVar, Union, Final
from data_structures.trees.binary_search_tree.python.binary_search_tree_node import BinarySearchTreeNode

T = TypeVar('T')


def binary_search_tree_create_preorder(arr: List[T], start: int = 0, end: int = None) -> Union[BinarySearchTreeNode[T], None]:
    if end is None:
        end = len(arr) - 1

    if start > end:
        return None

    node: Final = BinarySearchTreeNode(arr[start])

    i = start
    while i <= end:
        if arr[i] > node.val:
            break
        i += 1

    node.left = binary_search_tree_create_preorder(arr, start+1, i-1)
    node.right = binary_search_tree_create_preorder(arr, i, end)

    return node
