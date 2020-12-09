import sys
import pytest
from typing import List, Tuple, Union


def two_sum_ii(nums: List[int], target: int) -> Union[Tuple[int, int], None]:
    seen = {}

    for i in range(len(nums)):
        pair = target - nums[i]
        if pair in seen:
            return seen[pair] + 1, i + 1
        seen[nums[i]] = i


def two_sum_ii_two_pointers(nums: List[int], target: int) -> Union[Tuple[int, int], None]:
    left, right = 0, len(nums) - 1

    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return left + 1, right + 1
        elif s < target:
            left += 1
        else:
            right -= 1


def two_sum_ii_binary_search(nums: List[int], target: int) -> Union[Tuple[int, int], None]:
    for i in range(len(nums)):
        left, right = i+1, len(nums) - 1
        candidate = target - nums[i]
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == candidate:
                return i + 1, mid + 1
            elif nums[mid] < candidate:
                left = mid + 1
            else:
                right = mid - 1


test_run_data = [
    # (input numbers, input target, expected output)
    ([2, 7, 11, 15], 9, (1, 2)),
    ([2, 3, 4], 6, (1, 3)),
    ([-1, 0], -1, (1, 2)),
]


@pytest.mark.parametrize("nums, target, expected", test_run_data)
def test_two_sum_ii_seen_table(nums, target, expected):
    assert two_sum_ii(nums, target) == expected


@pytest.mark.parametrize("nums, target, expected", test_run_data)
def test_two_sum_ii_two_pointers(nums, target, expected):
    assert two_sum_ii_two_pointers(nums, target) == expected


@pytest.mark.parametrize("nums, target, expected", test_run_data)
def test_two_sum_ii_binary_search(nums, target, expected):
    assert two_sum_ii_binary_search(nums, target) == expected


if __name__ == '__main__':
    pytest.main(sys.argv)