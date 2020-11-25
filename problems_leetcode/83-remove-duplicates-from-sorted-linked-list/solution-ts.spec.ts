import { removeDuplicatesFromSortedLinkedList } from './solution-ts';
import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

describe('Testing remove duplicates from sorted linked list', () => {
    test('should remove duplicates from sorted linked list with few nodes', () => {
        const input = new SinglyLinkedListNode<number>().fromArray([1, 1, 2]);
        const output = new SinglyLinkedListNode<number>().fromArray([1, 2]);

        expect(removeDuplicatesFromSortedLinkedList(input)).toEqual(output);
        expect(input).toEqual(output);
    });

    test('should remove duplicates from sorted linked list with many nodes', () => {
        const input = new SinglyLinkedListNode<number>().fromArray([1, 1, 2, 3, 3]);
        const output = new SinglyLinkedListNode<number>().fromArray([1, 2, 3]);

        expect(removeDuplicatesFromSortedLinkedList(input)).toEqual(output);
        expect(input).toEqual(output);
    });
});
