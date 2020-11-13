from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode


def test_binary_tree_node():
    bt_node = BinaryTreeNode()
    assert hasattr(bt_node, "val") is True
    assert hasattr(bt_node, "left") is True
    assert hasattr(bt_node, "right") is True

    assert bt_node.val is None
    assert bt_node.left is None
    assert bt_node.right is None


def test_binary_tree_with_value():
    bt_node = BinaryTreeNode(1)
    assert bt_node.val == 1
    assert bt_node.left is None
    assert bt_node.right is None


def test_binary_tree_with_leaves():
    bt_node = BinaryTreeNode(1)
    bt_node1 = BinaryTreeNode(2)
    bt_node2 = BinaryTreeNode(3)

    bt_node.left = bt_node1
    bt_node.right = bt_node2

    assert isinstance(bt_node.left, BinaryTreeNode)
    assert isinstance(bt_node.right, BinaryTreeNode)

    assert bt_node.val == 1
    assert bt_node.left.val == 2
    assert bt_node.right.val == 3

    assert bt_node.left.left is None
    assert bt_node.left.right is None

    assert bt_node.right.left is None
    assert bt_node.right.right is None
