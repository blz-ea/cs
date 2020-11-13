import LLNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import SinglyLinkedList from '@ds/linked_list/typescript/SinglyLinkedList';

describe('testing singly linked list', () => {
    it('should create empty singly linked list', () => {
        const list = new SinglyLinkedList();
        expect(list).toBeInstanceOf(SinglyLinkedList);
        expect(list.length).toBe(0);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.isEmpty).toBeTruthy();
    });

    it('should create singly linked list from array', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const nodes = new LLNode().fromArray(testData);
        const linkedList = new SinglyLinkedList<number>().fromArray(testData);

        let currentNodes = nodes;
        let currentLinkedList = linkedList.head;
        expect(linkedList.length).toBe(testData.length);
        expect(linkedList.isEmpty).toBeFalsy();

        while (currentLinkedList) {
            expect(currentNodes.val).toBe(currentLinkedList.val);
            currentLinkedList = currentLinkedList.next;
            currentNodes = currentNodes.next;
        }
    });

    it('should convert singly linked list to array', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new SinglyLinkedList<number>().fromArray(testData);

        expect(linkedList.toArray()).toEqual(testData);
    });

    it('should convert singly linked list to string', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new SinglyLinkedList<number>().fromArray(testData);

        expect(linkedList.toString()).toBe('1,2,3,4,5,6');
    });

    it('should remove an item from the end of singly linked list (method `pop`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new SinglyLinkedList<number>().fromArray(testData);
        const length = testData.length;

        for (let i = length - 1; i >= 0; i--) {
            expect(linkedList.pop()).toBe(testData[i]);
        }

        expect(linkedList.pop()).toBe(undefined);
        expect(linkedList.length).toBe(0);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    it('should add an item to the beginning of singly linked list (method `unshift`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new SinglyLinkedList<number>();

        let length = 1;
        expect(linkedList.unshift(0)).toBeInstanceOf(SinglyLinkedList);
        expect(linkedList.head.val).toBe(0);
        expect(linkedList.tail.val).toBe(0);
        expect(linkedList.length).toBe(length);

        for (let i = 0; i < testData.length; i++) {
            linkedList.unshift(testData[i]);
            length++;
            expect(linkedList.length).toBe(length);
            expect(linkedList.head.val).toBe(testData[i]);
            expect(linkedList.tail.val).toBe(0);
        }

        expect(linkedList.length).toBe(length);
        expect(linkedList.head.val).toBe(testData[testData.length - 1]);
        expect(linkedList.tail.val).toBe(0);
    });

    it('should remove an item from the beginning of singly linked list (method `shift`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new SinglyLinkedList<number>().fromArray(testData);
        let length = testData.length;

        for (let i = 0; i < testData.length; i++) {
            expect(linkedList.length).toBe(length);
            expect(linkedList.shift()).toBe(testData[i]);
            length--;
        }

        expect(linkedList.shift()).toBe(undefined);
        expect(linkedList.length).toBe(0);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    it('should add an item to the end of singly linked list (method `push`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new SinglyLinkedList<number>();

        let length = 1;
        expect(linkedList.push(0)).toBeInstanceOf(SinglyLinkedList);
        expect(linkedList.head.val).toBe(0);
        expect(linkedList.tail.val).toBe(0);
        expect(linkedList.length).toBe(length);

        for (let i = 0; i < testData.length; i++) {
            linkedList.push(testData[i]);
            length++;
            expect(linkedList.length).toBe(length);
            expect(linkedList.head.val).toBe(0);
            expect(linkedList.tail.val).toBe(testData[i]);
        }

        expect(linkedList.length).toBe(length);
        expect(linkedList.head.val).toBe(0);
        expect(linkedList.tail.val).toBe(testData[testData.length - 1]);
    });

    it('should be able to search for an node by key', () => {
        const list = new SinglyLinkedList();
        list.push('one', 1).push('two', 2).push('three', 3).push('four', 4);

        expect(list.find(1).val).toBe('one');
        expect(list.find(2).val).toBe('two');
        expect(list.find(3).val).toBe('three');
        expect(list.find(4).val).toBe('four');
    });
});
