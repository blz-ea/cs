def add_binary(a: str, b: str) -> str:
    """
    >>> add_binary('11', '1')
    '100'
    >>> add_binary('1010', '1011')
    '10101'
    """
    carry = 0
    result = ''

    a = list(a)
    b = list(b)

    while a or b or carry:
        if a:
            carry += int(a.pop())
        if b:
            carry += int(b.pop())

        result += str(carry % 2)
        carry //= 2

    return result[::-1]


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
