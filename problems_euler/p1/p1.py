def compute():
    """
    >>> print(compute())
    233168
    """
    ans = 0
    for x in range(1000):
        if x % 3 == 0 or x % 5 == 0:
            ans += x

    return ans


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)
