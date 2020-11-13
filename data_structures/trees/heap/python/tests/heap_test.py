import pytest
import sys
from data_structures.trees.heap.python.heap import Heap


@pytest.fixture
def heap() -> Heap[int]:
    return Heap[int]()


def test_heap(heap: Heap[int]):
    assert isinstance(heap, Heap) is True
    assert heap.size == 0


def test_add(heap: Heap[int]):
    assert heap.add(1) is None
    assert heap.heap == [1]
    assert heap.size == 1


def test_order(heap: Heap[int]):
    heap.add(3)
    assert heap.peek() == 3

    heap.add(2)
    assert heap.peek() == 2

    heap.add(0)
    assert heap.peek() == 0

    heap.add(1)
    assert heap.peek() == 0

    assert heap.size == 4


def test_remove(heap: Heap[int]):
    heap.add(1)
    heap.add(0)
    heap.add(2)

    assert heap.remove() == 0
    assert heap.size == 2

    assert heap.remove() == 1
    assert heap.size == 1

    assert heap.remove() == 2
    assert heap.size == 0


if __name__ == '__main__':
    pytest.main(sys.argv)