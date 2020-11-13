from data_structures.linked_list.python.singly_linked_list_node import ListNode


def add_to_numbers(l1: ListNode[int], l2: ListNode[int]) -> ListNode[int]:
    result = ListNode(0)
    carry = 0
    ref = result

    while l1 or l2 or carry != 0:
        if l1:
            carry += l1.val
            l1 = l1.next

        if l2:
            carry += l2.val
            l2 = l2.next

        ref.next = ListNode(carry % 10)
        carry //= 10
        ref = ref.next

    return result.next


def test():
    """
    >>> l1 = ListNode().from_array([2,4,3])
    >>> l2 = ListNode().from_array([5,6,4])
    >>> ll_sum = add_to_numbers(l1, l2)
    >>> isinstance(ll_sum, ListNode)
    True
    >>> ll_sum.to_array()
    [7, 0, 8]

    >>> l1 = ListNode().from_array([0])
    >>> l2 = ListNode().from_array([0])
    >>> ll_sum = add_to_numbers(l1, l2)
    >>> isinstance(ll_sum, ListNode)
    True
    >>> ll_sum.to_array()
    [0]

    >>> l1 = ListNode().from_array([9, 9, 9, 9, 9, 9, 9])
    >>> l2 = ListNode().from_array([9, 9, 9, 9])
    >>> ll_sum = add_to_numbers(l1, l2)
    >>> isinstance(ll_sum, ListNode)
    True
    >>> ll_sum.to_array()
    [8, 9, 9, 9, 0, 0, 0, 1]
    """


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)