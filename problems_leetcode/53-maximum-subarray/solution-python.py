from typing import List


def max_sub_array(nums: List[int]) -> int:
    """
    >>> max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    6
    >>> max_sub_array([1])
    1
    >>> max_sub_array([0])
    0
    >>> max_sub_array([-1])
    -1
    >>> max_sub_array([-2147483647])
    -2147483647
    """

    run_sum = nums[0]
    result = run_sum

    for i in range(1, len(nums)):
        run_sum = run_sum + nums[i] if run_sum + nums[i] >= nums[i] else nums[i]
        result = max(run_sum, result)

    return result


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
