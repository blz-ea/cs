from typing import List


def longest_common_prefix(strs: List[str]) -> str:
    """
    >>> longest_common_prefix(['flower', 'flow', 'flight'])
    'fl'
    >>> longest_common_prefix(['dog', 'racecar', 'car'])
    ''
    """
    if len(strs) == 0:
        return ""

    if len(strs) == 1:
        return strs[0]

    strs.sort()
    result = ''

    for i in range(len(strs[0])):
        if strs[0][i] == strs[-1][i]:
            result += strs[0][i]
        else:
            break

    return result


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
