import isPalindrome, { isPalindrome2 } from './solution-ts';

test('check if given string is a palindrome', () => {
    const testFunctions = [isPalindrome, isPalindrome2];

    for (let i = 0; i < testFunctions.length; i++) {
        const func = testFunctions[i];
        expect(func('A man, a plan, a canal: Panama')).toBe(true);
        expect(func('race a car')).toBe(false);
    }
});
