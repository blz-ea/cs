from data_structures.linked_list.python.singly_linked_list_node import ListNode


def remove_duplicates_from_sorted_linked_list(head: ListNode[int]) -> ListNode[int]:

    if not head or not head.next:
        return head

    temp = head

    while temp.next is not None:
        if temp.val == temp.next.val:
            temp.next = temp.next.next
        else:
            temp = temp.next

    return head


def tests():
    """
    >>> ll_in = ListNode().from_array([1, 1, 2])
    >>> ll_out = ListNode().from_array([1, 2])
    >>> out = remove_duplicates_from_sorted_linked_list(ll_in)
    >>> assert out.to_array() == ll_out.to_array()
    >>> assert out.to_array() == ll_in.to_array()

    >>> ll_in = ListNode().from_array([1, 1, 2, 3, 3])
    >>> ll_out = ListNode().from_array([1, 2, 3])
    >>> out = remove_duplicates_from_sorted_linked_list(ll_in)
    >>> assert out.to_array() == ll_out.to_array()
    >>> assert out.to_array() == ll_in.to_array()
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
