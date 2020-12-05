import { generatePascalsTriangle } from './solution-ts';

const exepectedResult = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

test("should generate Pascal's triangle", () => {
    expect(generatePascalsTriangle(5)).toEqual(exepectedResult);
});
