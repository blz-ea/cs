def is_anagram(s: str, t: str) -> bool:
    """
    >>> is_anagram("anagram", "nagrama")
    True
    >>> is_anagram("anagram", "anahgram")
    False
    >>> is_anagram("","")
    True
    >>> is_anagram("anagram", "anagra")
    False
    >>> is_anagram("aaaàçççñññ", "aaàçççññña")
    True
    """
    if len(s) != len(t): return False
    if s == t: return True

    seen = {}

    for char in s:
        if char in seen:
            seen[char] += 1
        else:
            seen[char] = 1

    for char in t:
        if (char not in seen) or (seen[char] < 0):
            return False
        else:
            seen[char] -= 1

    return True


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
