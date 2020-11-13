import { swapArrayIndexes } from '@utils';

function bubbleSort<T>(arr: T[]): void {
    const len = arr.length;
    if (len <= 1) {
        return;
    }
    // start from the beginning
    for (let i = 0; i < len; i++) {
        // we need this variable to be able to tell if array is sorted or not
        let swapped = false;
        // inner loop will be till the end of array minus `i`, since after every
        // iteration last element will be sorted
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Every element that is larger gets bubbled to the end of the array
                swapArrayIndexes(arr, j, j + 1);
                swapped = true;
            }
        }
        // if we didn't swap during the iteration that means that array is sorted
        // and there is no need to iterate over the array, we break the loop
        if (!swapped) {
            break;
        }
    }
}

export default bubbleSort;
