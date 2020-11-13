import selectionSort from './selectionSort';

test('sorting using selection sort', () => {
    const data = [8, 5, 2, 3, 4, 6, 7, 9, 10, 1, 0];
    const sorted = [...data].sort((a, b) => a - b);

    selectionSort(data);
    expect(data).toEqual(sorted);
});
