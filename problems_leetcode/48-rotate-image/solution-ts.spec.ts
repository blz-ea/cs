import { rotateImage90, rotateImage90_v2, rotateImage180 } from './solution-ts';

test('rotates matrix in-place', () => {
    const matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    const matrix1Result = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ];
    rotateImage90(matrix1);
    expect(matrix1).toEqual(matrix1Result);

    const matrix2 = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ];

    const matrix2Result = [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
    ];
    rotateImage90_v2(matrix2);
    expect(matrix2).toEqual(matrix2Result);

    const matrix3 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    const matrix3Result = [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1],
    ];

    rotateImage180(matrix3);
    expect(matrix3).toEqual(matrix3Result);
});
