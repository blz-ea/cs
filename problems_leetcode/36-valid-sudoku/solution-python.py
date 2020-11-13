from typing import List


def is_valid_sudoku(board: List[List[str]]) -> bool:
    """
    >>> valid = [
    ... ["5","3",".",".","7",".",".",".","."],
    ... ["6",".",".","1","9","5",".",".","."],
    ... [".","9","8",".",".",".",".","6","."],
    ... ["8",".",".",".","6",".",".",".","3"],
    ... ["4",".",".","8",".","3",".",".","1"],
    ... ["7",".",".",".","2",".",".",".","6"],
    ... [".","6",".",".",".",".","2","8","."],
    ... [".",".",".","4","1","9",".",".","5"],
    ... [".",".",".",".","8",".",".","7","9"]
    ... ]
    >>> invalid = [
    ... ["8","3",".",".","7",".",".",".","."],
    ... ["6",".",".","1","9","5",".",".","."],
    ... [".","9","8",".",".",".",".","6","."],
    ... ["8",".",".",".","6",".",".",".","3"],
    ... ["4",".",".","8",".","3",".",".","1"],
    ... ["7",".",".",".","2",".",".",".","6"],
    ... [".","6",".",".",".",".","2","8","."],
    ... [".",".",".","4","1","9",".",".","5"],
    ... [".",".",".",".","8",".",".","7","9"]
    ... ]
    
    >>> is_valid_sudoku(valid)
    True
    
    >>> is_valid_sudoku(invalid)
    False
    """
    seen_rows = {}
    seen_cols = {}
    seen_sub_boxes = {}

    for row in range(9):
        for col in range(9):
            value = board[row][col]
            if value is not '.':
                row_key = f"{row}-{value}"
                col_key = f"{col}-{value}"
                box_key = f"{ row // 3 }-{value}-{col // 3}"

                if row_key in seen_rows or col_key in seen_cols or box_key in seen_sub_boxes:
                    return False

                seen_rows[row_key] = True
                seen_cols[col_key] = True
                seen_sub_boxes[box_key] = True

    return True


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)
