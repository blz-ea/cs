def first_unique_char(s: str) -> int:
    """
    >>> first_unique_char("leetcode")
    0
    >>> first_unique_char("loveleetcode")
    2
    >>> first_unique_char("")
    -1
    >>> first_unique_char("aabbccddeeffgghhiijj")
    -1
    """
    if len(s) <= 0:
        return -1
    
    counts = [0]*26
    
    for char in s:
        counts[ord(char)-97] += 1
        
    for i, char in enumerate(s):
        if counts[ord(s[i])-97] == 1:
            return i
    
    return -1


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
