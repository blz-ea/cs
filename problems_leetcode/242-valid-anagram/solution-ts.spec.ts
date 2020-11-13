import isAnagram from './solution-ts';

test('check if two strings are anagrams', () => {
    expect(isAnagram('anagram', 'nagrama')).toBe(true);
    expect(isAnagram('anagram', 'agrama')).toBe(false);
    expect(isAnagram('', '')).toBe(true);
    expect(isAnagram('aaaàçççñññ', 'aaàçççññña')).toBe(true);
});
