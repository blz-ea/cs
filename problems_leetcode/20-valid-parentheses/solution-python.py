import doctest
from typing import Final
from data_structures.stack.pyhton.stack import Stack


def has_balanced_parentheses(string: str) -> bool:
    """
    >>> has_balanced_parentheses("{}")
    True
    >>> has_balanced_parentheses("()[]{}")
    True
    >>> has_balanced_parentheses("(]")
    False
    >>> has_balanced_parentheses("{test}{}{text}{}{}")
    True
    >>> has_balanced_parentheses("{{{{{[[[[]]]]}}}}}")
    True
    >>> has_balanced_parentheses("{{{{{[[[[]]]]}}}}}]{test}][")
    False
    """
    if len(string) == 0:
        return True

    stack: Final = Stack()
    open_map: Final = {
        '{': '}',
        '[': ']',
        '(': ')',
    }

    close_map: Final = {
        '}': True,
        ']': True,
        ')': True,
    }

    for char in string:
        if open_map.get(char):
            stack.push(char)
        elif close_map.get(char):
            popped = stack.pop()
            if popped is None or open_map[popped] != char:
                return False

    return True


if __name__ == '__main__':
    doctest.testmod(verbose=True)