import reverseVowels from './solution-ts';

test('should return string with reversed vowels', () => {
    expect(reverseVowels('hello')).toBe('holle');
    expect(reverseVowels('leetcode')).toBe('leotcede');
});
