import firstUniqueChar from './solution-ts';

test('returns first unique character in a string', () => {
    expect(firstUniqueChar('leetcode')).toBe(0);
    expect(firstUniqueChar('loveleetcode')).toBe(2);
    expect(firstUniqueChar('')).toBe(-1);
    expect(firstUniqueChar('aabbccddeeffgghhiijj')).toBe(-1);
});
