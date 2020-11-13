from data_structures.linked_list.python.singly_linked_list_node import ListNode
from data_structures.linked_list.python.singly_linked_list import SinglyLinkedList


def test_singly_linked_list():
    linked_list = SinglyLinkedList()
    assert linked_list.length == 0
    assert linked_list.head is None
    assert linked_list.tail is None
    assert linked_list.is_empty is True


def test_singly_linked_list_from_array():
    list_nodes = ListNode().from_array([1,2,3,4,5,6])
    linked_list = SinglyLinkedList().from_array([1,2,3,4,5,6])
    current_ll_node = linked_list.head
    current_node = list_nodes

    assert linked_list.length == 6

    while current_ll_node:
        assert current_ll_node.val == current_node.val
        current_ll_node = current_ll_node.next
        current_node = current_node.next


def test_single_linked_list_to_array():
    linked_list = SinglyLinkedList().from_array([1, 2, 3, 4, 5, 6])
    assert linked_list.to_array() == [1,2,3,4,5,6]


def test_single_linked_list_pop():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = SinglyLinkedList().from_array(test_data)

    for i in range(len(test_data))[::-1]:
        assert linked_list.pop() == test_data[i]

    assert linked_list.to_array() == []
    assert linked_list.head is None
    assert linked_list.tail is None


def test_single_linked_list_unshift():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = SinglyLinkedList()

    linked_list.unshift(0)
    assert isinstance(linked_list.head, ListNode)
    assert isinstance(linked_list.tail, ListNode)
    assert linked_list.head == linked_list.tail

    assert linked_list.head.val == 0
    assert linked_list.tail.val == 0
    assert linked_list.length == 1

    length = 1
    for i in range(len(test_data)):
        linked_list.unshift(test_data[i])
        length += 1

        assert linked_list.length == length
        assert linked_list.head.val == test_data[i]

    assert linked_list.to_array() == [6,5,4,3,2,1,0]


def test_single_linked_list_shift():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = SinglyLinkedList().from_array(test_data)

    length = len(test_data)
    assert linked_list.length == length

    for i in range(len(test_data)):
        length -= 1

        assert test_data[i] == linked_list.shift()
        assert length == linked_list.length


def test_single_linked_list_push():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = SinglyLinkedList()

    length = 1
    linked_list.push(0)
    assert isinstance(linked_list.head, ListNode)
    assert isinstance(linked_list.tail, ListNode)
    assert linked_list.head == linked_list.tail
    assert linked_list.head.val == 0
    assert linked_list.tail.val == 0
    assert linked_list.length == length

    for i in test_data:
        linked_list.push(i)
        length += 1
        assert linked_list.head.val == 0
        assert linked_list.tail.val == i
        assert linked_list.length == length


def test_singly_linked_list_find():
    linked_list = SinglyLinkedList()
    linked_list.push(key=1, val="one")
    linked_list.push(key=2, val="two")
    linked_list.push(key=3, val="three")
    linked_list.push(key=4, val="four")

    assert linked_list.find(1).val == "one"
    assert linked_list.find(2).val == "two"
    assert linked_list.find(3).val == "three"
    assert linked_list.find(4).val == "four"