import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import hasCycle from '@ds/linked_list/typescript/hasCycle';

describe('Testing if linked list has a cycle `hasCycle', () => {
    // it('checks if simple linked list have a cycle', () => {
    //     const node = new SinglyLinkedListNode(1, new SinglyLinkedListNode(2));
    //     expect(hasCycle(node)).toBe(false);
    // });

    it('checks if multi node linked list has cycle', () => {
        const node1 = new SinglyLinkedListNode(1);
        const node2 = new SinglyLinkedListNode(2);
        const node3 = new SinglyLinkedListNode(3);
        const node4 = new SinglyLinkedListNode(4);
        const node5 = new SinglyLinkedListNode(5);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = node1;

        expect(hasCycle(node1)).toBe(true);
    });
});
