import sys
import pytest

test_run_data = [
    # (input, expected)
    ('A', 1),
    ('B', 2),
    ('C', 3),
    ('Z', 26),
    ('AA', 27),
    ('AB', 28),
    ('ZY', 701),
]


def excel_title_to_number(title: str) -> int:
    res = 0
    for char in title:
        res = res * 26 + ord(char) - 65 + 1

    return res


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_excel_title_to_number(input_data, expected):
    assert excel_title_to_number(input_data) == expected


if __name__ == '__main__':
    pytest.main(sys.argv)
