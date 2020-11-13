import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';
import mergeSortedLinkedLists from '@ds/linked_list/typescript/mergeSortedLinkedLists';

test('merge two sorted linked lists', () => {
    const l1 = new SinglyLinkedListNode().fromArray([1, 2, 3, 4, 5]);
    const l2 = new SinglyLinkedListNode().fromArray([1, 2, 3, 4, 5]);

    expect(mergeSortedLinkedLists(l1, l2).toArray()).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
});
