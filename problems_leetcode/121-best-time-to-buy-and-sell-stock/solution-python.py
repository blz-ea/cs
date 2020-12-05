from typing import List


def max_profit(nums: List[int]) -> int:
    """
    >>> max_profit([7, 1, 5, 3, 6, 4])
    5
    >>> max_profit([7, 6, 4, 3, 1])
    0
    """
    curr_run = 0
    max_sum = 0

    for i in range(1, len(nums)):
        curr_run += nums[i] - nums[i - 1]
        curr_run = max(0, curr_run)
        max_sum = max(curr_run, max_sum)

    return max_sum


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
