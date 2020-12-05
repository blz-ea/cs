from typing import Union

from data_structures.linked_list.python.singly_linked_list import SinglyLinkedList
from data_structures.linked_list.python.singly_linked_list_node import ListNode


def intersection_two_linked_lists(head_a: ListNode, head_b: ListNode) -> Union[ListNode, None]:
    if not head_a or not head_b:
        return None

    a: ListNode = head_a
    b: ListNode = head_b

    while a != b:
        a = a.next if a else head_b
        b = b.next if b else head_a

    return a


def tests():
    """
    >>> l1 = SinglyLinkedList().from_array([0,4,1])
    >>> l2 = SinglyLinkedList().from_array([5,6,1])
    >>> l1l2 = SinglyLinkedList().from_array([3,4,5])
    >>> l1.tail.next = l1l2.head
    >>> l2.tail.next = l1l2.head
    >>> res = intersection_two_linked_lists(l1.head, l2.head)
    >>> assert (res == l1l2.head) is True

    >>> l1 = SinglyLinkedList().from_array([4,1])
    >>> l2 = SinglyLinkedList().from_array([5,6,1])
    >>> l1l2 = SinglyLinkedList().from_array([8,4,5])
    >>> l1.tail.next = l1l2.head
    >>> l2.tail.next = l1l2.head
    >>> res = intersection_two_linked_lists(l1.head, l2.head)
    >>> assert (res == l1l2.head) is True

    >>> l1 = SinglyLinkedList().from_array([4,1,5])
    >>> l2 = SinglyLinkedList().from_array([5,6,1])
    >>> res = intersection_two_linked_lists(l1.head, l2.head)
    >>> assert res is None

    >>> l1 = SinglyLinkedList().from_array([4,1,5,7])
    >>> l2 = SinglyLinkedList().from_array([5,6,1])
    >>> res = intersection_two_linked_lists(l1.head, l2.head)
    >>> assert res is None
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
