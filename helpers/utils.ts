/**
 * Swaps idx1 with idx2 in the array
 * @param arr array of data
 * @param idx1 index number one
 * @param idx2 index number two
 */
export const swapArrayIndexes = (arr: unknown[], idx1: number, idx2: number): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/**
 * Comparator class - help compare custom objects
 */
type ComparatorType = unknown;

export class Comparator {
    compare: (a: ComparatorType, b: ComparatorType) => number;

    /**
     * Default comparator function
     * @param a
     * @param b
     */
    static defaultCompareFunction(a: number, b: number): number {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    constructor(comparatorFunction?: (a: ComparatorType, b: ComparatorType) => number) {
        this.compare = comparatorFunction || Comparator.defaultCompareFunction;
    }

    /**
     * Checks if variable `a` is equal to `b`
     * @param a
     * @param b
     */
    equal(a: ComparatorType, b: ComparatorType): boolean {
        return this.compare(a, b) === 0;
    }

    /**
     * Checks if variable `a` is less than `b`
     * @param a
     * @param b
     */
    lessThan(a: ComparatorType, b: ComparatorType): boolean {
        return this.compare(a, b) < 0;
    }

    /**
     * Checks if variable `a` is greater than `b`
     * @param a
     * @param b
     */
    greaterThan(a: ComparatorType, b: ComparatorType): boolean {
        return this.compare(a, b) > 0;
    }

    /**
     * Checks if `a` is less than or equal to `b`
     * @param a
     * @param b
     */
    lessThanOrEqual(a: ComparatorType, b: ComparatorType): boolean {
        return this.compare(a, b) <= 0;
    }

    /**
     * Checks if `a` is greater or equal to `b`
     * @param a
     * @param b
     */
    greaterThanOrEqual(a: ComparatorType, b: ComparatorType): boolean {
        return this.compare(a, b) >= 0;
    }
}
