import moveZeros from './solution-ts';

test('move all zeros to the end', () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeros(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
});
