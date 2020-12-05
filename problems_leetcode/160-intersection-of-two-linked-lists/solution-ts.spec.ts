import SinglyLinkedList from '@ds/linked_list/typescript/SinglyLinkedList';
import { intersectionTwoLinkedLists } from './solution-ts';
import SinglyLinkedListNode from '@ds/linked_list/typescript/SinglyLinkedListNode';

type testCaseType = [string, SinglyLinkedListNode<number>, SinglyLinkedListNode<number>, SinglyLinkedListNode<number>];

const testCase1 = (): testCaseType => {
    /**
       a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗
       b1 → b2 → b3
     */
    const l1 = new SinglyLinkedList<number>().fromArray([3, 4, 1]);
    const l2 = new SinglyLinkedList<number>().fromArray([5, 6, 1]);
    const l1l2 = new SinglyLinkedList<number>().fromArray([3, 4, 5]);

    l1.tail.next = l1l2.head;
    l2.tail.next = l1l2.head;

    const expectedResult = l1l2.head;

    return [
        `should return ListNode(${expectedResult.val}) for linked lists that have intersection and same length`,
        l1.head,
        l2.head,
        expectedResult,
    ];
};

const testCase2 = (): testCaseType => {
    /**
           a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗
       b1 → b2 → b3
     */
    const l1 = new SinglyLinkedList<number>().fromArray([4, 1]);
    const l2 = new SinglyLinkedList<number>().fromArray([5, 6, 1]);
    const l1l2 = new SinglyLinkedList<number>().fromArray([8, 4, 5]);

    l1.tail.next = l1l2.head;
    l2.tail.next = l1l2.head;

    const expectedResult = l1l2.head;

    return [
        `should return ListNode(${expectedResult.val}) for linked lists that have intersection and different length`,
        l1.head,
        l2.head,
        expectedResult,
    ];
};

const testCase3 = (): testCaseType => {
    /**
       a1 → a2 → a3 → null
       b1 → b2 → b3 → null
     */
    const l1 = new SinglyLinkedList<number>().fromArray([4, 1, 5]);
    const l2 = new SinglyLinkedList<number>().fromArray([5, 6, 1]);

    const expectedResult = null;

    return [
        `should return ${expectedResult} for linked lists that have no intersection and same length`,
        l1.head,
        l2.head,
        expectedResult,
    ];
};

const testCase4 = (): testCaseType => {
    /**
       a1 → a2 → a3 → a4 → null
       b1 → b2 → b3 → null
     */
    const l1 = new SinglyLinkedList<number>().fromArray([4, 1, 5, 7]);
    const l2 = new SinglyLinkedList<number>().fromArray([5, 6, 1]);

    const expectedResult = null;

    return [
        `should return ${expectedResult} for linked lists that have no intersection and different length`,
        l1.head,
        l2.head,
        expectedResult,
    ];
};

const testRunData: testCaseType[] = [
    // description | headA | headB | expectedResult
    testCase1(),
    testCase2(),
    testCase3(),
    testCase4(),
];

describe('testing intersection of two linked lists', () => {
    test.each(testRunData)(
        '%p',
        (
            description: string,
            headA: SinglyLinkedListNode<number>,
            headB: SinglyLinkedListNode<number>,
            expectedResult: SinglyLinkedListNode<number>,
        ) => {
            expect(intersectionTwoLinkedLists(headA, headB)).toEqual(expectedResult);
        },
    );
});
