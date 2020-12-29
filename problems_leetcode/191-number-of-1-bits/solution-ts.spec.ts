import { reverseBits } from '../190-reverse-bits/solution-ts';

const testRunData: number[][] = [
    [43261596, 964176192, 0b00000010100101000001111010011100, 0b00111001011110000010100101000000],
    [4294967293, -1073741825, 0b11111111111111111111111111111101, 0b10111111111111111111111111111111],
];

describe('Testing `reverseBits`', () => {
    test.each(testRunData)(
        'given %p should reverse bits and return %p',
        (inputDecimal, expectedDecimal, inputBinary, expectedBinary) => {
            expect(reverseBits(inputDecimal)).toBe(expectedDecimal);
        },
    );
});
