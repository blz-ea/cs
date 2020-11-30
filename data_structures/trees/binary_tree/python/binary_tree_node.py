from typing import Union, TypeVar, Generic, List
from data_structures.trees.binary_tree_traverse.python.traverse import traverse_in_order, traverse_pre_order, \
    traverse_post_order, traverse_bfs


BinaryTreeNodeType = Union['BinaryTreeNode[T]', None]
T = TypeVar("T")


class BinaryTreeNode(Generic[T]):
    val: T = None
    left: BinaryTreeNodeType = None
    right: BinaryTreeNodeType = None

    def __init__(self, val: T = None, left: BinaryTreeNodeType = None, right: BinaryTreeNodeType = None):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self):
        return f"BinaryTreeNode({self.val})"

    def traverse_in_order(self) -> List[T]:
        return traverse_in_order(self)

    def traverse_pre_order(self) -> List[T]:
        return traverse_pre_order(self)

    def traverse_post_order(self) -> List[T]:
        return traverse_post_order(self)

    def traverse_depth(self) -> List[T]:
        return traverse_bfs(self)
