from typing import List


def plus_one(nums: List[int]) -> List[int]:
    """
    >>> plus_one([1,2,3])
    [1, 2, 4]
    >>> plus_one([4,3,2,2])
    [4, 3, 2, 3]
    >>> plus_one([9])
    [1, 0]
    >>> plus_one([4,6,7,9])
    [4, 6, 8, 0]
    >>> plus_one([9,9])
    [1, 0, 0]
    """

    for i in reversed(range(len(nums))):
        if nums[i] != 9:
            nums[i] += 1
            return nums
        else:
            nums[i] = 0

    nums.insert(0, 1)
    return nums


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
