import { removeDuplicates, removeDuplicatesNoBuffer } from './solution-ts';

test('remove duplicates from sorted array', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(nums)).toBe(5);
    expect(nums).toEqual([0, 1, 2, 3, 4]);

    expect(removeDuplicates(nums)).toBe(5);
    expect(nums).toEqual([0, 1, 2, 3, 4]);

    const nums2 = [];
    expect(removeDuplicates(nums2)).toBe(0);
    expect(nums2).toEqual([]);
});

test('remove duplicates with no buffer', () => {
    const nums = [0, 1, 0, 1, 7, 1, 2, 9, 6, 4];
    expect(removeDuplicatesNoBuffer(nums)).toBe(7);
    expect(nums).toEqual([0, 1, 7, 2, 9, 6, 4]);
});
