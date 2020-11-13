from typing import List, Union, TypeVar, Final
from data_structures.trees.binary_tree.python.binary_tree_node import BinaryTreeNode

T = TypeVar("T")


def binary_tree_create_inorder_postorder_simple(inorder: List[T], postorder: List[T]) -> Union[BinaryTreeNode[T], None]:
    """
    Constructs binary tree from inorder and postorder traversals
      3
    9   20
      15  7
    """
    in_order_idx = len(inorder) - 1
    post_order_idx = len(postorder) - 1

    def build(inorder: List[T], postorder: List[T], root: BinaryTreeNode[T] = None) -> Union[BinaryTreeNode[T], None]:
        nonlocal post_order_idx
        nonlocal in_order_idx

        if post_order_idx < 0:
            return None

        node: Final[BinaryTreeNode[T]] = BinaryTreeNode(postorder[post_order_idx])
        post_order_idx -= 1

        if inorder[in_order_idx] != node.val:
            node.right = build(inorder, postorder, node)

        in_order_idx -= 1

        if root is None or inorder[in_order_idx] != root.val:
            node.left = build(inorder, postorder, root)

        return node

    return build(inorder, postorder, None)
