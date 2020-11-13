from typing import List


def reverse_string(s: List[str]) -> None:
    """
    >>> s = ["h","e","l","l","o"]
    >>> reverse_string(s)
    >>> print(str)
    ['o', 'l', 'l', 'e', 'h']
    
    >>> s2 = ["H","a","n","n","a","h"]
    >>> reverse_string(s2)
    >>> print(s2)
    ['h', 'a', 'n', 'n', 'a', 'H']
    """
    start = 0
    end = len(s)-1
    
    while start <= end:
        temp = s[end]
        s[end] = s[start]
        s[start] = temp
        
        start += 1
        end -= 1


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
