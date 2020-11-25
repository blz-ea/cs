export function simpleMerge<T>(arr1: T[], arr2: T[]): T[] {
    let i = 0;
    let j = 0;

    const result: T[] = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    result.push(...arr1.slice(i));
    result.push(...arr2.slice(j));

    return result;
}

export function sortedMerge<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2].sort((a, b) => (a < b ? -1 : 1));
}

export function popMerge<T>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];

    while (arr1.length && arr2.length) {
        result.push((arr1[0] < arr2[0] ? arr1 : arr2).shift());
    }

    return [...result, ...arr1, ...arr2];
}

export function reversePopMerge<T>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];

    while (arr1.length && arr2.length) {
        result.push((arr1[arr1.length - 1] > arr2[arr2.length - 1] ? arr1 : arr2).pop());
    }

    return [...result, ...arr1.reverse(), ...arr2.reverse()].reverse();
}
