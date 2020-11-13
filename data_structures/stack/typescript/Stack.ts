import SinglyLinkedList from '@ds/linked_list/typescript/SinglyLinkedList';

export default class Stack<T> {
    private stack = new SinglyLinkedList<T>();

    push(value: T): this {
        this.stack.unshift(value);
        return this;
    }

    pop(): T {
        return this.stack.shift();
    }

    peek(): T {
        return this.stack.head.val;
    }

    fromArray(values: T[]): this {
        if (!values || values.length == 0) {
            return this;
        }

        for (const el of values) {
            this.push(el);
        }

        return this;
    }

    toString(): string {
        return this.stack.toString();
    }

    toArray(): T[] {
        return this.stack.toArray();
    }

    get length(): number {
        return this.stack.length;
    }

    get isEmpty(): boolean {
        return this.stack.isEmpty;
    }
}
