from typing import List


def solve_sudoku(board: List[List[str]]) -> bool:
    """
   >>> in_board = [
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
   >>> out_board = [
   ... ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
   ... ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
   ... ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
   ... ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
   ... ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
   ... ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
   ... ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
   ... ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
   ... ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
   ... ]

   >>> solve_sudoku(in_board)
   True

   >>> assert (in_board == out_board) is True

   """

    for row in range(9):
        for col in range(9):
            if board[row][col] == '.':
                for char in "123456789":
                    if valid_sudoku(board, row, col, char):
                        board[row][col] = char

                        if solve_sudoku(board):
                            return True
                        else:
                            board[row][col] = '.'

                return False

    return True


def valid_sudoku(board: List[List[str]], row: int, col: int, char: str) -> bool:
    box_row_pos = row - (row % 3)
    box_col_pos = col - (col % 3)

    for i in range(len(board)):
        if board[i][col] == char:
            return False

        if board[row][i] == char:
            return False

    for i in range(3):
        for j in range(3):
            if board[box_row_pos + i][box_col_pos + j] == char:
                return False

    return True


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
