def convert_bytes(num):
    """
    Function convert bytes to MB.... GB... etc
    >>> convert_bytes(1_000)
    '1.0 KB'
    >>> convert_bytes(1_000_000)
    '1.0 MB'
    >>> convert_bytes(1_000_000_000)
    '1.0 GB'
    >>> convert_bytes(1_000_000_000_000)
    '1.0 TB'
    >>> convert_bytes(1_000_000_000_000_000)
    '1.0 PB'
    """
    step_unit = 1000.0  # 1024 bad the size

    for x in ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB']:
        if num < step_unit:
            return f"{num} {x}"

        num /= step_unit


if __name__ == '__main__':
    import doctest

    doctest.testmod()
