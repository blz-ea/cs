def len_of_last_word(s: str) -> int:
    """
    >>> len_of_last_word('Hello World')
    5
    >>> len_of_last_word('a')
    1
    >>> len_of_last_word('a ')
    1
    >>> len_of_last_word(' ')
    0
    """
    s_len = 0
    tail = len(s) - 1

    while tail >= 0 and s[tail] == ' ':
        tail -= 1

    while tail >= 0 and s[tail] != ' ':
        s_len += 1
        tail -= 1

    return s_len


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
