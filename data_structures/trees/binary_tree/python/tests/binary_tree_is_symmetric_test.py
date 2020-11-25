from data_structures.trees.binary_tree.python.binary_tree_is_symmetric import binary_tree_is_symmetric_iterative,\
    binary_tree_is_symmetric_recursive
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs


def test_binary_tree_is_symmetric_recursive_should_return_true():
    t1 = binary_tree_create_bfs([1, 2, 2, 3, 4, 4, 3])
    assert binary_tree_is_symmetric_recursive(t1) is True


def test_binary_tree_is_symmetric_recursive_should_return_false():
    t1 = binary_tree_create_bfs([1, 2, 1])
    assert binary_tree_is_symmetric_recursive(t1) is False

    t1 = binary_tree_create_bfs([1, 2, 2, None, 3, None, 3])
    assert binary_tree_is_symmetric_recursive(t1) is False


def test_binary_tree_is_symmetric_iterative_should_return_true():
    t1 = binary_tree_create_bfs([1, 2, 2, 3, 4, 4, 3])
    assert binary_tree_is_symmetric_iterative(t1) is True


def test_binary_tree_is_symmetric_iterative_should_return_false():
    t1 = binary_tree_create_bfs([1, 2, 1])
    assert binary_tree_is_symmetric_iterative(t1) is False

    t1 = binary_tree_create_bfs([1, 2, 2, None, 3, None, 3])
    assert binary_tree_is_symmetric_iterative(t1) is False
