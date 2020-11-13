def is_prime(n: int) -> bool:
    """
    >>> is_prime(11)
    True
    >>> is_prime(15)
    False
    >>> is_prime(67)
    True
    >>> is_prime(541)
    True
    """

    if n <= 1:
        return False

    for x in range(2, n):
        if not n % x:
            return False

    return True


def is_prime_optimized(n: int) -> bool:
    """
    >>> is_prime_optimized(11)
    True
    >>> is_prime_optimized(15)
    False
    >>> is_prime_optimized(67)
    True
    >>> is_prime_optimized(541)
    True
    """
    if n <= 1:
        return False

    if n <= 3:
        return True

    if n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i = i + 6

    return True
