import twoSum from './solution-ts';

test('return indices of the two numbers such that they add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 91)).toBe(undefined);
});
