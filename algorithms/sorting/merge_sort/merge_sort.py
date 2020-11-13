def merge_sort(arr):
    """
    Divide the array recursively until the elements are two or less
    Sort two (or less) elements
    Merge in taking one by one from each array such that they are in ascending order

                [7,4,6,2,5,3] #0 original
                      |
              [7,4,6] [2,5,3] #1 upper array
                |        |
              [7] [4,6][2] [5,3] #2 upper array
                    |       |
                [4][6]   [5][3]
    [4,6] <- upper array    [5,3] <- upper array #2
    [4] <-left [6] <-right  [5] <-left [3] <-right
    4 < 6                   5 < 3
    set 4 as lowest         set 3 as lowest
    [4,6] <- after first    [3,3] <- after first loop
    [4,6] <- after second   [3,5] <- after second loop

    [7,4,6]             [2,5,3] <- upper array #1
    [7]      [4,6]      [2] <- left [3,5] <- right
    7 < 4               2 < 3
    set 4 as lowest     set 2 as lowest
    [4,6,6] | 7 is left [2,5,3] <- after first loop | 3,5 is left
    [4,6,7]             [2,3,5] <- after second loop
            |                      |
                [4,6,7]  [2,3,5]
                  |        |
    [7,4,6,2,5,3] <- upper array #0 original
    [4,6,7] [2,3,5]
    4 < 2
    [2,4,6,2,5,3]
    4 < 3
    [2,3,6,2,5,3]
    6 < 5
    [2,3,4,5,5,3] <- after first loop | 6,7 left
    [2,3,4,5,6,7] <- after second loop
                        |
                  [2,3,4,5,6,7]

    >>> arr = [7,4,6,2,5,3]
    >>> merge_sort(arr)
    >>> print(arr)
    [2, 3, 4, 5, 6, 7]
    """

    if len(arr) > 1:
        mid = len(arr) // 2

        left = arr[:mid]
        right = arr[mid:]

        merge_sort(left)
        merge_sort(right)

        i = j = k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1

            k += 1

        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1


if __name__ == "__main__":
    import doctest
    doctest.testmod()
