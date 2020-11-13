from data_structures.trees.binary_search_tree.python.binary_search_tree_node import BinarySearchTreeNode


def test_create_binary_search_tree_node():
    root = BinarySearchTreeNode(1)

    assert root.left is None
    assert root.right is None
    assert root.parent is None
    assert root.val == 1


def test_create_binary_search_tree_node_with_parent():
    parent = BinarySearchTreeNode(2)
    root = BinarySearchTreeNode(1, parent)

    assert root.parent == parent


def test_create_left_and_right_leaf():
    root = BinarySearchTreeNode(1)
    left = BinarySearchTreeNode(2)
    right = BinarySearchTreeNode(3)

    root.left = left
    root.right = right
    root.left.parent = root
    root.right.parent = root

    assert root.val == 1
    assert root.left == left
    assert root.right == right

    assert root.left.val == 2
    assert root.right.val == 3

    assert root.left.parent == root
    assert root.right.parent == root
