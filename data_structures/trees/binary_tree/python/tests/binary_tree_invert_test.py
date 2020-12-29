import sys

import pytest

from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.trees.binary_tree.python.binary_tree_invert import invert_binary_tree_dfs, \
    invert_binary_tree_dfs_stack, invert_binary_tree_bfs


@pytest.fixture(scope='function')
def test_tree() -> BinaryTreeNode:
    return binary_tree_create_bfs([10, 5, 13, 2, 7, 11, 15])


def test_binary_tree_invert_dfs(test_tree: BinaryTreeNode):
    assert invert_binary_tree_dfs(test_tree).traverse_pre_order() == [10, 13, 15, 11, 5, 7, 2]


def test_binary_tree_invert_dfs_stack(test_tree: BinaryTreeNode):
    assert invert_binary_tree_dfs_stack(test_tree).traverse_pre_order() == [10, 13, 15, 11, 5, 7, 2]


def test_binary_tree_invert_bfs(test_tree: BinaryTreeNode):
    assert invert_binary_tree_bfs(test_tree).traverse_depth() == [10, 13, 5, 11, 15, 2, 7]


if __name__ == '__main__':
    pytest.main(sys.argv)
