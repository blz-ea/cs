from data_structures.trees.binary_tree.python.binary_tree_is_same import binary_tree_is_same_recursive,binary_tree_is_same_stack
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs, binary_tree_create_bfs_recursive


def test_binary_tree_is_same_recursive_should_return_true():
    t1 = binary_tree_create_bfs([1, 2, 3])
    t2 = binary_tree_create_bfs([1, 2, 3])
    assert binary_tree_is_same_recursive(t1, t2) is True


def test_binary_tree_is_same_recursive_should_return_false():
    t1 = binary_tree_create_bfs([1, 2])
    t2 = binary_tree_create_bfs([1, None, 2])
    assert binary_tree_is_same_recursive(t1, t2) is False

    t1 = binary_tree_create_bfs([1, 2, 1])
    t2 = binary_tree_create_bfs([1, 1, 2])
    assert binary_tree_is_same_recursive(t1, t2) is False


def test_binary_tree_is_same_stack_should_return_true():
    t1 = binary_tree_create_bfs([1, 2, 3])
    t2 = binary_tree_create_bfs([1, 2, 3])
    assert binary_tree_is_same_stack(t1, t2) is True


def test_binary_tree_is_same_stack_should_return_false():
    t1 = binary_tree_create_bfs([1, 2])
    t2 = binary_tree_create_bfs([1, None, 2])
    assert binary_tree_is_same_stack(t1, t2) is False

    t1 = binary_tree_create_bfs([1, 2, 1])
    t2 = binary_tree_create_bfs([1, 1, 2])
    assert binary_tree_is_same_stack(t1, t2) is False
