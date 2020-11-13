import Heap from '@ds/trees/heap/typescript/Heap';

describe('Testing Heap', () => {
    let heap: Heap<number>;

    beforeEach(() => {
        heap = new Heap<number>();
    });

    it('should initialize', () => {
        expect(heap).toBeInstanceOf(Heap);
        expect(heap).not.toBe(undefined);
    });

    it('should add an element', () => {
        expect(heap.add(1)).toBe(undefined);
        expect(heap.heap).toEqual([1]);
        expect(heap.size).toBe(1);
    });

    it('should keep an order', () => {
        heap.add(3);
        expect(heap.peek()).toBe(3);

        heap.add(2);
        expect(heap.peek()).toBe(2);

        heap.add(0);
        expect(heap.peek()).toBe(0);

        heap.add(1);
        expect(heap.peek()).toBe(0);

        expect(heap.size).toBe(4);
    });

    it('should remove element from heap', () => {
        heap.add(1);
        heap.add(0);
        heap.add(2);

        expect(heap.remove()).toBe(0);
        expect(heap.size).toBe(2);

        expect(heap.remove()).toBe(1);
        expect(heap.size).toBe(1);

        expect(heap.remove()).toBe(2);
        expect(heap.size).toBe(0);
    });
});
