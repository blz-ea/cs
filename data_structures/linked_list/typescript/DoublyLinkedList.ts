import { ILinkedList, ILinkedListNode, Nullable, Undefined } from '@ds/linked_list/typescript/types';
import SinglyLinkedList from '@ds/linked_list/typescript/SinglyLinkedList';
import DoublyLinkedListNode from '@ds/linked_list/typescript/DoublyLinkedListNode';

export default class DoublyLinkedList<T> extends SinglyLinkedList<T> implements ILinkedList<T> {
    public head: Nullable<DoublyLinkedListNode<T>>;
    public tail: Nullable<DoublyLinkedListNode<T>>;
    length = 0;

    constructor() {
        super();
        this.head = null;
        this.tail = null;
    }

    pop(): Undefined<T> {
        if (this.isEmpty) {
            return undefined;
        }

        const current = this.tail;
        this.tail = this.tail.previous;

        if (this.tail) {
            this.tail.next = null;
        }

        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return current.val;
    }

    unshift(value: T, key?: number | string): this {
        const node = new DoublyLinkedListNode<T>(value, key);

        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }

        this.length++;
        return this;
    }

    shift(): T {
        if (this.isEmpty) {
            return undefined;
        }

        const currentHead = this.head;
        this.head = currentHead.next;

        if (this.head) {
            this.head.previous = null;
        }

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentHead.val;
    }

    push(value: T, key?: number | string): this {
        const node = new DoublyLinkedListNode(value, key);
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;

            this.tail = node;
        }

        this.length++;
        return this;
    }

    fromArray(array: T[]): this {
        const nodes = new DoublyLinkedListNode<T>().fromArray(array);

        let tail = nodes;

        while (tail.next) {
            tail = tail.next;
        }

        this.head = nodes;
        this.tail = tail;
        this.length = array.length;

        return this;
    }

    delete(node: ILinkedListNode<T>): void {
        if (this.isEmpty || !node) {
            return;
        }

        if (node === this.head) {
            this.shift();
            return;
        }

        if (node === this.tail) {
            this.pop();
            return;
        }

        node.previous.next = node.next;
        node.next.previous = node.previous;

        this.length--;
    }
}
