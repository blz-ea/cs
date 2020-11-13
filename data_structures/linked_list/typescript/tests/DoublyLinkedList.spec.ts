import DoublyLinkedList from '@ds/linked_list/typescript/DoublyLinkedList';
import LLNode from '@ds/linked_list/typescript/DoublyLinkedListNode';
import SinglyLinkedList from '@ds/linked_list/typescript/SinglyLinkedList';

describe('testing doubly linked list', () => {
    it('should create empty doubly linked list', () => {
        const list = new DoublyLinkedList();
        expect(list).toBeInstanceOf(DoublyLinkedList);
        expect(list.length).toBe(0);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.isEmpty).toBeTruthy();
    });

    it('should create singly linked list from array', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const nodes = new LLNode().fromArray(testData);
        const linkedList = new DoublyLinkedList<number>().fromArray(testData);

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

    it('should convert doubly linked list to array', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new DoublyLinkedList<number>().fromArray(testData);

        expect(linkedList.toArray()).toEqual(testData);
    });

    it('should convert doubly linked list to string', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new DoublyLinkedList<number>().fromArray(testData);

        expect(linkedList.toString()).toBe('1,2,3,4,5,6');
    });

    it('should remove an item from the end of doubly linked list (method `pop`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new DoublyLinkedList<number>().fromArray(testData);
        const length = testData.length;

        for (let i = length - 1; i >= 0; i--) {
            expect(linkedList.pop()).toBe(testData[i]);
            if (linkedList.length !== 0) {
                expect(linkedList.tail.next).toBeNull();
            }
        }

        expect(linkedList.pop()).toBe(undefined);
        expect(linkedList.length).toBe(0);
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    });

    it('should add an item to the beginning of doubly linked list (method `unshift`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new DoublyLinkedList<number>();

        let length = 1;
        expect(linkedList.unshift(0)).toBeInstanceOf(DoublyLinkedList);
        expect(linkedList.head.val).toBe(0);
        expect(linkedList.tail.val).toBe(0);
        expect(linkedList.length).toBe(length);

        for (let i = 0; i < testData.length; i++) {
            linkedList.unshift(testData[i]);
            length++;
            expect(linkedList.length).toBe(length);
            expect(linkedList.head.val).toBe(testData[i]);
            expect(linkedList.head.next.previous).toEqual(linkedList.head);
            expect(linkedList.tail.val).toBe(0);
        }

        expect(linkedList.length).toBe(length);
        expect(linkedList.head.val).toBe(testData[testData.length - 1]);
        expect(linkedList.tail.val).toBe(0);
    });

    it('should remove an item from the beginning of doubly linked list (method `shift`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new DoublyLinkedList<number>().fromArray(testData);
        let length = testData.length;

        for (let i = 0; i < testData.length; i++) {
            expect(linkedList.length).toBe(length);
            expect(linkedList.head.previous).toBeNull();
            expect(linkedList.shift()).toBe(testData[i]);

            if (linkedList.length !== 0) {
                expect(linkedList.head.val).toBe(testData[i + 1]);
            }

            length--;
        }

        expect(linkedList.shift()).toBe(undefined);
        expect(linkedList.length).toBe(0);
        expect(linkedList.head).toBeNull();
    });

    it('should add an item to the end of doubly linked list (method `push`)', () => {
        const testData = [1, 2, 3, 4, 5, 6];
        const linkedList = new DoublyLinkedList<number>();

        let length = 1;
        expect(linkedList.push(0)).toBeInstanceOf(DoublyLinkedList);
        expect(linkedList.head.val).toBe(0);
        expect(linkedList.tail.val).toBe(0);
        expect(linkedList.length).toBe(length);

        for (let i = 0; i < testData.length; i++) {
            linkedList.push(testData[i]);
            length++;
            expect(linkedList.length).toBe(length);
            expect(linkedList.head.val).toBe(0);
            expect(linkedList.tail.val).toBe(testData[i]);
            expect(linkedList.tail.previous.val).toBe(i === 0 ? 0 : testData[i - 1]);
        }

        expect(linkedList.length).toBe(length);
        expect(linkedList.head.val).toBe(0);
        expect(linkedList.tail.val).toBe(testData[testData.length - 1]);
        expect(linkedList.tail.previous.val).toBe(testData[testData.length - 2]);
    });

    it('should be able to remove nodes from doubly linked list (method `delete`)', () => {
        const list = new DoublyLinkedList();
        list.push(1, 1).push(2, 2).push(3, 3).push(4, 4);

        list.delete(list.find(1));
        expect(list.length).toBe(3);
        expect(list.toArray()).toEqual([2, 3, 4]);

        list.delete(list.find(0));
        expect(list.length).toBe(3);
        expect(list.toArray()).toEqual([2, 3, 4]);

        list.delete(list.find(3));
        expect(list.length).toBe(2);
        expect(list.toArray()).toEqual([2, 4]);

        list.delete(list.find(4));
        expect(list.length).toBe(1);
        expect(list.toArray()).toEqual([2]);

        list.delete(list.find(2));
        expect(list.length).toBe(0);
        expect(list.toArray()).toEqual([]);
    });
});
