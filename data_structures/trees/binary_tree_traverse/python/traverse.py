from data_structures.queue.pyhton.queue import Queue
from typing import List, TypeVar

T = TypeVar('T')


def traverse_in_order(root) -> List[T]:
    result: List[T] = []

    if not root:
        return result

    if root.left:
        result = result + traverse_in_order(root.left)

    result.append(root.val)

    if root.right:
        result = result + traverse_in_order(root.right)

    return result


def traverse_post_order(root) -> List[T]:
    result: List[T] = []

    if not root:
        return result

    if root.left:
        result = result + traverse_post_order(root.left)

    if root.right:
        result = result + traverse_post_order(root.right)

    result.append(root.val)

    return result


def traverse_pre_order(root) -> List[T]:
    result: List[T] = [root.val]

    if not root:
        return result

    if root.left:
        result = result + traverse_pre_order(root.left)

    if root.right:
        result = result + traverse_pre_order(root.right)

    return result


def traverse_bfs(root) -> List[T]:
    current_node: T
    result: List[T] = []
    queue: Queue[T] = Queue[T]()

    queue.enqueue(root)

    while not queue.is_empty:
        queue_node = queue.dequeue()

        if not queue_node:
            return result

        current_node = queue_node

        if current_node.val:
            result.append(current_node.val)

        if current_node.left:
            queue.enqueue(current_node.left)

        if current_node.right:
            queue.enqueue(current_node.right)

    return result
