from typing import List


def move_zeros(nums: List[int]) -> None:
    """
    >>> nums = [0,1,0,3,12]
    >>> move_zeros(nums)
    >>> print(nums)
    [1, 3, 12, 0, 0]
    """
    
    index = 0
    num_zeros = 0
    
    while index < len(nums):
        if nums[index] == 0:
            del nums[index]
            num_zeros += 1
        else:
            index += 1
    
    for i in range(num_zeros):
        nums.append(0)


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
