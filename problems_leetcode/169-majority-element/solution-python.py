import sys
from typing import List

import pytest


def majority_element(nums: List[int]) -> int:
    sorted_nums = sorted(nums)
    return sorted_nums[len(nums) // 2]


# Boyer-Moore Majority Vote Algorithm
def majority_element_moore(nums: List[int]) -> int:
    major = nums[0]
    count = 1

    for i in range(1, len(nums)):
        if count == 0:
            major = nums[i]
            count = 1
        elif nums[i] == major:
            count += 1
        else:
            count -= 1

    return major


test_run_data = [
    # (input, expected)
    ([3, 2, 3], 3),
    ([2, 2, 1, 1, 1, 2, 2], 2),
]


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_majority_element(input_data, expected):
    assert majority_element(input_data) == expected


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_majority_element_moore(input_data, expected):
    assert majority_element_moore(input_data) == expected


if __name__ == '__main__':
    pytest.main(sys.argv)
