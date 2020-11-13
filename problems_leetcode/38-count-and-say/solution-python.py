def count_and_say(n: int) -> str:
    """
    >>> count_and_say(1)
    '1'
    >>> count_and_say(4)
    '1211'
    >>> count_and_say(5)
    '111221'
    """
    if n <= 1:
        return '1'

    before = '1'
    after = ''

    for i in range(n - 1):
        count = 1
        ba = before[0]

        for a in before[1:]:
            if a != ba:
                after = after + str(count) + ba
                ba = a
                count = 1
            else:
                count += 1

        after = after + str(count) + ba
        before = after
        after = ''

    return before


def convert_str_to_count_and_say(s: str) -> str:
    """
    Helper Function converts string to its say (e.g. "11" -> "21" or "21" -> "1211"
    :param s: string to convert
    :return: string in say format
    """

    # In below loop previous character is processed in current
    # iteration That is why a dummy character is added to make sure
    # that loop runs one extra iteration
    s += "*"
    res = ""
    count = 1

    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            count += 1
        else:
            res += str(count) + s[i]
            count = 1

    return res


def count_and_say2(n: int) -> str:
    """
    >>> count_and_say2(1)
    '1'
    >>> count_and_say2(4)
    '1211'
    >>> count_and_say2(5)
    '111221'
    """
    if n == 0:
        return ""
    elif n == 1:
        return "1"
    elif n == 2:
        return "11"

    v = [""] * n
    v[0], v[1], v[2] = "1", "11", "21"

    for i in range(3, n):
        v[i] = convert_str_to_count_and_say(v[i - 1])

    return v[n - 1]


def count_and_say3(n: int) -> str:
    """
    >>> count_and_say3(1)
    '1'
    >>> count_and_say3(2)
    '11'
    >>> count_and_say3(3)
    '21'
    >>> count_and_say3(4)
    '1211'
    >>> count_and_say3(5)
    '111221'
    """
    if n == 0:
        return ""
    elif n == 1:
        return "1"
    elif n == 2:
        return "11"

    i = 3
    count_say = 1
    result = "21"

    while i < n:
        temp = result  # cache previous result
        result = ""  # reset the result

        for j in range(len(temp) - 1):
            if temp[j] == temp[j + 1]:  # if equal
                count_say += 1  # increment count
            else:
                result += str(count_say)  # add count to result
                result += temp[j]  # add value of current element
                count_say = 1  # reset count

        result += str(count_say)  # add count to result
        result += temp[-1]  # add last element from cache
        count_say = 1  # reset count
        i += 1

    return result


if __name__ == "__main__":
    import doctest

    doctest.testmod()
