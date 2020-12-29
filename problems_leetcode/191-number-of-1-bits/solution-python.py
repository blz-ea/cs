import sys
import pytest


def hamming_weight(n: int) -> int:
    count = 0
    while n:
        n &= (n - 1)
        count += 1

    return count


test_run_data = [
    # (input, expected)
    (0b00000000000000000000000000001011, 3),
    (0b00000000000000000000000010000000, 1),
    (0b11111111111111111111111111111101, 31),
]


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_hamming_weight(input_data, expected):
    assert hamming_weight(input_data) == expected


if __name__ == '__main__':
    pytest.main(sys.argv)
