import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

export const intersectionTwoLinkedLists = (
    headA: SinglyLinkedListNode<number>,
    headB: SinglyLinkedListNode<number>,
): SinglyLinkedListNode<number> => {
    if (headA === null || headB === null) {
        return null;
    }
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
};
