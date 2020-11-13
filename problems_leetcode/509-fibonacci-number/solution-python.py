from math import sqrt


def fib(n: int) -> int:
    """
    >>> fib(5)
    5
    >>> fib(30)
    832040
    """
    if n == 0:
        return 0
    if n == 1:
        return 1

    return fib(n - 1) + fib(n - 2)


def fib2(n: int) -> int:
    """
    >>> fib2(5)
    5
    >>> fib2(30)
    832040
    >>> fib2(70)
    190392490709135
    """
    if n == 0:
        return 0

    memo = (0, 1)

    for _ in range(2, n + 1):
        memo = (memo[-1], memo[-1] + memo[-2])

    return memo[-1]


def fib3(n: int) -> int:
    """
    >>> fib3(5)
    5
    >>> fib3(30)
    832040
    >>> fib3(70)
    190392490709135
    """

    if n > 70:
        raise ValueError(f"n should be less than or equal to 70. {n} was provided")

    const = sqrt(5)
    phi1 = (1 + const) / 2
    phi2 = (1 - const) / 2
    ans = (phi1 ** n - phi2 ** n) / const

    return int(ans)




def fib4(n: int) -> int:
    """
    >>> fib4(5)
    5
    >>> fib4(30)
    832040
    """
    if n > 30:
        raise ValueError('n should be less than 30')
    fibs = [
        0,
        1,
        1,
        2,
        3,
        5,
        8,
        13,
        21,
        34,
        55,
        89,
        144,
        233,
        377,
        610,
        987,
        1597,
        2584,
        4181,
        6765,
        10946,
        17711,
        28657,
        46368,
        75025,
        121393,
        196418,
        317811,
        514229,
        832040,
    ]

    return fibs[n]


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
