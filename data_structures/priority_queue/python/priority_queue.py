from typing import List, TypeVar, Generic, Callable, Any, Union
from data_structures.trees.heap.python.heap import Heap, default_comparator


T = TypeVar("T")


class PriorityQueue(Heap[T]):
    def __init__(self, iterable : Union[List, None] = None, comparator: Callable[[Any, Any], int] = default_comparator):
        super().__init__(comparator)

        if iterable is not None:
            for val in iterable:
                self.add(val)

    def enqueue(self,value: T) -> None:
        return self.add(value)

    def dequeue(self) -> T:
        return self.remove()