from data_structures.stack.pyhton.stack import Stack


def basic_calculator(s: str) -> int:
    """
    >>> basic_calculator('1+1')
    2
    >>> basic_calculator(' 2-1 + 2')
    3
    >>> basic_calculator('(1+(4+5+2)-3)+(6+8)')
    23
    >>> basic_calculator('-1 - 1')
    -2
    """
    stack = Stack[int]()
    number = 0
    result = 0
    sign = 1

    for c in s:
        if c.isdigit():
            number = number * 10 + int(c)
        elif c == '+':
            result += (sign * number)
            number = 0
            sign = 1
        elif c == '-':
            result += (sign * number)
            number = 0
            sign = -1
        elif c == '(':
            stack.push(result)
            stack.push(sign)
            result = 0
            sign = 1
        elif c == ')':
            result += (sign * number)
            number = 0
            result *= stack.pop()
            result += stack.pop()

    if number != 0:
        result += (sign * number)

    return result


if __name__ == '__main__':
    import doctest
    doctest.testmod()
