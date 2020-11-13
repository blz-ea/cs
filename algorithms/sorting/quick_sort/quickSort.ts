import { swapArrayIndexes } from '@utils';

type PartitionFunctionType<T> = (arr: T[], left: number, right: number) => number;

/**
 * Choosing a random pivot minimizes the chance that you will encounter worst-case
 * O(n^2) performance (always choosing first or last would cause worst-case performance
 * for nearly-sorted or nearly-reverse-sorted data). Choosing the middle element would
 * also be acceptable in a majority of cases.
 */

export function partitionLomuto<T>(array: T[], left: number, right: number): number {
    const pivot = right;
    let i = left;

    for (let j = left; j < right; j++) {
        if (array[j] <= array[pivot]) {
            swapArrayIndexes(array, i, j);
            i = i + 1;
        }
    }
    swapArrayIndexes(array, i, right);
    return i;
}

export function partitionHoare<T>(array: T[], left: number, right: number): number {
    /**
     * Pick left as first element in array
     * Pick right as last element in the array
     * Determine middle
     * [4, 7, 3, 2, 5, 8, 1]
     *  ^        ^        ^
     * left     pivot    right
     * Loop through while left is less than right
     * [4, 7, 3, 2, 5, 8, 1]
     *  ^        ^        ^
     * loop 4 < 2
     * loop 1 > 2
     * if index left 0 <= index right 6
     * swap left and right indexes and move left and right
     * [1, 7, 3, 2, 5, 8, 4]
     *     ^     ^     ^
     *    left  pivot right
     * loop 7 < 2
     * loop 8 > 2 right--
     * loop 5 > 2 right--
     * loop 2 > 2
     * [1, 7, 3, 2, 5, 8, 4]
     *     ^     ^
     *    left  right & pivot
     * swap 7 2
     * [1, 2, 3, 7, 5, 8, 4]
     *     ^     ^
     *    left  right & pivot
     * loop 2 < 7 left++
     * loop 7 > 7 right--
     * [1, 2, 3, 7, 5, 8, 4]
     *        ^  ^
     * left & right pivot
     * loop 3 < 7 left++
     * loop 3 > 7 right--
     *
     */

    const pivot = array[left];
    let i = left;
    let j = right;

    while (true) {
        while (array[i] < pivot) i++;
        while (array[j] > pivot) j--;

        if (i >= j) {
            return j;
        }

        swapArrayIndexes(array, i, j);
        i++;
        j--;
    }
}

export function quickSort<T>(
    array: T[],
    left = 0,
    right = array.length - 1,
    partitionFunction: PartitionFunctionType<T> = partitionLomuto,
): T[] {
    const pivot = partitionFunction(array, left, right);

    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1, partitionFunction);
    }

    if (right > pivot) {
        quickSort(array, pivot, right, partitionFunction);
    }

    return array;
}

export function quickSortV2<T>(
    array: T[],
    left = 0,
    right = array.length - 1,
    partitionFunction: PartitionFunctionType<T> = partitionHoare,
): T[] {
    if (left < right) {
        const pivot = partitionFunction(array, left, right);
        quickSortV2(array, left, pivot);
        quickSortV2(array, pivot + 1, right);
    }

    return array;
}
