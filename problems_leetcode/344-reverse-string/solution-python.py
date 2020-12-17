from typing import List


def reverse_string(s: List[str]) -> None:
    """
    >>> s = ["h","e","l","l","o"]
    >>> reverse_string(s)
    >>> print(s)
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


def reverse_string_xor(s: str) -> str:
    """
    Explanation:

        x1 100
        x2 111
    new x1 011

        x2 111
        x1 011
    new x2 100 <- equals to original input of x1

        x1 011
        x2 100
    new x1 111 <- equals to original input of x2

    >>> s = "hello"
    >>> s = reverse_string_xor(s)
    >>> print(s)
    olleh
    """

    s_bytes = bytearray(s, 'utf8')
    s_len = len(s_bytes)

    for i in range(s_len // 2):
        start = i
        end = s_len - i - 1

        s_bytes[end] ^= s_bytes[start]
        s_bytes[start] ^= s_bytes[end]
        s_bytes[end] ^= s_bytes[start]

    return s_bytes.decode()


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
