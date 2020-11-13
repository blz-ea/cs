from typing import Generic, TypeVar, Union

T = TypeVar('T')
BinarySearchTreeNodeType = Union['BinarySearchTreeNode[T]', None]


class BinarySearchTreeNode(Generic[T]):
    left: BinarySearchTreeNodeType = None
    right: BinarySearchTreeNodeType = None
    parent: BinarySearchTreeNodeType = None
    val: T = None

    def __init__(self, val: Union[T, None] = None, parent: BinarySearchTreeNodeType = None):
        self.val = val
        self.parent = parent
