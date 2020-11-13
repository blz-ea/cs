import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import isPalindrome from '@ds/linked_list/typescript/isPalindrome';

test('linked list is palindrome', () => {
    let nodes = new SinglyLinkedListNode().fromArray([1, 2, 2, 1]);
    expect(isPalindrome(nodes)).toBe(true);

    nodes = new SinglyLinkedListNode().fromArray([1, 2]);
    expect(isPalindrome(nodes)).toBe(false);

    nodes = new SinglyLinkedListNode().fromArray([1]);
    expect(isPalindrome(nodes)).toBe(true);
});
