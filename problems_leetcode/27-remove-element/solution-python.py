from typing import List


def remove_element_in_place(nums: List[int], elem: int) -> int:
    start = 0
    for i in range(len(nums)):
        if nums[i] != elem:
            nums[start] = nums[i]
            start += 1

    del nums[start:]

    return start


def test():
    """
    >>> input_arr = [3,2,2,3]
    >>> remove_element_in_place(input_arr, 3)
    2
    >>> print(input_arr)
    [2, 2]

    >>> input_arr = [0,1,2,2,3,0,4,2]
    >>> remove_element_in_place(input_arr, 2)
    5
    >>> print(input_arr)
    [0, 1, 3, 0, 4]
    """


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
