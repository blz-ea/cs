from typing import List


def contains_duplicates(nums: List[int]) -> bool:
    """
    >>> contains_duplicates([1,1,1,3,3,4,3,2,4,2])
    True
    >>> contains_duplicates([1,2,3,4,5,6,7,8,9,0])
    False
    """
    if len(nums) == 0:
        return False

    seen = {}

    for n in nums:
        if n in map:
            return True
        else:
            seen[n] = True

    return False


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
