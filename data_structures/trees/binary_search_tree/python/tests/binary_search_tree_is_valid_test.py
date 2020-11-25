from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs
from data_structures.trees.binary_search_tree.python.binary_search_tree_is_valid import is_valid_bst_stack


def test_binary_search_tree_is_valid():
    root = binary_tree_create_bfs([10, 5, 13, 2, 7, 11, 15])
    assert is_valid_bst_stack(root) is True
