from data_structures.linked_list.python.singly_linked_list_node import ListNode


def is_palindrome(head: ListNode) -> bool:
    """
    Checks if given LinkedList is palindrome
    """

    if not head or not head.next:
        return True

    if not head.next.next:
        return False

    stack = head.to_array()

    i = 0
    j = len(stack) - 1

    while i <= j:
        if stack[i] != stack[j]:
            return False
        i += 1
        j -= 1

    return True