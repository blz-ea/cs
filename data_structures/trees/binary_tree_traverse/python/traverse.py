from typing import List, TypeVar, TYPE_CHECKING, Union
from data_structures.queue.pyhton.queue import Queue
from data_structures.stack.pyhton.stack import Stack

if TYPE_CHECKING:
    from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode

T = TypeVar('T')


def traverse_in_order(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = []

    if not root:
        return result

    if root.left:
        result = result + traverse_in_order(root.left)

    result.append(root.val)

    if root.right:
        result = result + traverse_in_order(root.right)

    return result


def traverse_in_order_stack(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = []

    if not root:
        return result

    stack = Stack['BinaryTreeNode[T]']()

    while root or not stack.is_empty:
        while root:
            stack.push(root)
            root = root.left

        root = stack.pop()
        result.append(root.val)

        root: 'BinaryTreeNode[T]' = root.right

    return result


def traverse_post_order(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = []

    if not root:
        return result

    if root.left:
        result = result + traverse_post_order(root.left)

    if root.right:
        result = result + traverse_post_order(root.right)

    result.append(root.val)

    return result


def traverse_post_order_stack(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = []

    if not root:
        return result

    stack = Stack['BinaryTreeNode[T]']()

    stack.push(root)
    prev: Union[None, 'BinaryTreeNode[T]'] = None

    while not stack.is_empty:
        current: 'BinaryTreeNode[T]' = stack.peek()

        if prev is None or prev.left == current or prev.right == current:
            if current.left is not None:
                stack.push(current.left)
            elif current.right is not None:
                stack.push(current.right)
            else:
                stack.pop()
                result.append(current.val)
        elif current.left == prev:
            if current.left is not None:
                stack.push(current.right)
            else:
                stack.pop()
                result.append(current.val)
        elif current.right == prev:
            stack.pop()
            result.append(current.val)

        prev = current

    return result


def traverse_pre_order(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = [root.val]

    if not root:
        return result

    if root.left:
        result = result + traverse_pre_order(root.left)

    if root.right:
        result = result + traverse_pre_order(root.right)

    return result


def traverse_pre_order_stack(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = []

    if not root:
        return result

    stack: Stack['BinaryTreeNode[T]'] = Stack()
    stack.push(root)

    while not stack.is_empty:
        node: 'BinaryTreeNode[T]' = stack.pop()
        result.append(node.val)

        if node.right:
            stack.push(node.right)

        if node.left:
            stack.push(node.left)

    return result


def traverse_bfs(root: 'BinaryTreeNode[T]') -> List[T]:
    result: List[T] = []
    queue: Queue['BinaryTreeNode[T]'] = Queue()

    queue.enqueue(root)

    while not queue.is_empty:
        queue_node: 'BinaryTreeNode[T]' = queue.dequeue()

        result.append(queue_node.val)

        if queue_node.left:
            queue.enqueue(queue_node.left)

        if queue_node.right:
            queue.enqueue(queue_node.right)

    return result
