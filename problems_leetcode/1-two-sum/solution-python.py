from typing import List, Union


def two_sum(nums: List[int], target: int) -> Union[List[int], None]:
    """
    >>> two_sum([2,7,11,15], 9)
    [0, 1]
    
    >>> two_sum([2,7,11,15], 91)
    """
    seen = {}

    for i in range(len(nums)):
        pair = target - nums[i]
        if pair in seen:
            return [seen[pair], i]
        else:
            seen[nums[i]] = i

    return None


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
