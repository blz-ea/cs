import { trianglePascalGetRow } from './solution-ts';

const testRunData = [
    // rowIndex | expectedResult
    [3, [1, 3, 3, 1]],
    [0, [1]],
    [1, [1, 1]],
];

describe('Testing `trianglePascalGetRow`', () => {
    test.each(testRunData)(
        "given `rowIndex` %i should return Pascal's triangle `row` %p",
        (rowIndex: number, expectedResult: number[]) => {
            expect(trianglePascalGetRow(rowIndex)).toEqual(expectedResult);
        },
    );
});
