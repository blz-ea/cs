from data_structures.linked_list.python.doubly_linked_list_node import DoublyLinkedListNode


def test_list_node():
    node = DoublyLinkedListNode()
    assert hasattr(node, "val") is True
    assert hasattr(node, "key") is True
    assert node.val is None
    assert node.key is None

    assert hasattr(node, "next") is True
    assert hasattr(node, "previous") is True
    assert node.next is None
    assert node.previous is None


def test_list_node_with_next_and_previous():
    node1 = DoublyLinkedListNode(1)
    node2 = DoublyLinkedListNode(2)

    node1.next = node2
    node2.previous = node1

    assert node1.val == 1
    assert node2.val == 2
    assert node1.next == node2
    assert node2.next is None
    assert node2.previous is node1


def test_list_node_from_array():
    node1 = DoublyLinkedListNode(1)
    node2 = DoublyLinkedListNode(2)
    node3 = DoublyLinkedListNode(3)
    node4 = DoublyLinkedListNode(4)
    node5 = DoublyLinkedListNode(5)

    node1.next = node2
    node2.next = node3
    node2.previous = node1
    node3.next = node4
    node3.previous = node2
    node4.next = node5
    node4.previous = node3

    nodes = DoublyLinkedListNode().from_array([1, 2, 3, 4, 5])

    h1 = nodes
    h2 = node1
    while h1 or h2:
        assert h1.val == h2.val
        h1 = h1.next
        h2 = h2.next


def test_list_node_to_array():
    nodes = DoublyLinkedListNode(0).from_array([1, 2, 3, 4, 5])
    assert nodes.to_array() == [0, 1, 2, 3, 4, 5]


def test_list_node_reverse():
    nodes = DoublyLinkedListNode().from_array([1, 2, 3, 4, 5])
    assert nodes.reverse().to_array() == [5, 4, 3, 2, 1]


