from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode


def binary_tree_max_depth(root: BinaryTreeNode) -> int:
    """
    Returns max depth of binary tree
    """
    if root is None:
        return 0

    return max(binary_tree_max_depth(root.left) + 1, binary_tree_max_depth(root.right) + 1)
