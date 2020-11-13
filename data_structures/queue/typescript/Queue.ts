import DoublyLinkedList from '@ds/linked_list/typescript/DoublyLinkedList';

export default class Queue<T> {
    private queue = new DoublyLinkedList<T>();

    enqueue(value: T): this {
        this.queue.unshift(value);
        return this;
    }

    dequeue(): T {
        return this.queue.pop();
    }

    peek(): T {
        return this.queue.tail.val;
    }

    toString(): string {
        return this.queue.toString();
    }

    toArray(): T[] {
        return this.queue.toArray();
    }

    fromArray(array: T[]): this {
        if (array && array.length !== 0) {
            for (const el of array) {
                this.enqueue(el);
            }
        }

        return this;
    }

    get length(): number {
        return this.queue.length;
    }

    get isEmpty(): boolean {
        return this.queue.isEmpty;
    }
}
