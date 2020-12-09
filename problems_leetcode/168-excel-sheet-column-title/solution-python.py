import sys
import pytest

test_run_data = [
    # (input, expected)
    (1, "A"),
    (28, "AB"),
    (701, "ZY")
]


def convert_to_title(nums: int) -> str:
    result = []

    while nums > 0:
        character = chr((nums - 1) % 26 + ord('A'))
        result.append(character)
        nums = (nums - 1) // 26

    result.reverse()
    return "".join(result)


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_example(input_data, expected):
    assert convert_to_title(input_data) == expected


if __name__ == '__main__':
    pytest.main(sys.argv)
