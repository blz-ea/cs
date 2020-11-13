import pytest
from data_structures.queue.pyhton.queue import Queue


@pytest.fixture(scope='function')
def queue():
    return Queue()


def test_queue(queue):
    assert queue.length == 0


def test_add_to_queue(queue):
    queue.enqueue(1)

    assert queue.length == 1
    assert queue.to_array() == [1]


def test_remove_from_queue(queue):
    queue.enqueue(1).enqueue(2).enqueue(3)

    assert queue.length == 3
    assert queue.dequeue() == 1
    assert queue.length == 2
    assert queue.dequeue() == 2
    assert queue.length == 1
    assert queue.dequeue() == 3
    assert queue.length == 0


def test_get_from_queue(queue):
    queue.enqueue(1).enqueue(2).enqueue(3)
    assert queue.peek() == 1
    assert queue.length == 3
    assert queue.peek() == 1


def test_to_array(queue):
    queue.enqueue(1).enqueue(2).enqueue(3)
    assert queue.to_array() == [3,2,1]


def test_from_array():
    queue = Queue()
    test_data = [1,2,3,4,5]
    queue.from_array(test_data)

    for i in range(len(test_data)):
        q_el = queue.dequeue()
        assert test_data[i] == q_el
