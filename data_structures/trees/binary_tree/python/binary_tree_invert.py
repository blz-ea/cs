from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.stack.pyhton.stack import Stack
from data_structures.queue.pyhton.queue import Queue


def invert_binary_tree_dfs(root: BinaryTreeNode) -> BinaryTreeNode:
    if root:
        root.left, root.right = invert_binary_tree_dfs(root.right), invert_binary_tree_dfs(root.left)
        return root


def invert_binary_tree_dfs_stack(root: BinaryTreeNode) -> BinaryTreeNode:
    stack: Stack[BinaryTreeNode] = Stack()
    stack.push(root)

    while not stack.is_empty:
        node = stack.pop()
        if node:
            node.left, node.right = node.right, node.left
            stack.push(node.left)
            stack.push(node.right)

    return root


def invert_binary_tree_bfs(root: BinaryTreeNode) -> BinaryTreeNode:
    queue: Queue[BinaryTreeNode] = Queue()
    queue.enqueue(root)

    while not queue.is_empty:
        node = queue.dequeue()
        if node:
            node.left, node.right = node.right, node.left
            queue.enqueue(node.left)
            queue.enqueue(node.right)

        return root
