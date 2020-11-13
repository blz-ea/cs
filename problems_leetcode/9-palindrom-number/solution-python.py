def is_palindrome_number(x: int) -> bool:
    """
    >>> is_palindrome_number(121)
    True
    >>> is_palindrome_number(-121)
    False
    >>> is_palindrome_number(10)
    False
    >>> is_palindrome_number(-101)
    False
    """
    if x < 0:
        return False

    y = x
    rev = 0

    while y:
        digit = y - int(y / 10) * 10
        rev = (rev * 10) + digit
        y = int(y / 10)

    return rev == x


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)