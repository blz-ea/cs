import DoublyLinkedListNode from '../DoublyLinkedListNode';

describe('testing doubly linked list node', () => {
    it('creates empty node', () => {
        const node = new DoublyLinkedListNode();
        expect(node.val).toBe(undefined);
        expect(node.next).toBe(null);
    });

    it('creates node with value', () => {
        const node = new DoublyLinkedListNode(1);
        expect(node.val).toBe(1);
        expect(node.next).toBe(null);
    });

    it('creates a node with with value and next value', () => {
        const next = new DoublyLinkedListNode(2);
        const node = new DoublyLinkedListNode(1, null, next);

        expect(node.next).toEqual(next);
    });

    it('links two nodes together', () => {
        const node1 = new DoublyLinkedListNode(1);
        const node2 = new DoublyLinkedListNode(2);

        node1.next = node2;
        node2.previous = node1;

        expect(node1.next).toEqual(node2);
        expect(node1.previous).toEqual(null);
        expect(node2.previous).toBe(node1);
        expect(node2.next).toBe(null);
    });

    it('creates a doubly linked list from array', () => {
        const nodes = new DoublyLinkedListNode().fromArray([1, 2, 3, 4, 5]);

        const node1 = new DoublyLinkedListNode(1);
        const node2 = new DoublyLinkedListNode(2);
        const node3 = new DoublyLinkedListNode(3);
        const node4 = new DoublyLinkedListNode(4);
        const node5 = new DoublyLinkedListNode(5);

        node1.next = node2;
        node2.previous = node1;
        node2.next = node3;
        node3.previous = node2;
        node3.next = node4;
        node4.previous = node3;
        node4.next = node5;
        node5.previous = node4;

        expect(nodes).toEqual(node1);
    });

    it('converts linked list to array', () => {
        const testData = [1, 2, 3, 4, 5];
        const nodes = new DoublyLinkedListNode().fromArray(testData);
        expect(nodes.toArray()).toEqual(testData);
    });

    it('reverses doubly linked list', () => {
        const testData = [1, 2, 3, 4, 5];
        const nodes = new DoublyLinkedListNode().fromArray([...testData].reverse());
        const reversed = new DoublyLinkedListNode().fromArray(testData).reverse();

        expect(nodes).toEqual(reversed);
    });
});
