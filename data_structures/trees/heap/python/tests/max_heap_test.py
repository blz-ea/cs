import pytest
import sys
from data_structures.trees.heap.python.max_heap import MaxHeap


@pytest.fixture
def heap() -> MaxHeap[int]:
    return MaxHeap[int]()


def test_heap(heap: MaxHeap[int]):
    assert isinstance(heap, MaxHeap) is True
    assert heap.size == 0


def test_add(heap: MaxHeap[int]):
    assert heap.add(1) is None
    assert heap.heap == [1]
    assert heap.size == 1


def test_order(heap: MaxHeap[int]):
    heap.add(0)
    assert heap.peek() == 0

    heap.add(1)
    assert heap.peek() == 1

    heap.add(3)
    assert heap.peek() == 3

    heap.add(2)
    assert heap.peek() == 3

    heap.add(5)
    assert heap.peek() == 5

    assert heap.size == 5


def test_remove(heap: MaxHeap[int]):
    heap.add(1)
    heap.add(0)
    heap.add(2)

    assert heap.remove() == 2
    assert heap.size == 2

    assert heap.remove() == 1
    assert heap.size == 1

    assert heap.remove() == 0
    assert heap.size == 0


if __name__ == '__main__':
    pytest.main(sys.argv)