from typing import TypeVar, TYPE_CHECKING
from data_structures.stack.pyhton.stack import Stack

if TYPE_CHECKING:
    from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode

T = TypeVar('T')


def is_valid_bst_stack(root: 'BinaryTreeNode[T]') -> bool:
    if root is None:
        return True

    stack = Stack['BinaryTreeNode[T]']()
    pre = None

    while root is not None or not stack.is_empty:
        while root is not None:
            stack.push(root)
            root = root.left

        root: 'BinaryTreeNode[T]' = stack.pop()
        if pre is not None and root.val <= pre.val:
            return False

        pre = root
        root = root.right

    return True
