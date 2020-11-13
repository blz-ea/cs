def str_str(haystack: str, needle: str) -> int:
    """
    >>> str_str("hello", "ll")
    2
    >>> str_str("aaaaa", "bba")
    -1
    >>> str_str("", "needle")
    -1
    >>> str_str("haystack","")
    0
    """
    h_len = len(haystack)
    n_len = len(needle)

    if n_len == 0:
        return 0

    if h_len < n_len or h_len == 0:
        return -1

    for i in range(len(haystack)):
        if haystack[i:i+n_len] == needle:
            return i

    return -1


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
