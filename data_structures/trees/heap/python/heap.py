from typing import List, Generic, TypeVar, Callable, Final, Union
import math

T = TypeVar("T")


def default_comparator(a: int, b: int) -> int:
    return a - b


def get_parent_index(i: int) -> int:
    return math.ceil(i / 2 - 1)


def get_left_index(i: int) -> int:
    return 2 * i + 1


def get_right_index(i: int) -> int:
    return 2 * i + 2


class Heap(Generic[T]):
    comparator: Callable[[int, int], int]
    heap: List[T]

    def __init__(self, comparator: Callable[[int, int], int] = default_comparator):
        self.heap = []

        def construct_comparator(i1: int, i2: int) -> int:
            value = comparator(self.heap[i1], self.heap[i2])

            if not isinstance(value, int):
                raise ValueError("Comparator should evaluate to a number")

            return value

        self.comparator = construct_comparator

    def add(self, value: T) -> None:
        self.heap.append(value)
        self.bubble_up()

    def bubble_up(self) -> None:
        index = self.size - 1

        while get_parent_index(index) >= 0 and self.comparator(get_parent_index(index), index) > 0:
            parent_index = get_parent_index(index)
            self.swap(parent_index, index)
            index = parent_index

    def bubble_down(self, index: int = 0) -> None:
        curr = index

        while get_left_index(curr) < self.size and self.comparator(curr, self.get_child(curr)) > 0:
            next_element = self.get_child(curr)
            self.swap(curr, next_element)
            curr = next_element

    def remove(self, index: int = 0) -> Union[T, None]:
        if not self.size:
            return None

        self.swap(index, self.size - 1)
        value: Final = self.heap.pop()
        self.bubble_down(index)

        return value

    def get_child(self, i: int) -> int:
        if get_right_index(i) < self.size and self.comparator(get_left_index(i), get_right_index(i)) > 0:
            return get_right_index(i)

        return get_left_index(i)

    def peek(self) -> T:
        return self.heap[0]

    def swap(self, i1: int, i2: int) -> None:
        self.heap[i1], self.heap[i2] = self.heap[i2], self.heap[i1]

    @property
    def size(self) -> int:
        return len(self.heap)
