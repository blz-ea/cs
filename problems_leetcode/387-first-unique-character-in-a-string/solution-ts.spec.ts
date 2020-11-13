import { firstUniqueCharacterMap, firstUniqueCharacterArray } from './solution-ts';

const funcs = [firstUniqueCharacterArray, firstUniqueCharacterMap];
const testData = [['dddccdbba', 8]];

describe('Testing first unique character in the string', () => {
    funcs.forEach((func) => {
        testData.forEach((data) => {
            test(`Testing ${func.name} with ${data[0]} should return ${data[1]}`, () => {
                expect(func.call(null, data[0])).toBe(data[1]);
            });
        });
    });
});
