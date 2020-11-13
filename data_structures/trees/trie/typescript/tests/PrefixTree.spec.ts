import PrefixTree from '@ds/trees/trie/typescript/PrefixTree';

describe('Testing Prefix Tree', () => {
    let trie: PrefixTree;

    beforeEach(() => {
        trie = new PrefixTree();
    });

    describe('constructor', () => {
        it('should set default value to undefined', () => {
            expect(trie.val).toBe(undefined);
        });

        it('should initialize with value', () => {
            trie = new PrefixTree('a');
            expect(trie.val).toBe('a');
        });

        it('should initialize with empty children map', () => {
            expect(trie.children).toEqual({});
        });

        it('should not be a word by default', () => {
            expect(trie.isWord).toEqual(false);
        });
    });

    describe('insert', () => {
        it('should insert a word', () => {
            trie.insert('ab');

            expect(trie.children.a).toBeDefined();
            expect(trie.children.a.children.b).toBeDefined();
            expect(trie.children.a.isWord).toEqual(false);
            expect(trie.children.a.children.b.isWord).toEqual(true);
        });

        it('should insert multiple words with the root', () => {
            trie.insert('a');
            trie.insert('ab');
            expect(trie.children.a.isWord).toEqual(true);
            expect(trie.children.a.children.b.isWord).toEqual(true);
        });
    });

    describe('search & startsWith', () => {
        beforeEach(() => {
            trie.insert('dog');
            trie.insert('dogs');
            trie.insert('door');
        });

        it('should search for words', () => {
            expect(trie.search('dog')).toEqual(true);
        });

        it('should not match incomplete words by default', () => {
            expect(trie.search('do')).toEqual(false);
        });

        it('should match partial words if partial is set', () => {
            expect(trie.search('do', true)).toEqual(true);
            expect(trie.startsWith('do')).toEqual(true);
        });

        it('should not match non existing words', () => {
            expect(trie.search('doors')).toEqual(false);
        });

        it('should not match non existing words with partials', () => {
            expect(trie.search('doors', true)).toEqual(false);
            expect(trie.startsWith('doors')).toEqual(false);
        });
    });

    describe('when multiple words are inserted', () => {
        beforeEach(() => {
            trie.insert('dog');
            trie.insert('dogs');
            trie.insert('door');
            trie.insert('day');
            trie.insert('cat');
        });

        describe('getAllWords', () => {
            it('should get all words', () => {
                const words = trie.getAllWords();
                expect(words.length).toEqual(5);
                expect(words).toEqual(['dog', 'dogs', 'door', 'day', 'cat']);
            });

            it('should use prefix', () => {
                const words = trie.getAllWords("John's ");
                expect(words.length).toEqual(5);
                expect(words).toEqual(["John's dog", "John's dogs", "John's door", "John's day", "John's cat"]);
            });
        });

        describe('autocomplete', () => {
            it('should return all words if not prefix is given', () => {
                const words = trie.autoComplete();
                expect(words.length).toBe(5);
                expect(words).toEqual(['dog', 'dogs', 'door', 'day', 'cat']);
            });

            it('should autocomplete words given a prefix', () => {
                const words = trie.autoComplete('do');
                expect(words.length).toBe(3);
                expect(words).toEqual(['dog', 'dogs', 'door']);
            });

            it('should handle non-existing words prefixes', () => {
                const words = trie.autoComplete('co');
                expect(words.length).toBe(0);
                expect(words).toEqual([]);
            });
        });

        describe('remove', () => {
            it('should remove a word', () => {
                trie = new PrefixTree();
                trie.insert('a');
                expect(trie.remove('a')).toEqual(true);
                expect(trie.getAllWords()).toEqual([]);
            });

            it('should remove word and keep others', () => {
                trie = new PrefixTree();
                trie.insert('a');
                trie.insert('ab');
                expect(trie.remove('a')).toEqual(true);
                expect(trie.getAllWords()).toEqual(['ab']);
            });

            it('should remove surrounding word', () => {
                trie = new PrefixTree();
                trie.insert('a');
                trie.insert('ab');
                expect(trie.remove('ab')).toEqual(true);
                expect(trie.getAllWords()).toEqual(['a']);
            });

            it('should remove false when word is not found', () => {
                expect(trie.remove('not found')).toEqual(false);
            });

            it('should remove words in between and still match', () => {
                expect(trie.remove('dog')).toBe(true);
                expect(trie.search('dogs')).toBe(true);
                expect(trie.startsWith('dog')).toBe(true);
                expect(trie.getAllWords()).toEqual(['dogs', 'door', 'day', 'cat']);
            });

            it('should remove word and no longer match partials', () => {
                expect(trie.remove('dogs')).toBe(true);
                expect(trie.search('dogs')).toBe(false);
                expect(trie.search('dog')).toBe(true);
                expect(trie.startsWith('dog')).toBe(true);
                expect(trie.getAllWords()).toEqual(['dog', 'door', 'day', 'cat']);
            });
        });
    });
});
