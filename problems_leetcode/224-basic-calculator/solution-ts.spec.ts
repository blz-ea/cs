import basicCalculator from './solution-ts';

const testRunData: [string, number][] = [
    ['1 + 1', 2],
    [' 2-1 + 2', 3],
    ['(1+(4+5+2)-3)+(6+8)', 23],
    ['-1 - 1', -2],
];

describe('Testing basic calculator', () => {
    testRunData.forEach((pair) => {
        const input = pair[0];
        const output = pair[1];

        test(`should calculate ${input} to ${output}`, () => {
            expect(basicCalculator(input)).toEqual(output);
        });
    });
});
