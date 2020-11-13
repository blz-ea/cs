import searchInsert from './solution-ts';

describe('Testing `searchInsert`', () => {
    const testRunData: [number[], number, number][] = [
        [[1, 3, 5, 6], 5, 2],
        [[1, 3, 5, 6], 7, 4],
        [[1, 3, 5, 6], 0, 0],
        [[1], 0, 0],
    ];

    testRunData.forEach((el) => {
        const input1 = el[0];
        const input2 = el[1];
        const output = el[2];

        it(`should return ${output} with ${input1}, ${input2}`, () => {
            expect(searchInsert(input1, input2)).toBe(output);
        });
    });
});
