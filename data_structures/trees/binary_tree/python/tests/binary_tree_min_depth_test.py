import pytest

from data_structures.trees.binary_tree.python.binary_tree_min_depth import binary_tree_min_depth_recursive, \
    binary_tree_min_depth_iterative_bfs
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs


test_data = [
    (binary_tree_create_bfs([3]), 1),
    (binary_tree_create_bfs([3, 9, 20, None, None, 15, 7]), 2),
    (binary_tree_create_bfs([2, None, 3, None, 4, None, 5, None, 6]), 5)
]


@pytest.mark.parametrize("input_tree,expected", test_data)
def test_min_depth_recursive(input_tree, expected):
    assert binary_tree_min_depth_recursive(input_tree) == expected


@pytest.mark.parametrize("input_tree,expected", test_data)
def test_min_depth_iterative_bfs(input_tree, expected):
    assert binary_tree_min_depth_iterative_bfs(input_tree) == expected


@pytest.mark.parametrize("input_tree,expected",test_data)
def test_min_depth_iterative_bfs(input_tree, expected):
    assert binary_tree_min_depth_iterative_bfs(input_tree) == expected
