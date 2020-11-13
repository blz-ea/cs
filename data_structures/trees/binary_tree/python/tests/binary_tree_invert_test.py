import pytest
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.trees.binary_tree.python.binary_tree_invert import invert_binary_tree_dfs, invert_binary_tree_dfs_stack, \
    invert_binary_tree_bfs


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


def test_binary_tree_invert_dfs(test_tree: BinaryTreeNode):
    assert invert_binary_tree_dfs(test_tree).traverse_pre_order() == [10, 13, 15, 11, 5, 7, 2]


def test_binary_tree_invert_dfs_stack(test_tree: BinaryTreeNode):
    assert invert_binary_tree_dfs_stack(test_tree).traverse_pre_order() == [10, 13, 15, 11, 5, 7, 2]


def test_binary_tree_invert_bfs(test_tree: BinaryTreeNode):
    assert invert_binary_tree_bfs(test_tree).traverse_depth() == [10, 13, 5, 11, 15, 2, 7]
