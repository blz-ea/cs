from typing import List, TypeVar, Union
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode

T = TypeVar('T')


def sorted_array_to_bst_recursive(array: List[T]) -> Union[None, BinaryTreeNode[T]]:
    if not array or len(array) <= 0:
        return None

    mid = len(array) // 2

    root = BinaryTreeNode(array[mid])

    # Note: slicing array is expensive. See optimal recursive solution below
    root.left = sorted_array_to_bst_recursive(array[:mid])
    root.right = sorted_array_to_bst_recursive(array[mid + 1:])

    return root


def sorted_array_to_bst_recursive_optimized(array: List[T]) -> Union[None, BinaryTreeNode[T]]:
    return sorted_array_to_bst_recursive_optimal_build(array, 0, len(array))


def sorted_array_to_bst_recursive_optimal_build(array: List[T], low: int, high: int) -> Union[None, BinaryTreeNode[T]]:
    if low == high:
        return None

    mid = (low + high) // 2
    node = BinaryTreeNode(array[mid])
    node.left = sorted_array_to_bst_recursive_optimal_build(array, low, mid)
    node.right = sorted_array_to_bst_recursive_optimal_build(array, mid + 1, high)

    return node


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
