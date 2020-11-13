import insertion_sort from './insertionSort';

test('sorting using insertion sort', () => {
    const data = [2, 1, 3, 5, 6, 7, -1, 0, 10, 9];
    const sorted = [...data].sort((a, b) => a - b);

    insertion_sort(data);
    expect(data).toEqual(sorted);
});
