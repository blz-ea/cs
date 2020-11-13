import mergeSort from './mergeSort';

test('sorting using merge sort', () => {
    const data = Array(10)
        .fill(null)
        .map(() => Math.floor(Math.random() * 100));
    const sorted = [...data].sort((a, b) => a - b);
    mergeSort(data);
    expect(data).toEqual(sorted);
});
