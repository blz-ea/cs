import { arrayIntersection } from './solution-ts';

test('Testing array intersection', () => {
    expect(arrayIntersection([1, 2, 3, 4, 4], [4, 5, 6, 7])).toEqual([4]);
});
