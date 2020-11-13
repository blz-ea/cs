from typing import Union, List, TypeVar, Generic

T = TypeVar("T")


class ListNode(Generic[T]):
    key: int
    next: Union[None, 'ListNode'] = None

    def __init__(self, val: T = None, key: int = None):
        self.val = val
        self.key = key

    def __repr__(self):
        return f"ListNode({self.val})"

    def from_array(self, vals: List[T]) -> 'ListNode[T]':
        """
        Create a singly linked list from array
        """
        counter = 0

        if len(vals) <= counter:
            pass

        if self.val is None:
            self.val = vals[0]
            counter += 1

        current = self

        for i in range(counter, len(vals)):
            node = ListNode(vals[i])
            current.next = node
            current = node

        return self

    def to_array(self, to_string=False) -> List[T]:
        """
        Convert singly linked list to array
        """
        current = self
        result: List[T] = []

        while current:
            result.append(str(current.val) if to_string else current.val)
            current = current.next

        return result

    def reverse(self) -> 'ListNode[T]':
        """
        Reverse singly linked list
        """
        current_node = self
        prev_node = None
        next_node = None

        while current_node:
            next_node = current_node.next
            current_node.next = prev_node

            prev_node = current_node
            current_node = next_node

        return prev_node
