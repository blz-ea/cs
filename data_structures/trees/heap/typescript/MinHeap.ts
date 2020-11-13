import Heap from '@ds/trees/heap/typescript/Heap';

export default class MinHeap<T> extends Heap<T> {
    constructor() {
        super((a: number, b: number) => a - b);
    }
}
