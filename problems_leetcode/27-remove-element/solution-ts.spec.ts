import removeElementsInPlace from './solution-ts';

describe('Testing `removeElementInPlace` ', () => {
    it(`should remove element with following input [3,2,2,3], 3`, () => {
        const input = [3, 2, 2, 3];
        expect(removeElementsInPlace(input, 3)).toBe(2);
        expect(input).toEqual([2, 2]);
    });

    it(`should remove element with following input [0,0,1,1,2,3,3,4], 1`, () => {
        const input = [0, 0, 1, 1, 2, 3, 3, 4];
        expect(removeElementsInPlace(input, 1)).toBe(6);
        expect(input).toEqual([0, 0, 2, 3, 3, 4]);
    });
});
