# Trie #

A prefix tree is also known as a Trie; it is used to optimize the search complexities. If we search keys or words in a Binary Search Tree (BST) then the time complexity could go up to O (M * log N) whereas M is length of the words inserted and N is the total number of words inserted in the tree. However, when the prefix tree is used the search time complexity is reduced to O(M).

## Applications ##

- Autocomplete
- Spell checker
- IP routing
- T9 predictive text
- Solving word games

## Complexity ##

- Time complexity : O(M), where m is the key length.
In each iteration of the algorithm, we either examine or create a node in the trie till we reach the end of the key. This takes only mm operations.

- Space complexity : O(M).
In the worst case newly inserted key doesn't share a prefix with the the keys already inserted in the trie. We have to add mm new nodes, which takes us O(m)O(m) space.

