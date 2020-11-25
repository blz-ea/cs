from typing import TypeVar, Tuple
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.stack.pyhton.stack import Stack

T = TypeVar('T')


def binary_tree_is_same_recursive(p: BinaryTreeNode[T], q: BinaryTreeNode[T]) -> bool:
    if p and q:
        left = binary_tree_is_same_recursive(p.left, q.left)
        right = binary_tree_is_same_recursive(p.right, q.right)

        return p.val == q.val and left and right
    else:
        return p == q


def binary_tree_is_same_stack(p: BinaryTreeNode[T], q: BinaryTreeNode[T]) -> bool:
    StackType = Tuple[BinaryTreeNode[T], BinaryTreeNode[T]]
    stack = Stack[StackType]()
    stack.push([p, q])

    while not stack.is_empty:
        popped: StackType = stack.pop()
        n1, n2 = popped

        if n1 and n2 and n1.val == n2.val:
            stack.push((n1.right, n2.right))
            stack.push((n1.left, n2.left))
        elif not n1 and not n2:
            continue
        else:
            return False

    return True

