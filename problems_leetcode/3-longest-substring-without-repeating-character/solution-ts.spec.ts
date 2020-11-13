import lengthOfLongestSubstringWithoutRepeating from './solution-ts';

const testData: [string, number][] = [
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
];

describe('testing `lengthOfLongestSubstringWithoutRepeating`', () => {
    testData.forEach((el) => {
        const data = el[0];
        const returnValue = el[1];

        test(`testing ${data}: it should return ${returnValue}`, () => {
            expect(lengthOfLongestSubstringWithoutRepeating(data)).toEqual(returnValue);
        });
    });
});
