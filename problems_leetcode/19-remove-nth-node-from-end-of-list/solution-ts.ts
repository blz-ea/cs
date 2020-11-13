import ListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

export default function removeNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
    if (!head) return null;

    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        if (fast.next) {
            fast = fast.next;
        }
    }

    if (fast === null) {
        head = head.next;
        return head;
    }

    while (fast.next) {
        if (fast.next) {
            fast = fast.next;
        }

        if (slow.next) {
            slow = slow.next;
        }
    }

    slow.next = slow.next.next;

    return head;
}
