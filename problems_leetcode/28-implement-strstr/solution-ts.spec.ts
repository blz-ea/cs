import strStr from './solution-ts';

test('return the index of the first occurrence of needle', () => {
    expect(strStr('hello', 'll')).toBe(2);
    expect(strStr('aaaaa', 'bba')).toBe(-1);
    expect(strStr('', 'needle')).toBe(-1);
    expect(strStr('haystack', '')).toBe(0);
});
