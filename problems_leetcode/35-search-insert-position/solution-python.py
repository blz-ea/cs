from typing import List


def search_insert(nums: List[int], target: int) -> int:
    i = 0
    while i < len(nums):
        if nums[i] == target:
            return i
        elif nums[i] > target:
            break
        i += 1

    return i


def test():
    """
    >>> search_insert([1,3,5,6], 5)
    2
    >>> search_insert([1,3,5,6], 7)
    4
    >>> search_insert([1,3,5,6], 0)
    0
    >>> search_insert([1],0)
    0
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
