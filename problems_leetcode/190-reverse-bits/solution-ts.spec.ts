import { hammingWeight } from '../191-number-of-1-bits/solution-ts';

const testRunData: number[][] = [
    // input, expectedOutput
    [0b00000000000000000000000000001011, 3],
    [0b00000000000000000000000010000000, 1],
    [0b11111111111111111111111111111101, 31],
];

describe('Testing `hammingWeight`', () => {
    test.each(testRunData)('given binary number %p should return %p of bits', (input, expectedOutput) => {
        expect(hammingWeight(input)).toBe(expectedOutput);
    });
});
