lookup = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
}


def roman_to_int(roman: str) -> int:
    """
    >>> roman_to_int('XXXVI')
    36
    >>> roman_to_int('MCMXCIV')
    1994
    """
    result = 0

    i = 0
    while i <= len(roman) - 1:
        if i+1 < len(roman) and lookup.get(roman[i] + roman[i+1]) is not None:
            result += lookup.get(roman[i] + roman[i+1])
            i += 2
        else:
            result += lookup.get(roman[i])
            i += 1

    return result


def int_to_roman(integer: int) -> str:
    """
    >>> int_to_roman(36)
    'XXXVI'
    >>> int_to_roman(1994)
    'MCMXCIV'
    """
    result = ''

    for i in lookup.keys():
        while integer >= lookup[i]:
            result += i
            integer -= lookup[i]

    return result


if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)
