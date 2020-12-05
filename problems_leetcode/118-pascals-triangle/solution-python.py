from typing import List


def generate_pascals_triangle(num_rows: int) -> List[List[int]]:
    """
    >>> generate_pascals_triangle(5)
    [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
    """
    res = [[1] * (i + 1) for i in range(num_rows)]

    for i in range(2, num_rows):
        for j in range(1, i):
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j]

    return res


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
