from typing import Tuple

from data_structures.stack.pyhton.stack import Stack
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs


def has_path_sum_recursive(root: BinaryTreeNode, path_sum: int) -> bool:
    """
    >>> tree = binary_tree_create_bfs([5, 4, 8, 11, 13, 4, 7, 2, 1])
    >>> has_path_sum_recursive(tree, 22)
    True
    """
    if not root:
        return False

    if not root.left and not root.right:
        return root.val == path_sum

    return has_path_sum_recursive(root.left, path_sum - root.val) or has_path_sum_recursive(root.right, path_sum - root.val)


def has_path_sum_dfs_stack(root: BinaryTreeNode[int], path_sum: int) -> bool:
    """
    >>> tree = binary_tree_create_bfs([5, 4, 8, 11, 13, 4, 7, 2, 1])
    >>> has_path_sum_dfs_stack(tree, 22)
    True
    """
    if not root:
        return False

    stack: Stack[Tuple[BinaryTreeNode[int], int]] = Stack()
    stack.push((root, root.val))

    while not stack.is_empty:
        pair: Tuple[BinaryTreeNode[int], int] = stack.pop()
        node, val = pair

        if val == path_sum and not node.left and not node.right:
            return True
        else:
            if node.left:
                stack.push((node.left, val + node.left.val))
            if node.right:
                stack.push((node.right, val + node.right.val))

    return False


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
