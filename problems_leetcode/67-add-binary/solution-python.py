from typing import List


def add_binary(a: str, b: str) -> str:
    """
    >>> add_binary('11', '1')
    '100'
    >>> add_binary('1010', '1011')
    '10101'
    """
    carry = 0
    i = len(a) - 1
    j = len(b) - 1
    result: List[str] = []

    while i >= 0 or j >= 0 or carry:
        if i >= 0:
            carry += int(a[i])

        if j >= 0:
            carry += int(b[j])

        result.append(str(carry % 2))
        carry = carry // 2

        i -= 1
        j -= 1

    return "".join(result[::-1])


SUM = 0
CARRY = 1


def xor_gate(a, b):
    return '0' if a == b else '1'


def or_gate(a, b):
    if a == '1' or b == '1':
        return '1'

    return '0'


def and_gate(a, b):
    return '1' if a == '1' and b == '1' else '0'


def half_adder(a, b):
    gate_sum = xor_gate(a, b)
    carry = and_gate(a, b)

    return [gate_sum, carry]


def full_adder(a, b, carry):
    half_add = half_adder(a, b)
    sum_gate = xor_gate(carry, half_add[SUM])
    c = and_gate(carry, half_add[SUM])
    c = or_gate(c, half_add[CARRY])

    return [sum_gate, c]


def add_binary_2(a: str, b: str) -> str:
    """
    >>> add_binary('11', '01')
    '100'
    >>> add_binary('1010', '1011')
    '10101'
    """
    if len(a) != len(b):
        raise ValueError('Length of a should equal to length of b')

    result = ''
    carry = 0

    for i in range(len(a) - 1, -1, -1):
        if i == len(a) - 1:
            half_add = half_adder(a[i], b[i])
            result = half_add[SUM] + result
            carry = half_add[CARRY]
        else:
            full_add = full_adder(a[i], b[i], carry)
            print(full_add, carry)
            result = full_add[SUM] + result
            carry = full_add[CARRY]

    return carry + result if carry else result


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
