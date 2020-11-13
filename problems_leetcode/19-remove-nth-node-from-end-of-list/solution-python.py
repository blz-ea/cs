from typing import Union, TypeVar
from data_structures.linked_list.python.singly_linked_list_node import ListNode
T = TypeVar("T")

class Solution:
    """
    >>> node1 = ListNode(1)
    >>> node2 = ListNode(2)
    >>> node3 = ListNode(3)
    >>> node4 = ListNode(4)
    >>> node5 = ListNode(5)
    >>> node1.next = node2
    >>> node2.next = node3
    >>> node3.next = node4
    >>> node4.next = node5
    >>> s = Solution()
    >>> h = s.remove_nth_from_end(node1, 2)
    >>> h == node1
    True
    >>> print(node3.next.val)
    5
    """
    @staticmethod
    def remove_nth_from_end(self, head: ListNode, n: int) -> Union[ListNode,None]:
        if not head:
            return None
        
        fast = head
        slow = head
        
        for i in range(n):
            fast = fast.next

        if fast is None:
            head = head.next
            return head
        
        while fast.next:
            slow = slow.next
            fast = fast.next

        slow.next = slow.next.next
        
        return head


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
