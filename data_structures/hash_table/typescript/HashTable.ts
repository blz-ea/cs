import DoublyLinkedList from '@ds/linked_list/typescript/DoublyLinkedList';

const encoding = new TextEncoder();
type KeyType = string | number;

export default class HashTable<T = KeyType, K = any> {
    table: (DoublyLinkedList<K> | null)[];
    size: number;
    uniqueIdPropName = '425123g2e';
    objectIdCounter = -1;

    constructor(size = 64) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    put(key: KeyType, value: K): this {
        const hash = this.hash(key);
        const bucket = this.table[hash];

        if (!bucket) {
            this.table[hash] = new DoublyLinkedList<K>().push(value, key);
        } else {
            let current = bucket.head;
            while (current) {
                if (current.key == key) {
                    current.val = value; // update
                    return this;
                } else {
                    current = current.next;
                }
            }
            bucket.push(value, key);
        }

        return this;
    }

    get(key: KeyType): null | K {
        const hash = this.hash(key);
        const bucket = this.table[hash];

        if (!bucket) {
            return null;
        }

        const node = bucket.find(key);
        if (!node) {
            return null;
        }

        return node.val;
    }

    remove(key: KeyType): null | K {
        const hash = this.hash(key);
        const bucket = this.table[hash];

        if (!bucket) {
            return null;
        }

        const node = bucket.find(key);
        if (!node) {
            return null;
        }

        bucket.delete(node);
        return node.val;
    }

    hash(key: KeyType): number {
        let toHash;

        if (typeof key === 'object') {
            toHash = this.getObjectUniqueId(key);
        } else {
            toHash = key;
        }

        const bytes = encoding.encode(String(toHash));
        let hash = 0;
        for (const char of bytes) {
            hash ^= char;
            hash *= 16777619;
        }

        return (hash >>> 0) % this.size;
    }

    fromArray(keyValues: Array<[KeyType, K]>): this {
        if (!keyValues || keyValues.length == 0) {
            return this;
        }

        for (const keyVal of keyValues) {
            const key = keyVal[0];
            const value = keyVal[1];

            this.put(key, value);
        }

        return this;
    }

    get nextObjectId(): number {
        return this.objectIdCounter++;
    }

    getObjectUniqueId(object: unknown): number {
        if (object == null) {
            return null;
        }

        const id = object[this.uniqueIdPropName];

        if (id !== null) {
            return id;
        }

        if (Object.isFrozen(object)) {
            return null;
        }

        const uniqueId = this.nextObjectId;

        Object.defineProperty(object, this.uniqueIdPropName, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: uniqueId,
        });

        return uniqueId;
    }
}
