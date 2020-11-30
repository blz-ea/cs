from typing import TypeVar, List, Tuple
from data_structures.linked_list.python.singly_linked_list import SinglyLinkedList as LinkedList
from data_structures.linked_list.python.singly_linked_list_node import ListNode
from data_structures.stack.pyhton.stack import Stack
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.trees.binary_tree.python.binary_tree_create_bfs import binary_tree_create_bfs

T = TypeVar('T')


def binary_tree_level_order_traversal_bottom_recursive(root: BinaryTreeNode[T]) -> List[List[T]]:
    """
    >>> tree = binary_tree_create_bfs([3, 9, 20, None, None, 15, 7])
    >>> binary_tree_level_order_traversal_bottom_recursive(tree)
    [[15, 7], [9, 20], [3]]
    """
    result: LinkedList[List[T]] = LinkedList()
    binary_tree_level_order_traversal_bottom_recursive_dfs(root, 0, result)

    return result.to_array()


def binary_tree_level_order_traversal_bottom_recursive_dfs(root: BinaryTreeNode[T], level: int, result: LinkedList[List[T]]) -> List[List[T]]:
    if root:
        if level == result.length:
            result.unshift([], level)

        ll_node: ListNode[List[T]] = result.find(level)

        if ll_node:
            ll_node.val.append(root.val)

        binary_tree_level_order_traversal_bottom_recursive_dfs(root.left, level + 1, result)
        binary_tree_level_order_traversal_bottom_recursive_dfs(root.right, level + 1, result)


def binary_tree_level_order_traversal_bottom_stack(root: BinaryTreeNode[T]) -> List[List[T]]:
    """
    >>> tree = binary_tree_create_bfs([3, 9, 20, None, None, 15, 7])
    >>> binary_tree_level_order_traversal_bottom_stack(tree)
    [[15, 7], [9, 20], [3]]
    """
    result: LinkedList[List[T]] = LinkedList()
    stack: Stack[Tuple[BinaryTreeNode[T], int]] = Stack()
    stack.push((root, 0))

    while not stack.is_empty:
        popped: Tuple[BinaryTreeNode[T], int] = stack.pop()
        node, level = popped

        if level == result.length:
            result.unshift([], level)

        ll_node: ListNode[List[T]] = result.find(level)

        if ll_node:
            ll_node.val.append(node.val)

        if node.right:
            stack.push((node.right, level + 1))

        if node.left:
            stack.push((node.left, level + 1))

    return result.to_array()


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
