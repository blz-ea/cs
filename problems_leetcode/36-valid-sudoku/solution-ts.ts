const isValidSudoku = (board: string[][]): boolean => {
    /**
     * - Validate row
     * - Validate column
     * - Validate box
     *
     * Row, Col and Box should not contain duplicates
     * Check if we previously seen same value
     *
     * Time Complexity O(n^2)
     * Space complexity O(n)
     *
     * Every digit on our board has an address
     * - Put that address into hash table for row, col, and box
     *
     * Init hashtable
     * rowMap = {
     *   0-5: true // {row}-{value} where row is an index of outer loop
     * }
     * colMap = {
     *     0-5: true // {col}-{value} where col is an index of inner loop
     * }
     * boxMap = {
     *     0-5-0: true {floor(row / 3)}-{value}-{floor(col / 3)}
     * }
     *
     * - Outer loop from 0 to 9: <- row
     *   - Inner loop from 0 to 9 <- col
     *       value = board[row][col]
     *
     *       if val is not '.'
     *          create rowKey
     *          create colKey
     *          create boxKey
     *
     *          if rowKey in rowMap or colKey in colMap or boxKey in boxMap
     *              return false
     *
     *          rowMap[rowKey] = true
     *          colMap[colKey] = true
     *          boxMap[boxKey] = true
     *
     * return true
     */

    const seenRows = {};
    const seenCols = {};
    const seenSubBoxes = {};

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const currValue = board[row][col];
            if (currValue !== '.') {
                const rowKey = `${row}-${currValue}`;
                const colKey = `${col}-${currValue}`;
                const subBoxKey = `${Math.floor(row / 3)}-${currValue}-${Math.floor(col / 3)}`;

                if (rowKey in seenRows || colKey in seenCols || subBoxKey in seenSubBoxes) {
                    return false;
                }

                seenRows[rowKey] = true;
                seenCols[colKey] = true;
                seenSubBoxes[subBoxKey] = true;
            }
        }
    }

    return true;
};

export default isValidSudoku;
