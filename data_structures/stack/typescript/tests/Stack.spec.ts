import Stack from '@ds/stack/typescript/Stack';

describe('Testing `Stack` data structure', () => {
    let stack: Stack<number> = new Stack();

    beforeEach(() => {
        stack = new Stack();
    });

    it('should create an empty `Stack', () => {
        expect(stack).toBeInstanceOf(Stack);
        expect(stack.length).toBe(0);
    });

    it('should add an element (push) to the Stack', () => {
        expect(stack.push(1)).toBeInstanceOf(Stack);
        expect(stack.length).toBe(1);
        expect(stack.toString()).toBe('1');
    });

    it('should add multiple elements to the Stack', () => {
        stack.push(1).push(2).push(3);
        expect(stack.length).toBe(3);
        expect(stack.toString()).toBe('3,2,1');
    });

    it('should get value of the front of the stack, without removing it', () => {
        stack.push(1).push(2).push(3);
        expect(stack.peek()).toBe(3);
        expect(stack.length).toBe(3);
        expect(stack.peek()).toBe(3);
    });

    it('should remove an element (dequeue) from the Queue', () => {
        stack.push(1).push(2).push(3);
        expect(stack.length).toBe(3);
        expect(stack.pop()).toBe(3);
        expect(stack.length).toBe(2);
        expect(stack.pop()).toBe(2);
        expect(stack.length).toBe(1);
        expect(stack.pop()).toBe(1);
        expect(stack.length).toBe(0);
        expect(stack.pop()).toBeUndefined();
        expect(stack.length).toBe(0);
    });

    it('should create a Stack from array', () => {
        const testData = [1, 2, 3, 4, 5];
        const stack = new Stack().fromArray(testData);

        for (let i = testData.length - 1; i <= 0; i--) {
            expect(testData[i]).toBe(stack.pop());
        }
    });
});
