import DoublyLinkedList from '@ds/linked_list/typescript/DoublyLinkedList';

const encoding = new TextEncoder();
export type KeyType = string | number;

/**
 * Table
 * {
 *   'a' => { value: 97: order: 0 }
 * }
 *
 * KeysArray = [
 *    0 = 'a'
 * ]
 *
 * KeysIndex = 0
 *
 */

type HashTableRecord<T> = { value: T; order: number };

export default class HashTable<T, K = unknown> {
    size = 0;
    loadFactor: number;
    table: (DoublyLinkedList<HashTableRecord<K>> | null)[];
    initialCapacity: number;
    uniqueIdPropName = '425123g2e';
    objectIdCounter = -1;
    keysArray: T[] = [];
    keysIndex = 0;

    constructor(initialCapacity = 57, loadFactor = 0.75) {
        this.loadFactor = loadFactor;
        this.initialCapacity = initialCapacity;
        this.reset();
    }

    reset(buckets = new Array(this.initialCapacity), size = 0, keysArray = [], keysIndex = 0): void {
        this.table = buckets;
        this.size = size;
        this.keysArray = keysArray;
        this.keysIndex = keysIndex;
    }

    put(key: T, value: K): this {
        const hash = this.hash(key);
        const bucket = this.table[hash];

        if (!bucket) {
            this.table[hash] = new DoublyLinkedList<HashTableRecord<K>>().push({ value, order: this.keysIndex }, hash);
            this.keysArray[this.keysIndex] = key;
            this.keysIndex += 1;
            this.size++;
        } else {
            let current = bucket.head;
            while (current) {
                if (current.key == hash) {
                    current.val.value = value; // update
                    return this;
                } else {
                    current = current.next;
                }
            }
            // accommodate collision
            bucket.push({ value, order: this.keysIndex }, hash);
            this.size++;
        }

        return this;
    }

    get(key: T): null | K {
        const hash = this.hash(key);
        const bucket = this.table[hash];

        if (!bucket) {
            return null;
        }

        const node = bucket.find(hash);
        if (!node) {
            return null;
        }

        return node.val.value;
    }

    has(key: T): boolean {
        const node = this.get(key);
        return !!node;
    }

    remove(key: T): boolean {
        const hash = this.hash(key);
        const bucket = this.table[hash];

        if (!bucket) {
            return false;
        }

        const node = bucket.find(hash);
        if (!node) {
            return false;
        }

        bucket.delete(node);
        delete this.keysArray[node.val.order];
        this.size--;

        return true;
    }

    hash(key: T): number {
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

        return (hash >>> 0) % this.initialCapacity;
    }

    fromArray(keyValues: Array<[T, K]>): this {
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

    rehash(): void {
        throw new Error('Not implemented');
    }

    *keys(): Iterable<T> {
        for (let i = 0; i < this.keysArray.length; i++) {
            const key = this.keysArray[i];
            if (key !== undefined) {
                yield key;
            }
        }
    }

    *values(): Iterable<K> {
        for (const key of this.keys()) {
            yield this.get(key);
        }
    }
}
