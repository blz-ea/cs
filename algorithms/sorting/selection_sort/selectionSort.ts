import { swapArrayIndexes } from '@utils';

export default function selectionSort<T>(arr: T[]): void {
    // for every item in the array
    for (let i = 0; i < arr.length - 1; i++) {
        // store first element's position as minimum number
        let min = i;
        // look for a smallest number in the array
        for (let j = i + 1; j < arr.length; j++) {
            // if we found value that is less than our current minimum - set it
            if (arr[j] < arr[min]) min = j;
        }
        // if positions are not the same then swap
        if (i !== min) swapArrayIndexes(arr, i, min);
    }
}
