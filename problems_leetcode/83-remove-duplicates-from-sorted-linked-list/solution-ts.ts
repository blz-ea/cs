import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

function removeDuplicatesFromSortedLinkedList(head: SinglyLinkedListNode<number>): SinglyLinkedListNode<number> {
    if (!head || !head.next) {
        return head;
    }

    let list = head;

    while (list.next != null) {
        if (list.val === list.next.val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }

    return head;
}

export { removeDuplicatesFromSortedLinkedList };
