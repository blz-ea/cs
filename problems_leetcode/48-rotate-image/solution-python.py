from typing import List


def rotate_image(matrix: List[List[int]]) -> None:
    """
    >>> matrix1 = [
    ... [1,2,3],
    ... [4,5,6],
    ... [7,8,9],
    ... ]
    >>> matrix2 = [
    ... [ 5, 1, 9,11],
    ... [ 2, 4, 8,10],
    ... [13, 3, 6, 7],
    ... [15,14,12,16],
    ... ]
    >>> rotate_image(matrix1)
    >>> print(matrix1)
    [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    
    >>> rotate_image(matrix2)
    >>> print(matrix2)
    [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
    """
    n = len(matrix[0])
    
    for i in range(n // 2):
        j = i
        while j < n-i-1:
            # (1)
            # (5)
            temp = matrix[i][j]
            pos_j = n - 1 - j
            pos_i = n - 1 - i
            # 0, 0 = 2, 0 (7)
            matrix[i][j] = matrix[pos_j][i]
            # 2, 0 = 2, 2 (9)
            matrix[pos_j][i] = matrix[pos_i][pos_j]
            # 2, 2 = 0, 2 (3)
            matrix[pos_i][pos_j] = matrix[j][pos_i]
            # 0, 2 = temp (1)
            matrix[j][pos_i] = temp
            j += 1


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
