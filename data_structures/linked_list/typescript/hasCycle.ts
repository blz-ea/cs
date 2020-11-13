import ListNode from './SinglyLinkedListNode';

/**
 * Checks if given linked list has cycle
 */
export default function hasCycle<T>(head: ListNode<T>): boolean {
    if (!head) {
        return false;
    }

    if (head === head.next) {
        return true;
    }

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
}
