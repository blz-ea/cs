import { removeDuplicatesFromSortedLinkedList } from './solution-ts';
import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

describe('Testing `removeDuplicatesFromSortedLinkedList`', () => {
    it('should remove duplicates from sorted linked list with few nodes', () => {
        const input = new SinglyLinkedListNode<number>().fromArray([1, 1, 1, 2, 3]);
        const output = new SinglyLinkedListNode<number>().fromArray([2, 3]);

        expect(removeDuplicatesFromSortedLinkedList(input)).toEqual(output);
    });
    it('should remove duplicates from sorted linked list with more nodes', () => {
        const input = new SinglyLinkedListNode<number>().fromArray([1, 2, 3, 3, 4, 4, 5]);
        const output = new SinglyLinkedListNode<number>().fromArray([1, 2, 5]);

        expect(removeDuplicatesFromSortedLinkedList(input)).toEqual(output);
    });
});
