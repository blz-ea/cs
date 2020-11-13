from typing import Union, List, TypeVar, Generic
from data_structures.linked_list.python.singly_linked_list_node import ListNode

T = TypeVar("T")


class DoublyLinkedListNode(ListNode, Generic[T]):
    next: Union[None, 'DoublyLinkedListNode'] = None
    previous: Union[None, 'DoublyLinkedListNode'] = None

    def __init__(self, val: T = None, key: int = None):
        super().__init__(val, key)

    def from_array(self, vals: List[T]) -> 'DoublyLinkedListNode[T]':
        """
        Create a singly linked list from array
        """
        counter = 0

        if len(vals) <= counter:
            pass

        if self.val is None:
            self.val = vals[0]
            counter += 1

        current = self

        for i in range(counter, len(vals)):
            node = DoublyLinkedListNode(vals[i])
            node.previous = current
            current.next = node
            current = node

        return self

    def reverse(self) -> 'DoublyLinkedListNode[T]':
        """
        Reverse doubly linked list
        """
        current_node = self
        prev_node = None

        while current_node:
            temp = current_node.next
            current_node.next = current_node.previous
            current_node.previous = temp

            prev_node = current_node
            current_node = current_node.previous

        return prev_node
