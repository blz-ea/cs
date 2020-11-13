from data_structures.linked_list.python.singly_linked_list_node import ListNode
from data_structures.linked_list.python.merge_sorted_linked_lists import merge_sorted_linked_lists


def test_merge_sorted_linked_lists():
    nodes1 = ListNode().from_array([1, 2, 3, 4, 5])
    nodes2 = ListNode().from_array([1, 2, 3, 4, 5])
    merged = merge_sorted_linked_lists(nodes1, nodes2)

    assert merged.to_array() == [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]

    nodes1 = ListNode().from_array([1, 2, 3, 4, 5, 6, 7])
    nodes2 = ListNode().from_array([1, 2, 3])
    merged = merge_sorted_linked_lists(nodes1, nodes2)

    assert merged.to_array() == [1, 1, 2, 2, 3, 3, 4, 5, 6, 7]

