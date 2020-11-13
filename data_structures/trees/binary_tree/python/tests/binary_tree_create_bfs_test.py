import sys
import pytest
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs, \
    binary_tree_create_bfs_recursive
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.trees.binary_tree_traverse.python.traverse import traverse_bfs


def test_binary_tree_create_bfs():
    root = binary_tree_create_bfs([1, 2, 3, 4, 5, 6])

    assert isinstance(root, BinaryTreeNode)
    assert isinstance(root.left, BinaryTreeNode)
    assert isinstance(root.right, BinaryTreeNode)

    assert root.val == 1
    assert root.left.val == 2
    assert root.right.val == 3

    assert root.left.left.val == 4
    assert root.left.right.val == 5
    assert root.right.left.val == 6
    assert root.right.right is None


def test_binary_tree_create_bfs_recursive():
    test_data = [1, 2, 3, 4, 5, 6]
    root = binary_tree_create_bfs_recursive(test_data)
    assert isinstance(root, BinaryTreeNode)
    assert traverse_bfs(root) == test_data


if __name__ == '__main__':
    pytest.main(sys.argv)
