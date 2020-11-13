from typing import List, Final
from random import randrange


def find_kth_largest(nums: List[int], k: int) -> int:
    """
    Time complexity: O(n log n)
    Space complexity: O(1)

    >>> find_kth_largest([3, 2, 1, 5, 6, 4], 2)
    5
    >>> find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
    4
    """
    list.sort(nums)

    return nums[len(nums) - k]


def find_kth_largest_selection(nums: List[int], k: int) -> int:
    """
    Time complexity: O(n) guaranteed
    Space complexity: O(1)
    >>> find_kth_largest_selection([3, 2, 1, 5, 6, 4], 2)
    5
    >>> find_kth_largest_selection([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
    4
    """
    # shuffle(nums)
    k = len(nums) - k
    lo = 0
    hi = len(nums) - 1

    while lo < hi:
        j = partition(nums, lo, hi)

        if j < k:
            lo = j + 1
        elif j > k:
            hi = j - 1
        else:
            break

    return nums[k]


def partition(nums: List[int], lo: int, hi: int) -> int:
    pivot: Final[int] = nums[hi]
    i = lo

    for j in range(lo, hi):
        if nums[j] <= pivot:
            swap(nums, i, j)
            i += 1

    swap(nums, i, hi)
    return i


def swap(arr: List[int], i: int, j: int) -> None:
    tmp: Final[int] = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp


def shuffle(nums: List[int]) -> None:
    num_len = len(nums)

    for i in range(len(nums)):
        r = randrange(i, num_len)
        swap(nums, i, r)


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)