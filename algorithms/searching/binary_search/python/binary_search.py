from typing import List, TypeVar, Callable, Any, Union


T = TypeVar("T")


def binary_search(arr: List[T], seek_item: T) -> int:
    """
    >>> binary_search([0, 7, 8, 9, 15, 20], 0)
    0

    >>> binary_search([0, 7, 8, 9, 15, 20], 15)
    4

    >>> binary_search([0, 7, 8, 9, 15, 20], 20)
    5
    """
    start_index = 0
    end_index = len(arr) - 1
    middle_index = (start_index + end_index) // 2

    while not arr[middle_index] == seek_item and start_index <= end_index:
        if seek_item <= arr[middle_index]:
            end_index = middle_index - 1
        else:
            start_index = middle_index + 1

        middle_index = (start_index + end_index) // 2

    if arr[middle_index] == seek_item:
        return middle_index

    return -1


def binary_search_recursive(sorted_array: List[T], seek_item: T, left: int = 0, right: Union[int, None] = None) -> int:
    """
    Recursive Binary Search implementation

    >>> binary_search_recursive([0,3,6,9,10,23,27], 3)
    1

    >>> binary_search_recursive([0,3,6,9,10,23,27], 23)
    5

    >>> binary_search_recursive([0,3,6,9,10,23,27], 11)
    -1
    """

    if not right:
        right = len(sorted_array) - 1

    if right < left:
        return -1

    midpoint = left + (right - left) // 2

    if sorted_array[midpoint] == seek_item:
        return midpoint
    elif sorted_array[midpoint] > seek_item:
        return binary_search_recursive(sorted_array, seek_item, left, midpoint - 1)
    else:
        return binary_search_recursive(sorted_array, seek_item, midpoint + 1, right)
