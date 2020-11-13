import re


def is_palindrome(s: str) -> bool:
    """
    >>> is_palindrome("A man, a plan, a canal: Panama")
    True
    >>> is_palindrome("race a car")
    False
    """
    if len(s) == 0:
        return True
    
    s = s.lower()
    
    i = 0
    j = len(s)-1
    
    while i < j:
        if (s[i] < "a" or s[i] > "z") and (s[i] < "0" or s[i] > "9"):
            i += 1
            continue

        if (s[j] < "a" or s[j] > "z") and (s[j] < "0" or s[j] > "9"):
            j -= 1
            continue
        
        if s[i] != s[j]:
            return False
        
        i += 1
        j -= 1
    
    return True


def is_palindrome_2(s: str) -> bool:
    """
    >>> is_palindrome_2("A man, a plan, a canal: Panama")
    True
    >>> is_palindrome_2("race a car")
    False
    """
    s = s.lower()
    s = re.sub(r'[^a-z]', '', s)

    return s == s[::-1]


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
