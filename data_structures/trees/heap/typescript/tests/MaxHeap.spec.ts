import MaxHeap from '@ds/trees/heap/typescript/MaxHeap';
import Heap from '@ds/trees/heap/typescript/Heap';

describe('Testing Max Heap', () => {
    let maxHeap: MaxHeap<number>;

    beforeEach(() => {
        maxHeap = new MaxHeap<number>();
    });

    it('should initialize', () => {
        expect(maxHeap).toBeInstanceOf(Heap);
        expect(maxHeap).not.toBe(undefined);
    });

    it('should add an element', () => {
        expect(maxHeap.add(1)).toBe(undefined);
        expect(maxHeap.heap).toEqual([1]);
        expect(maxHeap.size).toBe(1);
    });

    it('should keep an order', () => {
        maxHeap.add(1);
        expect(maxHeap.peek()).toBe(1);

        maxHeap.add(0);
        expect(maxHeap.peek()).toBe(1);

        maxHeap.add(3);
        expect(maxHeap.peek()).toBe(3);

        maxHeap.add(2);
        expect(maxHeap.peek()).toBe(3);

        maxHeap.add(5);
        expect(maxHeap.peek()).toBe(5);

        expect(maxHeap.size).toBe(5);
    });

    it('should remove element from heap', () => {
        maxHeap.add(1);
        maxHeap.add(0);
        maxHeap.add(2);

        expect(maxHeap.remove()).toBe(2);
        expect(maxHeap.size).toBe(2);

        expect(maxHeap.remove()).toBe(1);
        expect(maxHeap.size).toBe(1);

        expect(maxHeap.remove()).toBe(0);
        expect(maxHeap.size).toBe(0);
    });
});
