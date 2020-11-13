/**
Example representation
Trie {
    val: 'o'
    children: {
        w: Trie {
            val: 'w'
            children: {
                l: Trie {
                    val: 'l'
                    children: {}
                    isWord = true
                }
            }
            isWord = false
        }
    }
    isWord = false
}
**/
import Stack from '@ds/stack/typescript/Stack';

export default class Trie {
    val: string;
    children: Record<string, this | Trie> = {};
    isWord = false;

    constructor(val: string | undefined = undefined) {
        this.val = val;
    }

    insert(word: string): void {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let curr: this | Trie = this;
        for (const char of word) {
            curr.children[char] = curr.children[char] || new Trie(char);
            curr = curr.children[char];
        }
        curr.isWord = true;
    }

    search(word: string, partial = false): boolean {
        const curr = this.searchNode(word);

        if (curr instanceof Trie) {
            return partial ? true : curr.isWord;
        }

        return false;
    }

    searchNode(word: string): Trie | boolean {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let curr: this | Trie = this;

        for (const char of word) {
            if (!curr.children[char]) {
                return false;
            }
            curr = curr.children[char];
        }

        return curr;
    }

    remove(word: string): boolean {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let curr: this | Trie = this;
        const stack = new Stack<Trie>();

        for (const char of word) {
            if (!curr.children[char]) {
                return false;
            }

            curr = curr.children[char];
            stack.push(curr);
        }

        let child = stack.pop();
        child.isWord = false;

        // remove non-words without children
        while (!stack.isEmpty) {
            const parent = stack.pop();
            if (!child.isWord && !Object.keys(child.children).length) {
                delete parent.children[child.val];
            }
            child = parent;
        }

        return true;
    }

    startsWith(prefix: string): boolean {
        return this.search(prefix, true);
    }

    getAllWords(prefix = '', node: Trie = this): string[] {
        let words: string[] = [];

        if (node.isWord) {
            words.push(prefix);
        }

        for (const char of Object.keys(node.children)) {
            const newWords = this.getAllWords(`${prefix}${char}`, node.children[char]);
            words = words.concat(newWords);
        }

        return words;
    }

    autoComplete(prefix = ''): string[] {
        const curr = this.searchNode(prefix);
        const startNode = curr instanceof Trie ? curr : false;

        if (!startNode) {
            return [];
        }

        return this.getAllWords(prefix, startNode);
    }
}
