import random
from typing import List

random_list1 = [random.randint(0, 1000) for i in range(0, 1000)]
random_list2 = [random.randint(0, 100) for j in range(0, 1000)]


def simple_merge(list1: List[int], list2: List[int]) -> List[int]:
    """
    >>> simple_merge([10,15,22,80],[5,8,11,15,70,90])
    [5, 8, 10, 11, 15, 15, 22, 70, 80, 90]
    """
    i, j = 0, 0
    res = []
    
    while i < len(list1) and  j < len(list2):
        if list1[i] < list2[j]:
            res.append(list1[i])
            i += 1
        else:
            res.append(list2[j])
            j += 1
        
    res += list1[i:]
    res += list2[j:]
        
    return res


def sorted_merge(list1: List[int], list2: List[int]) -> List[int]:
    """
    >>> sorted_merge([10,15,22,80],[5,8,11,15,70,90])
    [5, 8, 10, 11, 15, 15, 22, 70, 80, 90]
    """
    return sorted(list1 + list2)


def sort_merge(list1: List[int], list2: List[int]) -> List[int]:
    """
    >>> sort_merge([10,15,22,80],[5,8,11,15,70,90])
    [5, 8, 10, 11, 15, 15, 22, 70, 80, 90]
    """
    res = list1 + list2
    res.sort()
    
    return res


def pop_merge(list1: List[int], list2: List[int]) -> List[int]:
    """
    >>> pop_merge([10,15,22,80],[5,8,11,15,70,90])
    [5, 8, 10, 11, 15, 15, 22, 70, 80, 90]
    """
    result = []
    
    while list1 and list2:
        result.append( (list1 if list1[0] < list2[0] else list2 ).pop(0) )
    
    return result + list1 + list2


def reverse_pop_merge(list1: List[int], list2: List[int]) -> List[int]:
    """
    >>> reverse_pop_merge([10,15,22,80],[5,8,11,15,70,90])
    [5, 8, 10, 11, 15, 15, 22, 70, 80, 90]
    """
    result = []
    
    while list1 and list2:
        result.append( (list1 if list1[-1] > list2[-1] else list2 ).pop(-1) )
    
    return (result + list1[-1::-1] + list2[-1::-1])[-1::-1]


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
