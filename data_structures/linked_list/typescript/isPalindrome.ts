import ListNode from './SinglyLinkedListNode';

/**
 * Checks if given linked list is palindrome
 */
function isPalindrom<T>(head: ListNode<T>): boolean {
    if (!head || !head.next) {
        return true;
    }

    if (!head.next.next) {
        return head.val === head.next.val;
    }

    const stack = head.toArray();

    let i = 0;
    let j = stack.length - 1;

    while (i <= j) {
        if (stack[i] !== stack[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

export default isPalindrom;
