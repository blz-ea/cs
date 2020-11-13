import atoi from './solution-ts';

test('converts string to integer', () => {
    expect(atoi('42')).toBe(42);
    expect(atoi('    -42')).toBe(-42);
    expect(atoi('4193 with words')).toBe(4193);
    expect(atoi('words and 987')).toBe(0);
    expect(atoi('-91283472332')).toBe(-2147483648);
});
