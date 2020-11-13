from typing import List, Generic, TypeVar

T = TypeVar('T')


def swap(arr: List, x: int, y: int) -> None:
    arr[x], arr[y] = arr[y], arr[x]


def partition_lomuto(arr: List[T], left: int, right: int) -> int:
    pivot = right
    i = left
    j = left

    while j < right:
        if arr[j] <= arr[pivot]:
            swap(arr, i, j)
            i = i + 1
        j += 1

    swap(arr, i, right)
    return i


def partition_hoare(arr: List[T], left: int, right: int) -> int:
    pivot = arr[left]
    i = left
    j = right

    while True:
        while arr[i] < pivot:
            i += 1

        while arr[j] > pivot:
            j -= 1

        if i >= j:
            return j

        swap(arr, i, j)
        i += 1
        j -= 1


def quick_sort(arr: List[T], left: int = 0, right: int = None) -> List[T]:
    """
    >>> arr = [4, 2, 3, 2, 5, 3, 1]
    >>> quick_sort(arr)
    [1, 2, 2, 3, 3, 4, 5]
    >>> print(arr)
    [1, 2, 2, 3, 3, 4, 5]
    >>> arr = [5, 2, 6, 7, 8, 1, 2, 2, 3, 9]
    >>> quick_sort(arr)
    [1, 2, 2, 2, 3, 5, 6, 7, 8, 9]
    >>> print(arr)
    [1, 2, 2, 2, 3, 5, 6, 7, 8, 9]
    """
    if right is None:
        right = len(arr) - 1

    pivot = partition_lomuto(arr, left, right)

    if left < pivot - 1:
        quick_sort(arr, left, pivot - 1)

    if right > pivot:
        quick_sort(arr, pivot, right)

    return arr


def quick_sort_v2(arr: List[T], left: int = 0, right: int = None) -> List[T]:
    """
    >>> arr = [4, 2, 3, 2, 5, 3, 1]
    >>> quick_sort_v2(arr)
    [1, 2, 2, 3, 3, 4, 5]
    >>> print(arr)
    [1, 2, 2, 3, 3, 4, 5]
    >>> arr = [5, 2, 6, 7, 8, 1, 2, 2, 3, 9]
    >>> quick_sort_v2(arr)
    [1, 2, 2, 2, 3, 5, 6, 7, 8, 9]
    >>> print(arr)
    [1, 2, 2, 2, 3, 5, 6, 7, 8, 9]
    """
    if right is None:
        right = len(arr) - 1

    if left < right:
        pivot = partition_hoare(arr, left, right)
        quick_sort_v2(arr, left, pivot)
        quick_sort_v2(arr, pivot + 1, right)

    return arr


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)