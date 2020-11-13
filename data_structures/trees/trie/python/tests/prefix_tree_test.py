import pytest
import sys
from data_structures.trees.trie.python.prefix_tree import Trie


@pytest.fixture
def empty_trie() -> Trie:
    return Trie()


@pytest.fixture
def trie_with_values() -> Trie:
    t = Trie()
    t.insert('dog')
    t.insert('dogs')
    t.insert('door')

    return t


@pytest.fixture
def trie_with_different_values() -> Trie:
    t = Trie()
    t.insert('dog')
    t.insert('dogs')
    t.insert('door')
    t.insert('day')
    t.insert('cat')

    return t


def test_trie_constructor(empty_trie: Trie):
    t = empty_trie
    assert isinstance(t, Trie) is True
    assert t.val is None
    t = Trie('a')
    assert t.val == 'a'
    assert t.children == {}
    assert t.is_word is False


def test_trie_insert_word(empty_trie: Trie):
    t = empty_trie
    t.insert('ab')
    assert isinstance(t.children['a'], Trie) is True
    assert isinstance(t.children['a'].children['b'], Trie) is True
    assert t.children['a'].is_word is False
    assert t.children['a'].children['b'].is_word is True


def test_trie_search(trie_with_values: Trie):
    t = trie_with_values
    assert t.search('dog') is True
    assert t.search('do') is False
    assert t.search('do', partial=True) is True
    assert t.starts_with('do') is True
    assert t.search('doors') is False
    assert t.search('doors', partial=True) is False
    assert t.starts_with('doors') is False


def test_trie_with_multiple_words(trie_with_values: Trie):
    t = trie_with_values
    words = t.get_all_words()
    assert len(words) == 3
    assert words == ['dog', 'dogs', 'door']

    words = t.get_all_words("John's ")
    assert len(words) == 3
    assert words == ["John's dog", "John's dogs", "John's door"]


def test_trie_autocomplete(trie_with_different_values: Trie):
    t = trie_with_different_values
    words = t.autocomplete()
    assert len(words) == 5
    assert words == ['dog', 'dogs', 'door', 'day', 'cat']

    words = t.autocomplete('do')
    assert len(words) == 3
    assert words == ['dog', 'dogs', 'door']

    words = t.autocomplete('co')
    assert len(words) == 0
    assert words == []


def test_trie_remove():
    t = Trie()
    t.insert('a')

    assert t.remove('a') is True
    assert t.get_all_words() == []

    t = Trie()
    t.insert('a')
    t.insert('ab')

    assert t.remove('a') is True
    assert t.get_all_words() == ['ab']

    t = Trie()
    t.insert('a')
    t.insert('ab')

    assert t.remove('ab') is True
    assert t.get_all_words() == ['a']


def test_trie_remove_between(trie_with_different_values: Trie):
    t = trie_with_different_values

    assert t.remove('dog') is True
    assert t.search('dogs') is True
    assert t.starts_with('dog') is True
    assert t.get_all_words() == ['dogs', 'door', 'day', 'cat']


def test_trie_remove_and_no_match_partials(trie_with_different_values: Trie):
    t = trie_with_different_values

    assert t.remove('dogs') is True
    assert t.search('dogs') is False
    assert t.search('dog') is True
    assert t.starts_with('dog') is True
    assert t.get_all_words() == ['dog', 'door', 'day', 'cat']


if __name__ == '__main__':
    pytest.main(sys.argv)