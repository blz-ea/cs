import containsDuplicates from './solution-ts';

test('returns `true` when duplicates found', () => {
    expect(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

test('returns `false` when duplicates not found', () => {
    expect(containsDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(false);
});

test('returns `false` when input length is 0', () => {
    expect(containsDuplicates([])).toBe(false);
});
