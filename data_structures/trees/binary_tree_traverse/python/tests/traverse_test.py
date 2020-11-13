import pytest
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.trees.binary_tree_traverse.python.traverse import traverse_in_order, traverse_pre_order, \
    traverse_post_order, traverse_bfs


@pytest.fixture(scope='function')
def test_tree() -> BinaryTreeNode:
    root = BinaryTreeNode(10)
    node2 = BinaryTreeNode(5)
    node3 = BinaryTreeNode(13)
    node4 = BinaryTreeNode(2)
    node5 = BinaryTreeNode(7)
    node6 = BinaryTreeNode(11)
    node7 = BinaryTreeNode(15)

    root.left = node2
    root.right = node3

    node2.left = node4
    node2.right = node5

    node3.left = node6
    node3.right = node7

    return root


def test_binary_tree_traverse_dfs_in_order(test_tree: BinaryTreeNode):
    assert traverse_in_order(test_tree) == [2, 5, 7, 10, 11, 13, 15]


def test_binary_tree_traverse_dfs_pre_order(test_tree: BinaryTreeNode):
    assert traverse_pre_order(test_tree) == [10, 5, 2, 7, 13, 11, 15]


def test_binary_tree_traverse_dfs_post_order(test_tree: BinaryTreeNode):
    assert traverse_post_order(test_tree) == [2, 7, 5, 11, 15, 13, 10]


def test_binary_tree_traverse_bfs(test_tree: BinaryTreeNode):
    assert traverse_bfs(test_tree) == [10, 5, 13, 2, 7, 11, 15]
