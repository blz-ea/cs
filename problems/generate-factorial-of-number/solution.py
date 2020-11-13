def factorial_recursive(n: int) -> int:
    """
    >>> factorial_recursive(5)
    120
    >>> factorial_recursive(10)
    3628800
    """
    if n == 0 or n == 1:
        return 1

    return n * factorial_recursive(n - 1)


def factorial_iterative(n: int) -> int:
    """
    >>> factorial_iterative(5)
    120
    >>> factorial_iterative(10)
    3628800
    """
    result = 1

    if n == 0 or n == 1:
        return result

    for i in range(1, n+1):
        result = result * i

    return result


def factorial_bottom_up(n: int) -> int:
    """
    >>> factorial_bottom_up(5)
    120
    >>> factorial_bottom_up(10)
    3628800
    """
    memo = [0] * (n+1)
    memo[0] = 1

    i = 1
    while i <= n:
        memo[i] = i * memo[i - 1]
        i += 1

    return memo[n]


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)