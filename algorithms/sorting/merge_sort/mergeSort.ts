/**
 * 0. Create a `merge` function that combines two arrays
 * 0.1. Accept two arrays as an input
 * 0.2. Loops through each element in arrays and compare each element in `array1`
 * to a corresponding element in `array2`
 * 0.3 If Element in `array1` in larger then in `array2` push `array2` element to
 * `result` array
 * 1. Find a middle and divide the list into 2 sublists
 *    ___ ___ ___ ___ ___ ___ ___ ___
 *   | 5 | 1 | 7 | 3 | 2 | 8 | 6 | 4 |
 *                   |
 *  ___ ___ ___ ___     ___ ___ __  ___
 * | 5 | 1 | 7 | 3 |   | 2 | 8 | 6 | 4 |
 * 2. Recursively call `mergeSort` on the left side of array
 * 3. Recursively call `mergeSort` on the right side of array
 * 4. Recursive calling will divide each sublist into sublists until we
 *    reach a list with one element (a list with one item is a sorted list)
 *  ___ ___ ___ ___         ___ ___ ___ ___
 * | 5 | 1 | 7 | 3 |       | 2 | 8 | 6 | 4 |;
 *         |                       |
 *  ___ ___     ___ ___      ___ ___   ___ ___
 * | 5 | 1 |   | 7 | 3 |    | 2 | 8 | | 6 | 4 |
 *     |           |            |         |
 *  ___   ___   ___   ___    ___   ___   ___   ___
 * | 5 | | 1 | | 7 | | 3 |  | 2 | | 8 | | 6 | | 4 |
 * 5. Merge each sorted list together with its neighbor - maintaining sorted order
 */

function merge<T>(left: T[], right: T[], arr: T[]): T[] {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }

    return arr;
}

export default function mergeSort<T>(arr: T[]): T[] {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const mid = Math.floor(len / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right, arr);
}
