import sys
import pytest


def reverse_bits(n: int) -> int:
    out = 0
    for _ in range(32):
        out = (out << 1) + (n & 1)
        n >>= 1

    return out


test_run_data = [
    # (input_decimal, expected_decimal, input_binary, expected_binary)
    (43261596, 964176192, 0b00000010100101000001111010011100, 0b00111001011110000010100101000000),
    (4294967293, 3221225471, 0b11111111111111111111111111111101, 0b10111111111111111111111111111111)
]


@pytest.mark.parametrize("input_decimal, expected_decimal, input_binary, expected_binary", test_run_data)
def test_reverse_bits(input_decimal, expected_decimal, input_binary, expected_binary):
    assert reverse_bits(input_decimal) == expected_decimal
    assert reverse_bits(input_binary) == expected_decimal


if __name__ == '__main__':
    pytest.main(sys.argv)
