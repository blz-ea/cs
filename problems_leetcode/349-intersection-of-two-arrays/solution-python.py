import doctest
from typing import List


def list_intersection(nums1: List[int], nums2: List[int]) -> List[int]:
    """
    >>> list_intersection([1,2,3,4,4], [4,5,6,7])
    [4]
    """
    seen = {}
    result = []

    for num in nums1:
        if seen.get(num):
            seen[num] = seen.get(num) + 1
        else:
            seen[num] = 1

    for num in nums2:
        if seen.get(num):
            result.append(num)
            seen[num] = seen.get(num) - 1

    return result


if __name__ == '__main__':
    doctest.testmod(verbose=True)