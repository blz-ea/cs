import pytest
import sys
from typing import Callable, Any
from data_structures.priority_queue.python.priority_queue import PriorityQueue


def test_pq():
    pq = PriorityQueue()
    assert isinstance(pq, PriorityQueue)


def test_pq_enqueue():
    pq = PriorityQueue()
    pq.enqueue(1)
    pq.enqueue(2)
    pq.enqueue(3)

    assert pq.dequeue() == 1
    assert pq.dequeue() == 2
    assert pq.dequeue() == 3


def test_pq_dequeue_in_order():
    pq = PriorityQueue()
    pq.enqueue(2)
    pq.enqueue(1)
    pq.enqueue(3)

    assert pq.dequeue() == 1
    assert pq.dequeue() == 2
    assert pq.dequeue() == 3
    assert pq.dequeue() is None


def test_pq_create_with_values():
    pq = PriorityQueue([7, 1, 2, 3, ])

    assert pq.dequeue() == 1
    assert pq.dequeue() == 2
    assert pq.dequeue() == 3
    assert pq.dequeue() == 7
    assert pq.dequeue() is None


def test_pq_custom_comparator():
    custom_comparator: Callable[[int, int], int] = lambda a, b: b - a
    pq = PriorityQueue(None, custom_comparator)
    pq.add(1)
    pq.add(2)
    pq.add(7)
    pq.add(8)
    pq.add(3)

    assert pq.dequeue() == 8
    assert pq.dequeue() == 7
    assert pq.dequeue() == 3
    assert pq.dequeue() == 2
    assert pq.dequeue() == 1


def test_pq_custom_data_structure():
    custom_comparator: Callable[[Any,Any], int] = lambda a, b: a[0] - b[0]
    data = [
        [1, "test0"],
        [50, "test1"],
        [101, "test2"],
    ]

    pq = PriorityQueue(data, custom_comparator)
    assert pq.dequeue() == [1, "test0"]
    assert pq.dequeue() == [50, "test1"]
    assert pq.dequeue() == [101, "test2"]


if __name__ == '__main__':
    pytest.main(sys.argv)
