import { quickSortV2, quickSort } from './quickSort';

describe('Testing quick sort', () => {
    describe('Classic quick sort', () => {
        const testRunData: number[][] = [
            [4, 2, 3, 2, 5, 3, 1],
            [5, 2, 6, 7, 8, 1, 2, 2, 3, 9],
        ];

        testRunData.forEach((el) => {
            it(`should sort ${el}`, () => {
                const builtInSort = [...el].sort((a, b) => a - b);
                expect(quickSort(el)).toEqual(builtInSort);
            });
        });
    });

    describe('quick sort v2', () => {
        const testRunData: number[][] = [
            [4, 2, 3, 2, 5, 3, 1],
            [5, 2, 6, 7, 8, 1, 2, 2, 3, 9],
        ];

        testRunData.forEach((el) => {
            it(`should sort ${el}`, () => {
                const builtInSort = [...el].sort((a, b) => a - b);
                expect(quickSortV2(el)).toEqual(builtInSort);
            });
        });
    });
});
