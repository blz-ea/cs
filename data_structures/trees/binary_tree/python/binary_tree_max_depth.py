from typing import TypeVar
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.stack.pyhton.stack import Stack

T = TypeVar('T')


def binary_tree_max_depth(root: BinaryTreeNode) -> int:
    """
    Returns max depth of binary tree
    """
    if root is None:
        return 0

    return max(binary_tree_max_depth(root.left) + 1, binary_tree_max_depth(root.right) + 1)


def binary_tree_max_depth_iterative(root: BinaryTreeNode) -> int:
    if not root:
        return 0

    stack: Stack[BinaryTreeNode[T]] = Stack()
    depth: Stack[BinaryTreeNode[T]] = Stack()

    stack.push(root)
    depth.push(1)

    max_depth = 0

    while not stack.is_empty:
        node: BinaryTreeNode[T] = stack.pop()
        current_depth: int = depth.pop()

        max_depth = max(current_depth, max_depth)

        if node.right:
            stack.push(node.right)
            depth.push(current_depth  + 1)

        if node.left:
            stack.push(node.left)
            depth.push(current_depth + 1)

    return max_depth
