import sys
import pytest
from data_structures.trees.binary_search_tree.python.binary_search_tree_create_from_sorted import \
    sorted_array_to_bst_recursive,\
    sorted_array_to_bst_recursive_optimized


def test_binary_search_tree_create_from_sorted_recursive():
    bst = sorted_array_to_bst_recursive([-10, -3, 0, 5, 9])
    assert bst.traverse_depth() == [0, -3, 9, -10, 5]


def test_binary_search_tree_create_from_sorted_recursive_optimized():
    bst = sorted_array_to_bst_recursive_optimized([-10, -3, 0, 5, 9])
    assert bst.traverse_depth() == [0, -3, 9, -10, 5]


if __name__ == '__main__':
    pytest.main(sys.argv)