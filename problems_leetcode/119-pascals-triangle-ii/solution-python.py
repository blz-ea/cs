from typing import List


def pascals_triangle_get_row(row_index: int) -> List[int]:
    """
    >>> pascals_triangle_get_row(0)
    [1]
    >>> pascals_triangle_get_row(1)
    [1, 1]
    >>> pascals_triangle_get_row(3)
    [1, 3, 3, 1]
    """
    res = [1] * (row_index + 1)

    for i in range(2, row_index + 1):
        j = i - 1
        while j >= 1:
            res[j] = res[j] + res[j - 1]
            j -= 1

    return res


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
