import sys
import pytest


def reverse_words_in_strung(s: str) -> str:
    return ' '.join(s.split()[::-1])


test_run_data = [
    # (input, expected)
    ('the sky is blue', 'blue is sky the'),
    ('  hello world  ', 'world hello'),
    ('a good   example', 'example good a'),
    ('  Bob    Loves  Alice   ', 'Alice Loves Bob'),
    ('Alice does not even like bob', 'bob like even not does Alice'),
]


@pytest.mark.parametrize("input_data, expected", test_run_data)
def test_reverse_words_in_string(input_data, expected):
    pass


if __name__ == '__main__':
    pytest.main(sys.argv)
