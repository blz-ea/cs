from data_structures.linked_list.python.singly_linked_list_node import ListNode


def merge_sorted_linked_lists(l1: ListNode, l2: ListNode) -> ListNode:
    """
    Merge two sorted linked lists
    """
    temp = ListNode()
    current = temp

    while l1 and l2:

        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next

        current = current.next

    if l1 is None:
        current.next = l2

    if l2 is None:
        current.next = l1

    return temp.next
