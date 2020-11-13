const rotateImage90 = (matrix: number[][]): void => {
    for (let i = 0; i <= matrix.length - 1; i++) {
        let tracker = matrix.length - 1;

        for (let j = matrix.length - 1; j >= 0; j--) {
            const current = matrix[i].pop();
            matrix[tracker].unshift(current);
            tracker--;
        }
    }
};

const rotateImage90_v2 = (matrix: number[][]): void => {
    const len = matrix.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        let j = i;

        while (j < len - i - 1) {
            const pos_x = len - i - 1;
            const pos_y = len - j - 1;

            const temp = matrix[i][j];

            matrix[i][j] = matrix[pos_y][i];
            matrix[pos_y][i] = matrix[pos_x][pos_y];
            matrix[pos_x][pos_y] = matrix[j][pos_x];
            matrix[j][pos_x] = temp;

            j++;
        }
    }
};

const rotateImage180 = (matrix: number[][]): void => {
    const len = matrix[0].length;
    const mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
        for (let j = 0; j < len; j++) {
            const pos_i = len - 1 - i;
            const pos_j = len - 1 - j;

            const temp = matrix[i][j];
            matrix[i][j] = matrix[pos_i][pos_j];
            matrix[pos_i][pos_j] = temp;
        }
    }

    if (len % 2 === 1) {
        for (let j = 0; j < mid; j++) {
            const temp = matrix[mid][j];
            matrix[mid][j] = matrix[mid][len - j - 1];
            matrix[mid][len - j - 1] = temp;
        }
    }
};

const rotateImage180_v2 = (matrix: number[][]): void => {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0, k = n - 1; j < k; j++, k--) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][k];
            matrix[i][k] = temp;
        }
    }

    for (let j = 0; j < n; j++) {
        for (let i = 0, k = m - 1; i < k; i++, k--) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[k][j];
            matrix[k][j] = temp;
        }
    }
};

export { rotateImage90, rotateImage90_v2, rotateImage180, rotateImage180_v2 };
