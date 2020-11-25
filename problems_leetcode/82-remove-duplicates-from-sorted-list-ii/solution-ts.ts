import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

function removeDuplicatesFromSortedLinkedList(head: SinglyLinkedListNode<number>): SinglyLinkedListNode<number> {
    const dummy = new SinglyLinkedListNode(0);
    dummy.next = head;

    let pre = dummy;
    let cur = head;

    while (cur) {
        if (cur.next && cur.val === cur.next.val) {
            // loop until cur points to the last duplicate
            while (cur && cur.next && cur.val === cur.next.val) {
                cur = cur.next;
            }

            pre.next = cur.next;
        } else {
            pre = pre.next;
        }

        cur = cur.next;
    }

    return dummy.next;
}

export { removeDuplicatesFromSortedLinkedList };
