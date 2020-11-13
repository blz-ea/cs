from typing import List


def single_number(nums: List[int]) -> int:
    """
    >>> single_number([2,2,1])
    1
    >>> single_number([4,1,2,1,2])
    4
    >>> single_number([5])
    5
    """
    if len(nums) == 1:
        return nums[0]
    
    seen = {}
    
    for num in nums:
        if num in seen: 
            seen[num] += 1
        else:
            seen[num] = 1
    
    for num in seen.keys():
        if seen[num] == 1:
            return num
        

if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
