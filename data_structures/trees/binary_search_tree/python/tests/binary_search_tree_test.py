import pytest
from data_structures.trees.binary_search_tree.python.binary_search_tree import BinarySearchTree
from data_structures.trees.binary_search_tree.python.binary_search_tree_node import BinarySearchTreeNode


@pytest.fixture(scope='function')
def test_tree():
    tree = BinarySearchTree()
    """
             8
          5   15
        3   9    12
      1       10    13
        2       11
    """
    tree.insert(8, 5, 15, 9, 3, 12, 10, 11, 1, 2, 13)
    return tree


def test_create_empty_tree():
    tree = BinarySearchTree()
    assert isinstance(tree, BinarySearchTree) is True
    assert tree.is_empty is True


def test_insert_single_node():
    tree = BinarySearchTree()
    tree.insert_node(5)

    assert tree.is_empty is False
    assert tree.root.val == 5
    assert tree.root.parent is None
    assert tree.root.left is None
    assert tree.root.right is None


def test_insert_multiple_nodes():
    tree = BinarySearchTree()
    tree.insert_node(5)
    tree.insert_node(3)
    tree.insert_node(6)

    assert tree.root.val == 5
    assert tree.root.left.val == 3
    assert tree.root.right.val == 6

    assert tree.root.left.parent == tree.root
    assert tree.root.right.parent == tree.root


def test_insert_multiple_nodes_kwargs():
    tree = BinarySearchTree()
    tree.insert(5, 3, 6)

    assert tree.root.val == 5
    assert tree.root.left.val == 3
    assert tree.root.right.val == 6


def test_search_node():
    tree = BinarySearchTree()
    tree.insert(5, 3, 6)

    root_search = tree.search(5)
    assert isinstance(root_search, BinarySearchTreeNode)
    assert root_search.val is 5

    left_search = tree.search(3)
    assert isinstance(left_search, BinarySearchTreeNode)
    assert left_search.val is 3

    right_search = tree.search(6)
    assert isinstance(right_search, BinarySearchTreeNode)
    assert right_search.val is 6

    not_found = tree.search(15)
    assert not_found is None


def test_get_min_max():
    tree = BinarySearchTree()
    tree.insert(5, 3, 6)

    assert tree.get_min().val == 3
    assert tree.get_max().val == 6


def test_remove_leaf_no_left_no_right(test_tree: BinarySearchTree[int]):
    test_tree.remove(2)
    assert test_tree.traverse_in_order() == [1, 3, 5, 8, 9, 10, 11, 12, 13, 15]
    assert test_tree.search(2) is None


def test_remove_leaf_no_left(test_tree: BinarySearchTree[int]):
    test_tree.remove(1)
    assert test_tree.traverse_in_order() == [2, 3, 5, 8, 9, 10, 11, 12, 13, 15]
    assert test_tree.search(1) is None


def test_remove_leaf_no_right(test_tree: BinarySearchTree[int]):
    test_tree.remove(3)
    assert test_tree.traverse_in_order() == [1, 2, 5, 8, 9, 10, 11, 12, 13, 15]
    assert test_tree.search(3) is None


def test_remove_edge_with_left_with_right(test_tree: BinarySearchTree[int]):
    test_tree.remove(12)
    assert test_tree.traverse_in_order() == [1, 2, 3, 5, 8, 9, 10, 11, 13, 15]
    assert test_tree.search(12) is None


def test_remove_all_nodes(test_tree: BinarySearchTree[int]):
    test_data = [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 15]

    while len(test_data):
        print(test_tree.root.val)
        test_tree.remove(test_data[0])
        test_data = test_data[1:]
        print(test_data)
        assert test_tree.traverse_in_order() == test_data
