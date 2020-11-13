from data_structures.trees.binary_tree.python.binary_tree_max_depth import binary_tree_max_depth
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs


def test_max_depth():
    tree = binary_tree_create_bfs([3, 9, 20, None, None, 15, 7])
    assert binary_tree_max_depth(tree) == 3


