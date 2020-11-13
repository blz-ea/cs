import doctest


def first_unique_character_map(string: str) -> int:
    """
    >>> first_unique_character_map('dddccdbba')
    8
    >>> first_unique_character_map('dddccdbbaa')
    -1
    >>> first_unique_character_map('dccbbaa')
    0
    """
    seen = {}
    for char in string:
        if seen.get(char):
            seen[char] = seen.get(char) + 1
        else:
            seen[char] = 1

    for i, _ in enumerate(string):
        char = string[i]
        if seen.get(char) == 1:
            return i

    return -1


def first_unique_character_list(string: str) -> int:
    """
    >>> first_unique_character_list('dddccdbba')
    8
    >>> first_unique_character_map('dddccdbbaa')
    -1
    >>> first_unique_character_map('dccbbaa')
    0
    """
    counts = [0] * 26

    def get_idx(character: str) -> int:
        return ord(character) - 97

    for char in string:
        idx = get_idx(char)
        counts[idx] += 1

    for i, char in enumerate(string):
        idx = get_idx(char)
        if counts[idx] == 1:
            return i

    return -1


if __name__ == '__main__':
    doctest.testmod(verbose=True)
