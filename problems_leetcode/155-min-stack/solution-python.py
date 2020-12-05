from data_structures.stack.pyhton.stack import Stack


class MinStack:
    min_stack = Stack()
    stack = Stack()

    def push(self, x: int):
        self.stack.push(x)
        if self.min_stack.is_empty:
            self.min_stack.push(x)
        elif self.min_stack.peek() >= x:
            self.min_stack.push(x)

    def pop(self):
        popped = self.stack.pop()
        if not self.min_stack.is_empty and self.min_stack.peek() == popped:
            self.min_stack.pop()

    def top(self):
        return self.stack.peek()

    def get_min(self):
        return self.min_stack.peek()


def tests():
    """
    >>> min_stack = MinStack()
    >>> min_stack.push(-2)
    >>> min_stack.push(0)
    >>> min_stack.push(-3)
    >>> min_stack.get_min()
    -3
    >>> min_stack.pop()
    >>> min_stack.top()
    0
    >>> min_stack.get_min()
    -2
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
