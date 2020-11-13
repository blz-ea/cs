import sys
import pytest
from data_structures.trees.binary_search_tree.python.binary_search_tree_create_preorder import binary_search_tree_create_preorder
from data_structures.trees.binary_tree_traverse.python.traverse import traverse_in_order


def test_binary_search_tree_create_preorder():
    test_data = [15,10,8,12,20,16,25]
    tree = binary_search_tree_create_preorder(test_data)
    test_data.sort()
    assert traverse_in_order(tree) == test_data


if __name__ == '__main__':
    pytest.main(sys.argv)
