from data_structures.hash_table.python.hash_table import HashTable


def test_empty_hash_table():
    ht = HashTable()
    assert isinstance(ht, HashTable) is True

    ht = HashTable(2)
    assert ht.size == 2
    assert len(ht.table) == 2


def test_hash_func():
    ht = HashTable()
    keys = ['One', 1, [], {}, 0.1]

    for key in keys:
        hashed_key = ht.hash(key)
        assert isinstance(hashed_key, int) is True
        assert (0 <= hashed_key <= ht.size) is True


def test_put():
    ht = HashTable()
    assert isinstance(ht.put(1, "One"), HashTable)
    assert isinstance(ht.put(2, "Two"), HashTable)
    assert isinstance(ht.put(3, "Three"), HashTable)
    assert isinstance(ht.put(4, "Four"), HashTable)


def test_update():
    ht = HashTable().from_array([(1, "One"), (2, "Two")])
    ht.put(1, "One_Updated")
    ht.put(2, "Two_Updated")
    assert ht.get(1) == "One_Updated"
    assert ht.get(2) == "Two_Updated"


def test_get():
    ht = HashTable()
    ht.put(1, "One").put(2, "Two").put(3, "Three").put(4, "Four")

    assert ht.get(1) == "One"
    assert ht.get(2) == "Two"
    assert ht.get(3) == "Three"
    assert ht.get(4) == "Four"


def test_from_array():
    test_data = [(1,"One"), (2, "Two"), (3, "Three"), (4, "Four")]
    ht = HashTable().from_array(test_data)
    assert ht.get(1) == "One"
    assert ht.get(2) == "Two"
    assert ht.get(3) == "Three"
    assert ht.get(4) == "Four"


def test_remove():
    test_data = [
        (1, "One"),
        (2, "Two"),
        (3, "Three"),
        (4, "Four"),
        ([], "Three"),
        ({}, "Four"),
    ]
    ht = HashTable().from_array(test_data)

    for key_val in test_data:
        key, val = key_val[0], key_val[1]
        assert ht.get(key) == val
        assert ht.remove(key) == val
        assert ht.get(key) is None


def test_put_and_get_different_types():
    test_data = [
        (1, "One"),
        ("Two", "Two"),
        ([], "Three"),
        ({}, "Four"),
        (0.5, "Five"),
        ("Six", []),
    ]
    ht = HashTable().from_array(test_data)

    for key_val in test_data:
        key, val = key_val[0], key_val[1]
        assert ht.get(key) == val
