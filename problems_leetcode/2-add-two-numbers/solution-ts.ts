import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

const addTwoNumbers = (
    l1: SinglyLinkedListNode<number>,
    l2: SinglyLinkedListNode<number>,
): SinglyLinkedListNode<number> => {
    let carry = 0;
    const result = new SinglyLinkedListNode(0);
    let p = result;

    while (l1 != null || l2 != null || carry != 0) {
        if (l1 != null) {
            carry += l1.val;
            l1 = l1.next;
        }

        if (l2 != null) {
            carry += l2.val;
            l2 = l2.next;
        }

        p.next = new SinglyLinkedListNode<number>(carry % 10);
        carry = Math.floor(carry / 10);
        p = p.next;
    }

    return result.next;
};

export default addTwoNumbers;
