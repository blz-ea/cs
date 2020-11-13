from typing import Generic, TypeVar, List, Union
from data_structures.trees.binary_search_tree.python.binary_search_tree_node import BinarySearchTreeNode, \
    BinarySearchTreeNodeType
from data_structures.trees.binary_tree_traverse.python.traverse import traverse_pre_order, traverse_in_order, traverse_post_order, traverse_bfs

T = TypeVar('T')


class BinarySearchTree(Generic[T]):
    root: BinarySearchTreeNode[T]

    def __init__(self):
        self.root = BinarySearchTreeNode[T]()

    def insert(self, *args: T) -> 'BinarySearchTree':
        for val in args:
            self.insert_node(val)

        return self

    def insert_node(self, value: T) -> 'BinarySearchTree':
        node = BinarySearchTreeNode(value)

        if self.is_empty:
            self.root = node
            return self

        current = self.root

        while current:
            if current and value < current.val:
                if current.left:
                    current = current.left
                else:
                    current.left = node
                    break
            else:
                if current.right:
                    current = current.right
                else:
                    current.right = node
                    break

        node.parent = current
        return self

    def search(self, value: T) -> BinarySearchTreeNodeType:
        if self.is_empty:
            return None

        node = self.root

        while node and node.val != value:
            if value < node.val:
                node = node.left
            else:
                node = node.right

        return node

    def get_max(self, node: BinarySearchTreeNode[T] = None)-> Union[BinarySearchTreeNode[T], None]:
        if self.is_empty:
            return None

        if not node:
            node = self.root

        while node.right:
            node = node.right

        return node

    def get_min(self, node: BinarySearchTreeNode[T] = None) -> Union[BinarySearchTreeNode[T], None]:
        if self.is_empty:
            return None

        if not node:
            node = self.root

        while node.left:
            node = node.left

        return node

    def remove(self, value: T) -> bool:
        if self.is_empty:
            return False

        node = self.search(value)

        if node:
            if not node.left and not node.right:
                self.reassign_nodes(node, None)
            elif not node.left:
                self.reassign_nodes(node, node.right)
            elif not node.right:
                self.reassign_nodes(node, node.left)
            else:
                temp = self.get_max(node.left)
                self.remove(temp.val)
                node.val = temp.val
            return True

        return False

    def reassign_nodes(self, node: BinarySearchTreeNode[T], children: Union[BinarySearchTreeNode[T], None]) -> None:
        if children:
            children.parent = node.parent

        if node.parent:
            if node == node.parent.right:
                node.parent.right = children
            else:
                node.parent.left = children
        else:
            self.root = children

    def traverse_pre_order(self) -> List[T]:
        return traverse_pre_order(self.root)

    def traverse_in_order(self) -> List[T]:
        return traverse_in_order(self.root)

    def traverse_post_order(self) -> List[T]:
        return traverse_post_order(self.root)

    def traverse_depth(self) -> List[T]:
        return traverse_bfs(self.root)

    @property
    def is_empty(self) -> bool:
        return not self.root or not self.root.val
