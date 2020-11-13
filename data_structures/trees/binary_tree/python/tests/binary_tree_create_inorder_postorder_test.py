import sys
import pytest
from data_structures.trees.binary_tree.python.binary_tree_create_inorder_postorder import \
    binary_tree_create_inorder_postorder_simple
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
def input_inorder_postorder():
    return [9, 3, 15, 20, 7], [9, 15, 7, 20, 3]


def test_binary_tree_create_inorder_preorder_simple(input_inorder_postorder):
    tree = binary_tree_create_inorder_postorder_simple(input_inorder_postorder[0], input_inorder_postorder[1])
    assertion_function(tree)


if __name__ == '__main__':
    pytest.main(sys.argv)
