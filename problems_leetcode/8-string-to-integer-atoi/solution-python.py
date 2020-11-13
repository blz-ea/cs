def atoi(s: str) -> int:
    """
    >>> atoi("42")
    42
    >>> atoi("    -42")
    -42
    >>> atoi("4193 with words")
    4193
    >>> atoi("words and 987")
    0
    >>> atoi("-91283472332")
    -2147483648
    """
    s = s.lstrip()
    sign = 1

    if s[0] == '-':
        sign = -1
        s = s[1:]
    elif s[0] == '+':
        s = s[1:]

    result = 0

    for char in s:
        if char.isdigit():
            result *= 10
            result += int(char)
        else:
            break

    max_int = 0x7fffffff
    min_int = -0x80000000

    if result > max_int:
        return max_int if sign == 1 else min_int

    return sign * result


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
