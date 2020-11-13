import ListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import removeNthFromEnd from './solution-ts';

const node1 = new ListNode<number>(1);
const node2 = new ListNode<number>(2);
const node3 = new ListNode<number>(3);
const node4 = new ListNode<number>(4);
const node5 = new ListNode<number>(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const head = node1;

test('remove nth node from the end singly linked list', () => {
    removeNthFromEnd<number>(head, 2);
    expect(node3.next).toEqual(node5);
    expect(node3.next.val).toBe(5);
});
