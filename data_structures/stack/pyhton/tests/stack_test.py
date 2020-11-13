import pytest
from data_structures.stack.pyhton.stack import Stack


@pytest.fixture
def stack() -> Stack:
    return Stack()


def test_stack(stack: Stack):
    assert isinstance(stack, Stack) is True
    assert stack.length == 0


def test_push(stack: Stack):
    stack.push(1).push(2)
    assert stack.length == 2
    assert stack.to_array() == [2,1]


def test_pop(stack: Stack):
    stack.push(1).push(2).push(3)

    assert stack.length == 3
    assert stack.pop() == 3
    assert stack.length == 2
    assert stack.pop() == 2
    assert stack.length == 1
    assert stack.pop() == 1
    assert stack.length == 0
    assert stack.pop() is None
    assert stack.length == 0


def test_multi_push(stack: Stack):
    stack.push(1).push(2).push(3)
    assert stack.length == 3


def test_from_array():
    test_data = [1,2,3,4,5]
    stack = Stack().from_array(test_data)

    for i in range(len(test_data))[::-1]:
        assert test_data[i] == stack.pop()
