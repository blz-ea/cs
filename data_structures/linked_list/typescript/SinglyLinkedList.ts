import LLNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import { ILinkedList, ILinkedListNode, Nullable, Undefined } from './types';

export default class SinglyLinkedList<T> implements ILinkedList<T> {
    public length = 0;
    public head: Nullable<LLNode<T>>;
    public tail: Nullable<LLNode<T>>;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    get isEmpty(): boolean {
        return !this.head;
    }

    toString(): string {
        return this.toArray().toString();
    }

    toArray(): T[] {
        if (this.isEmpty) {
            return [];
        }

        return this.head.toArray();
    }

    fromArray(array: T[]): this {
        const nodes = new LLNode<T>().fromArray(array);

        let tail = nodes;

        while (tail.next) {
            tail = tail.next;
        }

        this.head = nodes;
        this.tail = tail;
        this.length = array.length;

        return this;
    }

    /**
     * Removes an item from the end of Linked List
     */
    pop(): Undefined<T> {
        /**
         * If there is nothing on the list return undefined
         * Loop through until you get to the tail
         * Set the next property of the 2nd to last node to be null
         * Set the tail to be the 2nd to last node
         * Decrement the length
         * Return the value of the node removed
         */
        if (this.isEmpty) {
            return undefined;
        }

        let current = this.head;
        let newTail = this.tail;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;

        if (this.tail) {
            this.tail.next = null;
        }

        this.length--;

        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }

        return current.val;
    }

    /**
     * Appends new Node to the beginning of the list
     * @param value Value to be set on a node
     * @param key Key to be set on a node
     */
    unshift(value: T, key?: number | string): this {
        const node = new LLNode<T>(value, key);

        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    /**
     * Removes Node from beginning
     * Returns removed Node or undefined
     */
    shift(): T {
        if (this.isEmpty) {
            return undefined;
        }

        const currentHead = this.head;
        this.head = currentHead.next;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentHead.val;
    }

    /**
     * Creates new Node using passed value
     * @param value Value to be set on a node
     * @param key Key to be set on a node
     */
    push(value: T, key?: number | string): this {
        /**
         * Create a new Node
         * Edge case: If there is no Head or Tail
         *  set then set Head and Tail to be newly created node
         *  Otherwise set the next property on the tail
         *  and tail property to be newly created node
         */
        const node = new LLNode<T>(value, key);

        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    find(key: number | string): ILinkedListNode<T> {
        if (this.isEmpty) {
            return null;
        }

        let current = this.head;

        while (current.key != key) {
            if (current.next) {
                current = current.next;
            } else {
                return null;
            }
        }

        return current;
    }
}
