from data_structures.linked_list.python.singly_linked_list_node import ListNode
from data_structures.linked_list.python.has_cycle import has_cycle


def test_has_cycle():
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node5 = ListNode(5)

    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node1
    assert has_cycle(node1) is True

    node1 = ListNode(1)
    node2 = ListNode(2)

    node1.next = node2
    node2.next = node1
    assert has_cycle(node1) is True

    node = ListNode().from_array([1])
    assert has_cycle(node) is False
