import Queue from '@ds/queue/typescript/Queue';

describe('Testing `Queue` data structure', () => {
    let queue: Queue<number> = new Queue();

    beforeEach(() => {
        queue = new Queue();
    });

    it('should create an empty `Queue', () => {
        expect(queue).toBeInstanceOf(Queue);
        expect(queue.length).toBe(0);
    });

    it('should add an element (enqueue) to the Queue', () => {
        expect(queue.enqueue(1)).toBeInstanceOf(Queue);
        expect(queue.length).toBe(1);
        expect(queue.toString()).toBe('1');
    });

    it('should add multiple elements to the Queue', () => {
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.length).toBe(3);
        expect(queue.toString()).toBe('3,2,1');
    });

    it('should get value of the front of the queue, without removing it', () => {
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.peek()).toBe(1);
        expect(queue.length).toBe(3);
        expect(queue.peek()).toBe(1);
    });

    it('should remove an element (dequeue) from the Queue', () => {
        queue.enqueue(1).enqueue(2).enqueue(3);
        expect(queue.length).toBe(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.length).toBe(2);
        expect(queue.dequeue()).toBe(2);
        expect(queue.length).toBe(1);
        expect(queue.dequeue()).toBe(3);
        expect(queue.length).toBe(0);
        expect(queue.dequeue()).toBeUndefined();
        expect(queue.length).toBe(0);
    });

    it('should create a Queue from array,', () => {
        const testData = [1, 2, 3, 4, 5];
        const queue = new Queue().fromArray(testData);

        for (let i = 0; i < testData.length; i++) {
            expect(queue.dequeue()).toBe(testData[i]);
        }
    });
});
