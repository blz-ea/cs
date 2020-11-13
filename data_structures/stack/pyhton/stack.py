from data_structures.linked_list.python.singly_linked_list import SinglyLinkedList
from typing import Generic, TypeVar, List

T = TypeVar('T')


class Stack(Generic[T]):
    stack: SinglyLinkedList[T]

    def __init__(self):
        self.stack = SinglyLinkedList[T]()

    def pop(self) -> T:
        return self.stack.shift()

    def push(self, value: T) -> 'Stack':
        self.stack.unshift(value)
        return self

    def peek(self) -> T:
        return self.stack.head.val

    def to_array(self) -> List[T]:
        return self.stack.to_array()

    def from_array(self, values: List[T]) -> 'Stack':
        if not values or len(values) == 0:
            return self

        for value in values:
            self.push(value)

        return self

    @property
    def length(self):
        return self.stack.length

    @property
    def is_empty(self):
        return self.stack.is_empty
