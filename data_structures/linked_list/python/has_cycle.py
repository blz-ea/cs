from data_structures.linked_list.python.singly_linked_list_node import ListNode


def has_cycle(head: ListNode) -> bool:
    """
    Checks if given LinkedList has cycle
    """
    if not head:
        return False

    if not head.next:
        return False

    if head == head.next:
        return True

    slow = head
    fast = head

    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next

        if fast == slow:
            return True

    return False
