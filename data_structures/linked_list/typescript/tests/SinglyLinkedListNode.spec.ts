import SinglyLinkedListNode from '../SinglyLinkedListNode';

describe('testing singly linked list node', () => {
    it('creates empty list node', () => {
        const node = new SinglyLinkedListNode();
        expect(node.val).toBe(undefined);
        expect(node.key).toBe(null);
        expect(node.next).toBe(null);
    });

    it('creates node with value', () => {
        const node = new SinglyLinkedListNode(1);
        expect(node.val).toBe(1);
        expect(node.next).toBe(null);
    });

    it('creates a node with with value and next value', () => {
        const next = new SinglyLinkedListNode(2);
        const node = new SinglyLinkedListNode(1, null, next);

        expect(node.next).toEqual(next);
    });

    it('links two nodes together', () => {
        const node1 = new SinglyLinkedListNode(1);
        const node2 = new SinglyLinkedListNode(2);

        node1.next = node2;

        expect(node1.next).toEqual(node2);
        expect(node2.next).toBe(null);
    });

    it('creates a singly linked list from array', () => {
        const nodes = new SinglyLinkedListNode().fromArray([1, 2, 3, 4, 5]);

        const node1 = new SinglyLinkedListNode(1);
        const node2 = new SinglyLinkedListNode(2);
        const node3 = new SinglyLinkedListNode(3);
        const node4 = new SinglyLinkedListNode(4);
        const node5 = new SinglyLinkedListNode(5);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;

        expect(nodes).toEqual(node1);
    });

    it('converts linked list to array', () => {
        const testData = [1, 2, 3, 4, 5];
        const nodes = new SinglyLinkedListNode().fromArray(testData);
        expect(nodes.toArray()).toEqual(testData);
    });

    it('reverses singly linked list', () => {
        const testData = [1, 2, 3, 4, 5];
        const nodes = new SinglyLinkedListNode().fromArray([...testData].reverse());
        const reversed = new SinglyLinkedListNode().fromArray(testData).reverse();

        expect(nodes).toEqual(reversed);
    });
});
