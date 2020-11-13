from typing import Union, Dict, List
from data_structures.stack.pyhton.stack import Stack


class Trie:
    val: str = None
    children: Dict[str, 'Trie']
    is_word: bool = False

    def __init__(self, val: Union[str, None] = None):
        self.val = val
        self.children = {}

    def insert(self, word: str) -> None:
        curr = self
        for char in word:
            curr.children[char] = curr.children[char] if char in curr.children else Trie(char)
            curr = curr.children[char]

        curr.is_word = True

    def search(self, word: str, partial: bool = False) -> bool:
        curr = self.search_node(word)

        if isinstance(curr, Trie):
            return True if partial else curr.is_word

        return False

    def search_node(self, word: str) -> Union['Trie', bool]:
        curr = self

        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]

        return curr

    def starts_with(self, prefix: str) -> bool:
        return self.search(prefix, True)

    def get_all_words(self,prefix: str = '', node: 'Trie' = None) -> List[str]:
        if node is None:
            node = self

        words: List[str] = []
        if not node:
            return words

        if node.is_word:
            words.append(prefix)

        for char in node.children.keys():
            new_words = self.get_all_words(f'{prefix}{char}', node.children[char])
            words = words + new_words

        return words

    def autocomplete(self, prefix: str = '') -> List[str]:
        curr = self.search_node(prefix)
        start_node = curr if isinstance(curr, Trie) else False

        if not start_node:
            return []

        return self.get_all_words(prefix, start_node)

    def remove(self, word: str) -> bool:
        curr = self
        stack = Stack[Trie]()

        for char in word:
            if char not in curr.children:
                return False

            curr = curr.children[char]
            stack.push(curr)

        child: Trie = stack.pop()
        child.is_word = False

        while not stack.is_empty:
            parent: Trie = stack.pop()
            if not child.is_word and not len(child.children.keys()):
                del parent.children[child.val]
            child = parent

        return True
