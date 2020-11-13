from data_structures.linked_list.python.doubly_linked_list_node import DoublyLinkedListNode
from data_structures.linked_list.python.doubly_linked_list import DoublyLinkedList


def test_double_linked_list():
    linked_list = DoublyLinkedList()
    assert linked_list.length == 0
    assert linked_list.head is None
    assert linked_list.tail is None
    assert linked_list.is_empty is True


def test_double_linked_list_from_array():
    list_nodes = DoublyLinkedListNode().from_array([1, 2, 3, 4, 5, 6])
    linked_list = DoublyLinkedList().from_array([1, 2, 3, 4, 5, 6])
    current_ll_node = linked_list.head
    current_node = list_nodes

    assert linked_list.length == 6

    while current_ll_node:
        assert current_ll_node.val == current_node.val
        current_ll_node = current_ll_node.next
        current_node = current_node.next


def test_double_linked_list_to_array():
    linked_list = DoublyLinkedList().from_array([1, 2, 3, 4, 5, 6])
    assert linked_list.to_array() == [1, 2, 3, 4, 5, 6]


def test_double_linked_list_pop():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = DoublyLinkedList().from_array(test_data)

    for i in range(len(test_data))[::-1]:
        if i != 0:
            assert linked_list.tail.previous.val == test_data[i - 1];

        assert linked_list.pop() == test_data[i]

    assert linked_list.to_array() == []
    assert linked_list.head is None
    assert linked_list.tail is None


def test_double_linked_list_unshift():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = DoublyLinkedList()

    linked_list.unshift(0)
    assert isinstance(linked_list.head, DoublyLinkedListNode)
    assert isinstance(linked_list.tail, DoublyLinkedListNode)
    assert linked_list.head == linked_list.tail

    assert linked_list.head.val == 0
    assert linked_list.tail.val == 0
    assert linked_list.length == 1

    length = 1
    for i in test_data:
        linked_list.unshift(i)
        length += 1

        assert linked_list.length == length
        assert linked_list.head.val == i

    assert linked_list.to_array() == [6, 5, 4, 3, 2, 1, 0]


def test_double_linked_list_shift():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = DoublyLinkedList().from_array(test_data)

    length = len(test_data)
    assert linked_list.length == length

    for i in range(len(test_data)):
        length -= 1

        assert test_data[i] == linked_list.shift()
        assert length == linked_list.length
        if linked_list.length != 0:
            assert linked_list.head.previous is None


def test_double_linked_list_push():
    test_data = [1, 2, 3, 4, 5, 6]
    linked_list = DoublyLinkedList()

    length = 1
    linked_list.push(0)
    assert isinstance(linked_list.head, DoublyLinkedListNode)
    assert isinstance(linked_list.tail, DoublyLinkedListNode)
    assert linked_list.head == linked_list.tail
    assert linked_list.head.val == 0
    assert linked_list.tail.val == 0
    assert linked_list.length == length

    for i in range(len(test_data)):
        linked_list.push(test_data[i])
        length += 1
        assert linked_list.head.val == 0
        assert linked_list.tail.val == test_data[i]
        if i != 0:
            assert linked_list.tail.previous.val == test_data[i-1]
        assert linked_list.length == length


def test_double_linked_list_find():
    linked_list = DoublyLinkedList()
    linked_list.push(key=1, val="one")
    linked_list.push(key=2, val="two")
    linked_list.push(key=3, val="three")
    linked_list.push(key=4, val="four")

    assert linked_list.find(1).val == "one"
    assert linked_list.find(2).val == "two"
    assert linked_list.find(3).val == "three"
    assert linked_list.find(4).val == "four"


def test_double_linked_list_delete():
    linked_list = DoublyLinkedList()
    linked_list.push(key=1, val=1)
    linked_list.push(key=2, val=2)
    linked_list.push(key=3, val=3)
    linked_list.push(key=4, val=4)

    linked_list.delete(linked_list.find(1))
    assert linked_list.length == 3
    assert linked_list.to_array() == [2,3,4]
    linked_list.delete(linked_list.find(3))
    assert linked_list.length == 2
    assert linked_list.to_array() == [2,4]
    linked_list.delete(linked_list.find(4))
    assert linked_list.length == 1
    assert linked_list.to_array() == [2]
    linked_list.delete(linked_list.find(6))
    assert linked_list.length == 1
    assert linked_list.to_array() == [2]
    linked_list.delete(linked_list.find(2))
    assert linked_list.length == 0
    assert linked_list.to_array() == []
