import { ILinkedListNode } from '@ds/linked_list/typescript/types';

export default class SinglyListNode<T> implements ILinkedListNode<T> {
    val: T;
    next: SinglyListNode<T> | null = null;
    key: number | string;

    constructor(val: T = undefined, key: number | string = null, next: SinglyListNode<T> | null = null) {
        this.val = val;
        this.next = next;
        this.key = key;
    }

    /**
     * Create a sningly linked list from array
     * @param vals: array of values
     */
    fromArray(vals: T[]): this {
        let counter = 0;
        if (this.val === undefined) {
            this.val = vals[0];
            counter = 1;
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let current: SinglyListNode<T> | null = this;

        for (let i = counter; i < vals.length; i++) {
            const node = new SinglyListNode<T>(vals[i], null);
            current.next = node;
            current = node;
        }

        return this;
    }

    /**
     * Convert singly linked list to array
     */
    toArray(): T[] {
        const result: T[] = [];

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let current: ILinkedListNode<T> | null = this;

        while (current) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }

    /**
     * Reverse singly linked list and return new head
     */
    reverse(): SinglyListNode<T> {
        if (!this.val) {
            return this;
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let current: SinglyListNode<T> | null = this;
        let next: SinglyListNode<T> | null = null;
        let prev: SinglyListNode<T> | null = null;

        while (current) {
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }

        return prev;
    }
}
