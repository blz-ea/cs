import { intToRoman, romanToInt } from './solution-ts';

test('should convert int to roman integer', () => {
    expect(intToRoman(36)).toBe('XXXVI');
    expect(intToRoman(1994)).toBe('MCMXCIV');
});

test('should convert roman to int', () => {
    expect(romanToInt('XXXVI')).toBe(36);
    expect(romanToInt('MCMXCIV')).toBe(1994);
});
