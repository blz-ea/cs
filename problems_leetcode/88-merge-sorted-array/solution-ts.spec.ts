import { simpleMerge, popMerge, reversePopMerge, sortedMerge } from './solution-ts';

const result = [5, 8, 10, 11, 15, 15, 22, 70, 80, 90];
test('simpleMerge', () => {
    expect(simpleMerge([10, 15, 22, 80], [5, 8, 11, 15, 70, 90])).toEqual(result);
});

test('popMerge', () => {
    expect(popMerge([10, 15, 22, 80], [5, 8, 11, 15, 70, 90])).toEqual(result);
});

test('reversePopMerge', () => {
    expect(reversePopMerge([10, 15, 22, 80], [5, 8, 11, 15, 70, 90])).toEqual(result);
});

test('sortedMerge', () => {
    expect(sortedMerge([10, 15, 22, 80], [5, 8, 11, 15, 70, 90])).toEqual(result);
});
