import Heap, { ComparatorFunction } from '@ds/trees/heap/typescript/Heap';

export default class PriorityQueue<T> extends Heap<T> {
    constructor(iterable: T[] = [], comparator: ComparatorFunction = (a: number, b: number) => a - b) {
        super(comparator);
        Array.from(iterable).forEach((el) => super.add(el));
    }

    enqueue(value: T): void {
        return super.add(value);
    }

    dequeue(): T {
        return super.remove();
    }
}
