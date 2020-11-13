import Heap from '@ds/trees/heap/typescript/Heap';

export default class MaxHeap<T> extends Heap<T> {
    constructor() {
        super((a: number, b: number) => b - a);
    }
}
