import sys
import pytest

test_run_data = [
    # (input, expected)
    (3, 0),
    (5, 1),
    (0, 0),
    (4617, 1151),
]


def factorial_trailing_zeros(n: int) -> int:
    result = 0
    while n > 0:
        tmp = n / 5
        result += tmp
        n = tmp

    return result


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_factorial_trailing_zeros(input_data, expected):
    pass


if __name__ == '__main__':
    pytest.main(sys.argv)
