import bubbleSort from './bubbleSort';

test('sorting using bubble sort', () => {
    const data = [3, 7, 8, 4, 5, 6];
    const sorted = [...data].sort((a, b) => a - b);

    bubbleSort<number>(data);
    expect(data).toEqual(sorted);
});
