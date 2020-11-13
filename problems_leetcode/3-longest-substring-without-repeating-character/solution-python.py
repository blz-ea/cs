def longest_substring_without_repeating_character(s: str) -> int:
    """
    >>> longest_substring_without_repeating_character('abcabcbb')
    abc
    3
    >>> longest_substring_without_repeating_character('bbbbb')
    b
    1
    >>> longest_substring_without_repeating_character('pwwkew')
    wke
    3
    """

    if s == '':
        return 0

    maxLen = 0
    maxStr = ''
    counter = -1
    seen = {}

    for i in range(len(s)):
        val = s[i]
        if val in seen and seen.get(val) > counter:
            counter = seen.get(val)

        if i - counter > maxLen:
            maxStr = s[counter+1:i+1]

        seen[val] = i
        maxLen = max(maxLen, i - counter)

    print(maxStr)
    return maxLen


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)