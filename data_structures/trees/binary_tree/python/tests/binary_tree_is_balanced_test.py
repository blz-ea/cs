import sys
import pytest
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs
from data_structures.trees.binary_tree.python.binary_tree_is_balanced import is_balanced, is_balanced_iterative


test_tree_balanced = binary_tree_create_bfs([3, 9, 20, None, None, 15, 7])
test_tree_unbalanced = binary_tree_create_bfs([1, 2, 2, 3, 3, None, None, 4, 4])


def test_is_balanced():
    assert is_balanced(test_tree_balanced) is True
    assert is_balanced(test_tree_unbalanced) is False


def test_is_balanced_iterative():
    assert is_balanced_iterative(test_tree_balanced) is True
    assert is_balanced_iterative(test_tree_unbalanced) is False


if __name__ == '__main__':
    pytest.main(sys.argv)