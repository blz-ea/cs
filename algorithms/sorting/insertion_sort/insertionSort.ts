export default function insertionSort(arr: unknown[]): void {
    const len = arr.length;

    if (len <= 1) {
        return;
    }

    for (let i = 1; i < len; i++) {
        const current = arr[i];
        let j = i - 1;

        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
}
