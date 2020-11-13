import { Comparator } from '@utils';

export default function binarySearch<T>(
    arr: T[],
    seekElement: T,
    comparatorCallback?: (a: unknown, b: unknown) => number,
): number {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    const comparator = new Comparator(comparatorCallback);

    while (!comparator.equal(arr[middleIndex], seekElement) && comparator.lessThanOrEqual(startIndex, endIndex)) {
        if (comparator.lessThan(seekElement, arr[middleIndex])) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    if (comparator.equal(arr[middleIndex], seekElement)) {
        return middleIndex;
    }

    return -1;
}
