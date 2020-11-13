def reverse_vowels(s: str) -> str:
    """
    >>> reverse_vowels('hello')
    'holle'
    >>> reverse_vowels('leetcode')
    'leotcede'
    """
    vowels = {
        'a': True,
        'e': True,
        'i': True,
        'o': True,
        'u': True,
        'A': True,
        'E': True,
        'I': True,
        'O': True,
        'U': True,
    }

    split_s = list(s)

    front = 0
    back = len(split_s) - 1
    while front < back:
        if split_s[front] not in vowels:
            front += 1
            continue

        if split_s[back] not in vowels:
            back -= 1
            continue

        split_s[front], split_s[back] = split_s[back], split_s[front]
        front += 1
        back -= 1

    return ''.join(split_s)


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
