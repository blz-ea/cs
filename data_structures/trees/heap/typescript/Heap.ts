export type ComparatorFunction = (a, b) => number;

/**
 * Returns parents index
 * @param index
 */
const getParentIndex = (index: number): number => Math.ceil(index / 2 - 1);
const getLeftIndex = (i: number): number => 2 * i + 1;
const getRightIndex = (i: number): number => 2 * i + 2;

export default class Heap<T> {
    comparator: ComparatorFunction;
    heap: T[] = [];

    constructor(comparator: ComparatorFunction = (a: number, b: number) => a - b) {
        this.heap = [];
        this.comparator = (i1: number, i2: number) => {
            const value = comparator(this.heap[i1], this.heap[i2]);
            if (Number.isNaN(value)) {
                throw new Error(`Comparator should evaluate to a number`);
            }
            return value;
        };
    }

    /**
     * Insert element
     * @runtime O(log n)
     */
    add(value: T): void {
        this.heap.length = this.size + 1;
        this.heap[this.size - 1] = value;
        this.bubbleUp();
    }

    /**
     * Retrieves, but does not remove, the head of this heap
     * @runtime O(1)
     */
    peek(): T {
        return this.heap[0];
    }

    /**
     * Retrieves and removes the head of this heap, or returns null if this heap is empty
     * @runtime O(log n)
     */
    remove(index = 0): T {
        if (!this.size) {
            return null;
        }

        const lastIndex = this.size - 1;
        this.swap(index, lastIndex); // swap with last
        const value = this.heap[lastIndex];
        this.heap.length = this.size - 1; // remove last element
        this.bubbleDown(index);

        return value;
    }

    /**
     * Returns the number of elements in this collection.
     * @runtime O(1)
     */
    get size(): number {
        return this.heap.length;
    }

    /**
     * Move new element upwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    private bubbleUp(): void {
        let index = this.size - 1;

        while (getParentIndex(index) >= 0 && this.comparator(getParentIndex(index), index) > 0) {
            const parentIndex = getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    private bubbleDown(index = 0): void {
        let curr = index;

        while (getLeftIndex(curr) < this.size && this.comparator(curr, this.getChild(curr)) > 0) {
            const next = this.getChild(curr);
            this.swap(curr, next);
            curr = next;
        }
    }

    getChild(i: number): number {
        if (getRightIndex(i) < this.size && this.comparator(getLeftIndex(i), getRightIndex(i)) > 0) {
            return getRightIndex(i);
        }

        return getLeftIndex(i);
    }

    /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} i1 index 1
     * @param {number} i2 index 2
     */
    swap(i1: number, i2: number): void {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
}
