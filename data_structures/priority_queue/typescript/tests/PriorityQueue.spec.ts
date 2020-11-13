import PriorityQueue from '@ds/priority_queue/typescript/PriorityQueue';

describe('Testing Priority Queue', () => {
    let pq: PriorityQueue<number>;

    beforeEach(() => {
        pq = new PriorityQueue<number>();
    });

    it('should create empty priority queue', () => {
        expect(pq).toBeInstanceOf(PriorityQueue);
    });

    it('should add items to queue', () => {
        pq.enqueue(1);
        pq.enqueue(2);
        pq.enqueue(3);
    });

    it('should remove items from the queue in correct order', () => {
        pq.enqueue(2);
        pq.enqueue(1);
        pq.enqueue(3);
        pq.enqueue(Infinity);

        expect(pq.dequeue()).toBe(1);
        expect(pq.dequeue()).toBe(2);
        expect(pq.dequeue()).toBe(3);
        expect(pq.dequeue()).toBe(Infinity);
    });

    it('should add items through constructor', () => {
        pq = new PriorityQueue<number>([1, 2, 3]);
        expect(pq.dequeue()).toBe(1);
        expect(pq.dequeue()).toBe(2);
        expect(pq.dequeue()).toBe(3);
    });

    it('should work with custom comparator function - max priority queue', () => {
        pq = new PriorityQueue<number>([1, 2, 3], (a: number, b: number) => b - a);
        expect(pq.dequeue()).toBe(3);
        expect(pq.dequeue()).toBe(2);
        expect(pq.dequeue()).toBe(1);
    });

    it('should work with custom comparator function and custom data structure', () => {
        const data = [
            [1, 4],
            [50, 2],
            [101, 2],
        ];
        const pq = new PriorityQueue<number[]>(data, (a: unknown, b: unknown) => a[0] - b[0]);
        expect(pq.dequeue()).toEqual([1, 4]);
        expect(pq.dequeue()).toEqual([50, 2]);
        expect(pq.dequeue()).toEqual([101, 2]);
    });
});
