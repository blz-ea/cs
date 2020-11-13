from typing import List, Union
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode
from data_structures.queue.pyhton.queue import Queue
from data_structures.stack.pyhton.stack import Stack
from data_structures.hash_table.python.hash_table import HashTable


def binary_tree_create_preorder_inorder_iterative_no_hash_table(preorder: List[int], inorder: List[int]) -> Union[None, BinaryTreeNode]:
    if len(preorder) == 0:
        return None

    i = 0
    j = 0
    pp = None
    ptr = None

    stack: Stack[BinaryTreeNode[int]] = Stack()
    root = BinaryTreeNode()
    stack.push(root)

    while j < len(inorder):
        if stack.peek().val == inorder[j]:
            pp = stack.peek()
            stack.pop()
            j += 1
        elif pp:
            ptr = BinaryTreeNode(preorder[i])
            pp.right = ptr
            pp = None
            stack.push(ptr)
            i += 1
        else:
            ptr = BinaryTreeNode(preorder[i])
            stack.peek().left = ptr
            stack.push(ptr)
            i += 1
    ptr = root.left
    del root

    return ptr


def binary_tree_create_preorder_inorder_iterative(preorder: List[int], inorder: List[int]) -> Union[None, BinaryTreeNode]:
    if len(preorder) == 0:
        return None

    hash_table: HashTable[int] = HashTable()
    for i, num in enumerate(inorder):
        hash_table.put(num, i)

    # initialize stack of tree nodes
    stack: Stack[BinaryTreeNode[int]] = Stack()
    root = BinaryTreeNode(preorder[0])
    stack.push(root)

    # for all remaining values
    for i in range(1, len(preorder)):
        node = BinaryTreeNode(preorder[i])
        if hash_table.get(node.val) < hash_table.get(stack.peek().val):
            # the new node is on the left of the last node
            # so it must be its left child (that's the way preorder works)
            stack.peek().left = node
        else:
            # the new node is on the right of the last node
            # so it must be the right child of either the last node
            # or one of the last node's ancestors
            # pop the stack until we either run out of ancestors
            # or the node at the top of the stack is to the right of the new node
            parent = None
            while not stack.is_empty and hash_table.get(node.val) > hash_table.get(stack.peek().val):
                parent = stack.pop()
            parent.right = node
        stack.push(node)

    return root


def binary_tree_create_preorder_inorder(preorder: List[int], inorder: List[int]) -> 'BinaryTreeNode':
    """
    Constructs binary tree from preorder and inorder traversals - optimized solution
      3
    9   20
      15  7
    :param preorder: List[int]
    :param inorder: List[int]
    :return:
    """
    queue = Queue().from_array(preorder)
    hash_table = HashTable()

    for i, num in enumerate(inorder):
        hash_table.put(num, i)

    def helper(start, end):
        if start > end:
            return None

        node = queue.dequeue()
        root_index = hash_table.get(node)

        root = BinaryTreeNode(inorder[root_index])
        root.left = helper(start, root_index - 1)
        root.right = helper(root_index + 1, end)

        return root

    return helper(0, len(inorder) - 1)


def binary_tree_create_preorder_inorder_simple(preorder: List[int], inorder: List[int]) -> 'BinaryTreeNode':
    if inorder:
        index = inorder.index(preorder.pop(0))
        root = BinaryTreeNode(inorder[index])
        root.left = binary_tree_create_preorder_inorder_simple(preorder, inorder[0:index])
        root.right = binary_tree_create_preorder_inorder_simple(preorder, inorder[index + 1:])
        return root
