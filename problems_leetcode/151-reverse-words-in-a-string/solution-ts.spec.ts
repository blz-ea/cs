import { reverseWordsBuiltIn } from './solution-ts';

const testRunData = [
    // inputData| expectedOutput
    ['the sky is blue', 'blue is sky the'],
    ['  hello world  ', 'world hello'],
    ['a good   example', 'example good a'],
    ['  Bob    Loves  Alice   ', 'Alice Loves Bob'],
    ['Alice does not even like bob', 'bob like even not does Alice'],
];

describe('Testing `reverseWordsBuiltIn`', () => {
    test.each(testRunData)('given %p should reverse into %p', (inputData, expectedOutput) => {
        expect(reverseWordsBuiltIn(inputData)).toBe(expectedOutput);
    });
});
