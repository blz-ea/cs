import lengthOfLastWord from './solution-ts';

describe('Testing `lengthOfLastWord`', () => {
    it('should return length of last word in the string', () => {
        expect(lengthOfLastWord('Hello world')).toEqual(5);
        expect(lengthOfLastWord('a')).toEqual(1);
        expect(lengthOfLastWord('a ')).toEqual(1);
        expect(lengthOfLastWord(' ')).toEqual(0);
    });
});
