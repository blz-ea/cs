def insertion_sort(arr):
    """
    start first loop at a second element in array until the end
    start second loop from the marker of first loop until it's index is zero
    compare if current element greater than the element on the left
    iterate through left portion and swap if required

    >>> arr = [6, 1, 2, 3, 6, 4, 9]
    >>> insertion_sort(arr)
    >>> print(arr)
    [1, 2, 3, 4, 6, 6, 9]
    """
    n = len(arr)
    for i in range(1, n):
        current = arr[i]
        j = i - 1

        while j >= 0 and current < arr[j]:
            arr[j+1] = arr[j]
            j -= 1

        arr[j+1] = current


if __name__ == "__main__":
    import doctest
    doctest.testmod()
