from typing import Union, TypeVar, Generic, List
from data_structures.linked_list.python.singly_linked_list_node import ListNode


T = TypeVar("T")
ListNodeType = Union[ListNode[T], None]


class SinglyLinkedList(Generic[T]):
    length: int
    head: ListNodeType
    tail: ListNodeType

    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    @property
    def is_empty(self) -> bool:
        if self.length == 0:
            return True

        return False

    def from_array(self, nodes: List[T]) -> 'SinglyLinkedList':
        node = ListNode()
        node.from_array(nodes)

        tail = node

        while tail.next:
            tail = tail.next

        self.length = len(nodes)
        self.head = node
        self.tail = tail

        return self

    def to_array(self, to_string=False) -> List[T]:
        if self.is_empty:
            return []

        return self.head.to_array(to_string)

    def pop(self) -> T:
        if self.is_empty:
            return None

        current = self.head
        new_tail = None

        while current.next:
            new_tail = current
            current = current.next

        self.length -= 1
        self.tail = new_tail

        if self.tail:
            self.tail.next = None

        if self.is_empty:
            self.head = None
            self.tail = None

        return current.val

    def unshift(self, value: T, key: int = None) -> 'SinglyLinkedList':
        node = ListNode(val=value, key=key)

        if self.is_empty:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head = node

        self.length += 1

        return self

    def shift(self) -> T:
        if self.is_empty:
            return None

        current_head = self.head
        self.head = current_head.next

        self.length -= 1

        if self.length == 0:
            self.head = None
            self.tail = None

        return current_head.val

    def push(self, val: T, key: int = None) -> 'SinglyLinkedList':
        node = ListNode(key=key, val=val)

        if self.is_empty:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

        self.length += 1
        return self

    def find(self, key: int) -> Union[T, None]:
        if self.is_empty:
            return None

        current = self.head

        while current.key != key:
            if current.next:
                current = current.next
            else:
                return None

        return current

    def __repr__(self):
        result = self.to_array(to_string=True)
        result = " -> ".join(result)
        return f"LinkedList({result})"
