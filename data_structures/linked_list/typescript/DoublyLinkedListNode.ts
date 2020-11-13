import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import { ILinkedListNode } from '@ds/linked_list/typescript/types';

export default class DoublyLinkedListNode<T> extends SinglyLinkedListNode<T> implements ILinkedListNode<T> {
    previous: DoublyLinkedListNode<T> | null = null;
    next: DoublyLinkedListNode<T> | null = null;

    constructor(
        value: T = undefined,
        key: number | string = null,
        next: DoublyLinkedListNode<T> | null = null,
        previous: DoublyLinkedListNode<T> | null = null,
    ) {
        super(value, key, next);

        this.next = next;
        this.previous = previous;
    }

    fromArray(values: T[]): this {
        let counter = 0;

        if (this.val === undefined) {
            this.val = values[0];
            counter = 1;
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let current: DoublyLinkedListNode<T> | null = this;

        for (let i = counter; i < values.length; i++) {
            const node = new DoublyLinkedListNode(values[i]);

            node.previous = current;
            current.next = node;

            current = node;
        }

        return this;
    }

    reverse(): DoublyLinkedListNode<T> {
        if (!this.val) {
            return this;
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let current: DoublyLinkedListNode<T> | null = this;
        let prev: DoublyLinkedListNode<T> | null = null;

        while (current) {
            const temp = current.next;
            current.next = current.previous;
            current.previous = temp;

            prev = current;
            current = current.previous;
        }

        return prev;
    }
}
