import Stack from '@ds/stack/typescript/Stack';

/**
 * 1.Minimum value is always followed by the second minimum value
 * (duplicate value of the second minimum value, to ensure that when pop function removes the 2nd min,
 * it does not disrupt the stack order).
 * 2.And while popping you pop min and 2nd min so that, you get the correct min value for the remaining
 * stack and the remaining stack top also points to the right place.
 */
export default class MinStack {
    private min: Stack<number> = new Stack<number>();
    private stack: Stack<number> = new Stack<number>();

    push(x: number): void {
        this.stack.push(x);
        if (this.min.isEmpty) {
            this.min.push(x);
        } else if (this.min.peek() >= x) {
            this.min.push(x);
        }
    }

    pop(): void {
        const popped = this.stack.pop();
        if (!this.min.isEmpty && this.min.peek() === popped) {
            this.min.pop();
        }
    }

    getMin(): number {
        return this.min.peek();
    }

    top(): number {
        return this.stack.peek();
    }
}
