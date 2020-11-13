import pytest
import sys
from data_structures.trees.binary_search_tree.python.binary_search_tree_create_balanced import \
    create_balanced_binary_search_tree
from data_structures.trees.binary_tree_traverse.python.traverse import traverse_in_order


def test_create_balanced_binary_search_tree():
    test_data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    bst = create_balanced_binary_search_tree(test_data)
    assert traverse_in_order(bst) == test_data


if __name__ == '__main__':
    pytest.main(sys.argv)
