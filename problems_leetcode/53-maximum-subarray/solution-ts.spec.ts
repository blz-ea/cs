import maxSubArray from './solution-ts';

describe('Testing `maxSubarray`', () => {
    const testRunData: [number[], number][] = [
        [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
        [[1], 1],
        [[0], 0],
        [[-1], -1],
        [[-2147483647], -2147483647],
    ];

    testRunData.forEach((el) => {
        it('should return max subarray', () => {
            const input = el[0];
            const output = el[1];
            expect(maxSubArray(input)).toBe(output);
        });
    });
});
