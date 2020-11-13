
def reverse_integer(x: int) -> int:
    """
    >>> reverse_integer(123)
    321
    >>> reverse_integer(-123)
    -321
    >>> reverse_integer(120)
    21
    >>> reverse_integer(98237568623785)
    0
    """
    sign = -1 if x < 0 else 1
    n = int(str(abs(x))[::-1])

    if n > 0x7fffffff:
        return 0

    return sign * n


def reverse_integer2(x: int) -> int:
    """
    >>> reverse_integer2(123)
    321
    >>> reverse_integer2(-123)
    -321
    >>> reverse_integer2(120)
    21
    >>> reverse_integer2(98237568623785)
    0
    """
    result = 0

    while x:
        digit = x - int(x / 10) * 10  # calculate modulo of 10 e.g.: 123 - floor(123 / 10 = 12) * 10
        result = (result * 10) + digit
        x = int(x / 10)

    return 0 if result > 0x7fffffff or result < -0x80000000 else result


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
