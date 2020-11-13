from typing import List


def rotate_array(nums: List[int], k: int) -> None:
    """
    >>> nums = [1,2,3,4,5,6,7]
    >>> rotate_array(nums, 3)
    >>> print(nums)
    [5, 6, 7, 1, 2, 3, 4]
    """
    for i in range(k):
        nums.insert(0, nums.pop())


def rotate_array_2(nums: List[int], k: int) -> None:
    """
    >>> nums = [1,2,3,4,5,6,7]
    >>> rotate_array_2(nums, 3)
    >>> print(nums)
    [5, 6, 7, 1, 2, 3, 4]
    """
    k %= len(nums)
    nums[:] = nums[-k:] + nums[:-k]


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
