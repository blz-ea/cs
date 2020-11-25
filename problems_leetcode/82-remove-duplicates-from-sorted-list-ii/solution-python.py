from data_structures.linked_list.python.singly_linked_list_node import ListNode


def remove_duplicates_from_sorted_linked_list(head: ListNode[int]) -> ListNode[int]:
    dummy = ListNode(0)
    dummy.next = head

    pre = dummy
    cur = head

    while cur:
        if cur.next and cur.val == cur.next.val:
            while cur and cur.next and cur.val == cur.next.val:
                cur = cur.next
            pre.next = cur.next
        else:
            pre = pre.next

        cur = cur.next

    return dummy.next


def tests():
    """
    >>> ll_in = ListNode().from_array([1, 2, 3, 3, 4, 4, 5])
    >>> out = remove_duplicates_from_sorted_linked_list(ll_in)
    >>> assert out.to_array() == [1, 2, 5]

    >>> ll_in = ListNode().from_array([1, 1, 1, 2, 3])
    >>> out = remove_duplicates_from_sorted_linked_list(ll_in)
    >>> assert out.to_array() == [2, 3]
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
