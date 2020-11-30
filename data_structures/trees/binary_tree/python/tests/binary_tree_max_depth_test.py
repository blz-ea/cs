import pytest

from data_structures.trees.binary_tree.python.binary_tree_max_depth import binary_tree_max_depth, \
    binary_tree_max_depth_iterative, binary_tree_max_depth_iterative_bfs
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs


test_data = [
    (binary_tree_create_bfs([3]), 1),
    (binary_tree_create_bfs([3, 9, 20, None, None, 15, 7]), 3)
]


@pytest.mark.parametrize("input_tree, expected", test_data)
def test_max_depth(input_tree, expected):
    assert binary_tree_max_depth(input_tree) == expected


@pytest.mark.parametrize("input_tree, expected", test_data)
def test_max_depth_iterative(input_tree, expected):
    assert binary_tree_max_depth_iterative(input_tree) == expected


@pytest.mark.parametrize("input_tree, expected", test_data)
def test_max_depth_iterative_bfs(input_tree, expected):
    assert binary_tree_max_depth_iterative_bfs(input_tree) == expected

