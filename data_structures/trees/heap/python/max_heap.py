from typing import TypeVar, Generic
from data_structures.trees.heap.python.heap import Heap

T = TypeVar("T")


def comparator(a: int, b: int) -> int:
    return b - a


class MaxHeap(Generic[T], Heap[T]):
    def __init__(self):
        super().__init__(comparator)
