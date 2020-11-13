import addTwoNumbers from './solution-ts';
import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

describe('Testing `addTowNumbers`', () => {
    test('returns sum of linked lists', () => {
        const l1 = new SinglyLinkedListNode<number>().fromArray([2, 4, 3]);
        const l2 = new SinglyLinkedListNode<number>().fromArray([5, 6, 4]);
        const result = new SinglyLinkedListNode<number>().fromArray([7, 0, 8]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test('returns null with null inputs', () => {
        const l1 = new SinglyLinkedListNode<number>().fromArray([0]);
        const l2 = new SinglyLinkedListNode<number>().fromArray([0]);
        const result = new SinglyLinkedListNode<number>().fromArray([0]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test('returns sum of linked lists with values that have different lengths', () => {
        const l1 = new SinglyLinkedListNode<number>().fromArray([9, 9, 9, 9, 9, 9, 9]);
        const l2 = new SinglyLinkedListNode<number>().fromArray([9, 9, 9, 9]);
        const result = new SinglyLinkedListNode<number>().fromArray([8, 9, 9, 9, 0, 0, 0, 1]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
});
