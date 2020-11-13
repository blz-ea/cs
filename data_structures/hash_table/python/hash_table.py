from typing import List, TypeVar, Generic, Union, Tuple, Any
from data_structures.linked_list.python.doubly_linked_list import DoublyLinkedList

T = TypeVar('T')
K = TypeVar('K')

HashTableType = List[Union[DoublyLinkedList[T], None]]


class HashTable(Generic[T]):
    table: HashTableType
    size: int

    def __init__(self, size_table: int = 64):
        self.table = [None] * size_table
        self.size = size_table

    def hash(self, key: Any) -> int:
        key = bytearray(str(key).encode())

        h_key = 0
        for char in key:
            h_key ^= char  # XOR
            h_key *= 16777619 # 32 bit prime number

        # zero-fill right shift
        h_key = (h_key >> 0) if h_key >= 0 else ((h_key + 0x100000000) >> 0)

        return h_key % self.size

    def put(self, key: Any, value: T) -> 'HashTable':
        hash_code = self.hash(key)
        bucket = self.table[hash_code]

        if bucket is None:
            self.table[hash_code] = DoublyLinkedList().push(key=key, val=value)
        else:
            current = bucket.head
            while current:
                if current.key == key:
                    current.val = value  # update
                    return self
                else:
                    current = current.next

            bucket.push(key=key, val=value)

        return self

    def get(self, key: Any) -> Union[None, T]:
        hash_code = self.hash(key)
        bucket = self.table[hash_code]

        if bucket is None:
            return None

        node = bucket.find(key)
        if node is None:
            return None

        return node.val

    def remove(self, key: Any) -> Union[None, T]:
        hash_code = self.hash(key)
        bucket = self.table[hash_code]

        if bucket is None:
            return None

        node = bucket.find(key)
        bucket.delete(node)

        return node.val

    def from_array(self, key_values: List[Tuple[Any,T]]) -> 'HashTable':
        if len(key_values) == 0:
            return self

        for t in key_values:
            key, value = t[0], t[1]
            self.put(key, value)

        return self

    def __repr__(self):
        result = ""
        for unit in self.table:
            result += "\t" + repr(unit) + "\n"
        return f"HashTable[\n{result}]"
