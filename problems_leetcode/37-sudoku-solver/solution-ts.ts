const isValidSudoku = (board: string[][], row: number, col: number, char: string): boolean => {
    const boxRowPos = row - (row % 3);
    const boxColPos = col - (col % 3);

    for (let i = 0; i < board.length; i++) {
        if (board[i][col] === char) {
            return false;
        }
        if (board[row][i] === char) {
            return false;
        }
    }

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (board[boxRowPos + x][boxColPos + y] === char) {
                return false;
            }
        }
    }

    return true;
};

const solveSudoku = (board: string[][]): boolean => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === '.') {
                for (const char of '123456789') {
                    if (isValidSudoku(board, row, col, char)) {
                        board[row][col] = char;

                        if (solveSudoku(board)) {
                            return true;
                        } else {
                            board[row][col] = '.';
                        }
                    }
                }

                return false;
            }
        }
    }
    return true;
};

export default solveSudoku;
