from data_structures.linked_list.python.singly_linked_list_node import ListNode
from data_structures.linked_list.python.is_palindrome import is_palindrome


def test_is_palindrome():
    nodes = ListNode().from_array([1, 2, 2, 1])
    assert is_palindrome(nodes) is True

    nodes = ListNode().from_array([1, 2])
    assert is_palindrome(nodes) is False

    nodes = ListNode().from_array([1])
    assert is_palindrome(nodes) is True
