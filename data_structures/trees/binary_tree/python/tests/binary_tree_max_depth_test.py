from data_structures.trees.binary_tree.python.binary_tree_max_depth import binary_tree_max_depth, \
    binary_tree_max_depth_iterative
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs


def test_max_depth_should_be_one():
    tree = binary_tree_create_bfs([3])
    assert binary_tree_max_depth(tree) == 1


def test_max_depth_should_be_3():
    tree = binary_tree_create_bfs([3, 9, 20, None, None, 15, 7])
    assert binary_tree_max_depth(tree) == 3


def test_max_depth_iterative_should_be_one():
    tree = binary_tree_create_bfs([3])
    assert binary_tree_max_depth_iterative(tree) == 1


def test_max_depth_iterative():
    tree = binary_tree_create_bfs([3, 9, 20, None, None, 15, 7])
    assert binary_tree_max_depth_iterative(tree) == 3
