from data_structures.linked_list.python.singly_linked_list_node import ListNode


def test_list_node():
    node = ListNode()
    assert hasattr(node, "val") is True
    assert hasattr(node, "key") is True
    assert node.val is None
    assert node.key is None

    assert hasattr(node, "next") is True
    assert node.next is None


def test_list_node_with_value():
    node = ListNode(1)
    assert node.val == 1
    assert node.key is None


def test_list_node_with_key_and_value():
    node = ListNode(key=1, val="value")
    assert node.val == "value"
    assert node.key == 1


def test_list_node_with_next():
    node1 = ListNode(1)
    node2 = ListNode(2)

    node1.next = node2

    assert node1.val == 1
    assert node2.val == 2
    assert node1.next == node2
    assert node2.next is None


def test_list_node_from_array():
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    node5 = ListNode(5)

    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5

    nodes = ListNode().from_array([1, 2, 3, 4, 5])

    h1 = nodes
    h2 = node1
    while h1 or h2:
        assert h1.val == h2.val
        h1 = h1.next
        h2 = h2.next


def test_list_node_to_array():
    nodes = ListNode(0).from_array([1, 2, 3, 4, 5])
    assert nodes.to_array() == [0, 1, 2, 3, 4, 5]


def test_list_node_reverse():
    nodes = ListNode().from_array([1, 2, 3, 4, 5])
    assert nodes.reverse().to_array() == [5, 4, 3, 2, 1]
