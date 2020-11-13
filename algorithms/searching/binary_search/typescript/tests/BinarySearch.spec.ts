import binarySearch from '../BinarySearch';

describe('Testing Binary Search', () => {
    it('should return an index of value inside the array', () => {
        expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 2)).toEqual(0);
        expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 6)).toEqual(2);
        expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30)).toEqual(7);
        expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 31)).toEqual(-1);
        expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1)).toEqual(-1);
    });
});
