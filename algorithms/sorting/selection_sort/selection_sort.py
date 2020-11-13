def selection_sort(arr):
    """
    start loop from 0 till end
      initialize min_idx variable and set it to value of i
      start second loop from i+1 till end
        compare if min_idx variable is smaller than current
      swap min_idx and i

    >>> arr = [4,5,2,3,1]
    >>> selection_sort(arr)
    >>> print(arr)
    [1, 2, 3, 4, 5]
    """
    n = len(arr)
    for i in range(n):
        min_idx = i

        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        if min_idx is not i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]


if __name__ == "__main__":
    import doctest

    doctest.testmod()
