from typing import List, TypeVar

T = TypeVar('T')


def bubble_sort(arr: List[T]) -> None:
    """
    >>> arr = [3,2,1,4,5]
    >>> bubble_sort(arr)
    >>> print(arr)
    [1, 2, 3, 4, 5]
    """
    n = len(arr) - 1
    for i in range(n):
        swapped = False
        for j in range(n - i):
            if arr[j] > arr[j+1]:
                arr[j+1], arr[j] = arr[j], arr[j+1]
                swapped = True

        if not swapped:
            break


if __name__ == '__main__':
    import doctest
    doctest.testmod()
