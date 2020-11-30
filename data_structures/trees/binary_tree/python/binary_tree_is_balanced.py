from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.stack.pyhton.stack import Stack


def is_balanced(root: BinaryTreeNode) -> bool:
    if root is None:
        return True

    return helper(root) != -1


def helper(root: BinaryTreeNode) -> int:
    if root is None:
        return 0

    left = helper(root.left)
    right = helper(root.right)

    if left == -1 or right == -1 or abs(left - right) > 1:
        return -1

    return max(left, right) + 1


def is_balanced_iterative(root: BinaryTreeNode) -> bool:
    stack, node, last, depths = Stack(), root, None, {}

    while not stack.is_empty or node:
        if node:
            stack.push(node)
            node = node.left
        else:
            node = stack.peek()
            if not node.right or node.right == last:
                node = stack.pop()
                left, right = depths.get(node.left, 0), depths.get(node.right, 0)

                if abs(left - right) > 1:
                    return False

                depths[node] = 1 + max(left, right)
                last = node
                node = None
            else:
                node = node.right
    return True
