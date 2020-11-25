
def sqrt(x: int) -> int:
    """
    >>> sqrt(4)
    2
    >>> sqrt(8)
    2
    >>> sqrt(81)
    9
    """
    r = x

    while r*r > x:
        r = (r + x / r) / 2
    return int(r)


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
