import pytest
from data_structures.trees.binary_tree.python.binary_tree_create_inorder_preorder import \
    binary_tree_create_preorder_inorder,\
    binary_tree_create_preorder_inorder_simple,\
    binary_tree_create_preorder_inorder_iterative,\
    binary_tree_create_preorder_inorder_iterative_no_hash_table
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode


def assertion_function(tree: BinaryTreeNode):
    assert isinstance(tree, BinaryTreeNode)
    assert tree.val == 3
    assert tree.left.val == 9
    assert tree.left.left is None
    assert tree.left.right is None

    assert tree.right.val == 20
    assert tree.right.left.val == 15
    assert tree.right.right.val == 7


@pytest.fixture(scope='function')
def input_preorder_inorder():
    return [3, 9, 20, 15, 7], [9, 3, 15, 20, 7]


def test_create_binary_tree_preorder_inorder(input_preorder_inorder):
    tree = binary_tree_create_preorder_inorder(input_preorder_inorder[0], input_preorder_inorder[1])
    assertion_function(tree)


def test_binary_tree_create_inorder_preorder_simple(input_preorder_inorder):
    tree = binary_tree_create_preorder_inorder_simple(input_preorder_inorder[0], input_preorder_inorder[1])
    assertion_function(tree)


def test_binary_tree_create_inorder_preorder_iterative(input_preorder_inorder):
    tree = binary_tree_create_preorder_inorder_iterative(input_preorder_inorder[0], input_preorder_inorder[1])
    assertion_function(tree)


def test_binary_tree_create_inorder_preorder_iterative_no_hash_table(input_preorder_inorder):
    tree = binary_tree_create_preorder_inorder_iterative_no_hash_table(input_preorder_inorder[0], input_preorder_inorder[1])
    assertion_function(tree)
