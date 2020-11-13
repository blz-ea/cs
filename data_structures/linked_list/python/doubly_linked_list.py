from typing import Union, TypeVar, Generic, List
from data_structures.linked_list.python.doubly_linked_list_node import DoublyLinkedListNode
from data_structures.linked_list.python.singly_linked_list import SinglyLinkedList

T = TypeVar("T")
ListNodeType = Union[DoublyLinkedListNode[T], None]


class DoublyLinkedList(SinglyLinkedList, Generic[T]):
    head: ListNodeType
    tail: ListNodeType

    def __init__(self):
        super().__init__()
        self.head = None
        self.tail = None
        self.length = 0

    def from_array(self, nodes: List[T]) -> 'DoublyLinkedList':
        node = DoublyLinkedListNode()
        node.from_array(nodes)

        tail = node

        while tail.next:
            tail = tail.next

        self.length = len(nodes)
        self.head = node
        self.tail = tail

        return self

    def pop(self) -> T:
        if self.is_empty:
            return None

        current = self.tail
        new_tail = self.tail.previous

        self.length -= 1
        self.tail = new_tail

        if self.tail:
            self.tail.next = None

        if self.is_empty:
            self.head = None
            self.tail = None

        return current.val

    def unshift(self, value: T, key: int = None) -> 'DoublyLinkedList':
        node = DoublyLinkedListNode(value, key)

        if self.is_empty:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head.previous = node
            self.head = node
        self.length += 1

        return self

    def shift(self) -> T:
        if self.is_empty:
            return None

        current_head = self.head
        self.head = current_head.next

        if self.head:
            self.head.previous = None

        self.length -= 1

        if self.length == 0:
            self.head = None
            self.tail = None

        return current_head.val

    def push(self, val: T, key: int = None) -> 'DoublyLinkedList':
        node = DoublyLinkedListNode(val, key)

        if self.is_empty:
            self.head = node
            self.tail = node
        else:
            node.previous = self.tail
            self.tail.next = node
            self.tail = node

        self.length += 1
        return self

    def delete(self, node: DoublyLinkedListNode) -> None:

        if self.is_empty or not node:
            return None

        if node == self.head:
            return self.shift()

        if node == self.tail:
            return self.pop()

        node.previous.next = node.next
        node.next.previous = node.previous

        self.length -= 1

