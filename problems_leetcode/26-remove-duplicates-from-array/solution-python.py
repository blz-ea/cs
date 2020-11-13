from typing import List, Union


def remove_duplicates(arr: List):
    return list(set(arr))


def remove_duplicates_sorted(nums: List[int]) -> int:
    """
    >>> nums = [0,0,1,1,1,2,2,3,3,4]
    >>> remove_duplicates_sorted(nums)
    5
    >>> print(nums)
    [0, 1, 2, 3, 4]
    """
    length = len(nums)
    if length == 0 or length == 1:
        return len(nums)

    curr = nums[0]
    j = 1

    for i in range(1, len(nums)):
        if curr != nums[i]:
            curr = nums[i]
            nums[j] = nums[i]
            j += 1

    del nums[j:]
    return len(nums)


def print_duplicates(arr):
    """
    >>> print_duplicates([1, 2, 3, 1, 3, 6, 6])
    1
    3
    6
    """
    for i in range(len(arr)):
        if arr[abs(arr[i])] >= 0:
            arr[abs(arr[i])] = -arr[abs(arr[i])]
        else:
            print(abs(arr[i]))


def remove_duplicates_no_buffer(arr: List) -> Union[List, None]:
    """
    >>> remove_duplicates_no_buffer(['a','b','a','b','a','b','c','d','e','e','f','f'])
    ['a', 'b', 'c', 'd', 'e', 'f']
    """
    list_len = len(arr)
    if list_len == 0 or list_len < 2:
        return

    tail = 1

    for i in range(list_len):
        j = 0
        while j < tail:
            if arr[i] == arr[j]:
                break
            j += 1

        if j == tail:
            arr[tail] = arr[i]
            tail += 1

    del arr[tail:list_len]
    return arr


def remove_duplicates_buffer(arr: List) -> List:
    """
    >>> remove_duplicates_buffer(['a','b','a','b','a','b','c','d','e','e','f','f'])
    ['a', 'b', 'c', 'd', 'e', 'f']
    """
    table: List[Union[None, int]] = [None] * 256  # Extended ASCII table (can be 128 if list includes standard ASCII
    # characters)
    current = 0

    for c in arr:
        char: int = ord(c)
        if table[char] is None:
            table[char] = 1
            arr[current] = c
            current += 1

    del arr[current:len(arr)]
    return arr


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
