from data_structures.linked_list.python.doubly_linked_list import DoublyLinkedList
from typing import Generic, TypeVar, List

T = TypeVar('T')


class Queue(Generic[T]):
    queue: DoublyLinkedList[T]

    def __init__(self):
        self.queue = DoublyLinkedList()

    @property
    def length(self) -> int:
        return self.queue.length

    def enqueue(self, val: T) -> 'Queue':
        self.queue.unshift(val)
        return self

    def dequeue(self) -> T:
        return self.queue.pop()

    def peek(self) -> T:
        return self.queue.tail.val

    def to_array(self):
        return self.queue.to_array()

    def from_array(self, array: List[T]) -> 'Queue':
        if array and len(array) != 0:
            for el in array:
                self.enqueue(el)

        return self

    @property
    def is_empty(self) -> bool:
        return self.queue.is_empty
