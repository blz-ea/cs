from typing import TypeVar, Generic
from data_structures.trees.heap.python.heap import Heap

T = TypeVar("T")


class MinHeap(Generic[T], Heap[T]):
    def __init__(self):
        super().__init__()
