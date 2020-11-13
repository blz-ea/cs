import ListNode from './SinglyLinkedListNode';

export function mergeSortedLists<T>(l1: ListNode<T>, l2: ListNode<T>): ListNode<T> {
    const result = new ListNode<T>();
    let temp = result;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }

        temp = temp.next;
    }

    if (l1 === null) temp.next = l2;
    if (l2 === null) temp.next = l1;

    return result.next;
}

export default mergeSortedLists;
