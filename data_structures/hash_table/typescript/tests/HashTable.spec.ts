import HashTable from '@ds/hash_table/typescript/HashTable';

const testHashTable = () => {
    const ht = new HashTable();
    ht.put(1, 'One').put(2, 'Two').put(3, 'Three').put(4, 'Four');

    return ht;
};

describe('Testing hash table', () => {
    it('should create empty hash table', () => {
        const ht = new HashTable();
        expect(ht).toBeInstanceOf(HashTable);
        expect(ht.size).toBe(0);
    });

    it('should create hash table with specified size', () => {
        const ht = new HashTable(2);
        expect(ht.initialCapacity).toBe(2);
        expect(ht.table.length).toBe(2);
    });

    it('should hash input keys', () => {
        const ht = new HashTable();
        const keys = ['One', 1, 0.1];

        for (const key of keys) {
            const hashed_key = ht.hash(key);
            expect(typeof hashed_key).toBe('number');
            expect(hashed_key).toBeLessThanOrEqual(ht.initialCapacity);
            expect(hashed_key).toBeGreaterThanOrEqual(0);
        }
    });

    it('should add and retrieve values from hash table and keep correct table size', () => {
        const ht = new HashTable();
        ht.put(1, 'One');
        expect(ht.get(1)).toBe('One');
        expect(ht.size).toBe(1);

        ht.put(2, 'Two');
        expect(ht.get(2)).toBe('Two');
        expect(ht.size).toBe(2);

        ht.put(2, 'Two');
        expect(ht.size).toBe(2);

        ht.put(3, 'Three');
        expect(ht.get(3)).toBe('Three');
        expect(ht.size).toBe(3);

        ht.put(4, 'Four');
        expect(ht.get(4)).toBe('Four');
        expect(ht.size).toBe(4);

        ht.put(4, 'Four');
        expect(ht.size).toBe(4);
    });

    it('should remove element and increment and decrement table size', () => {
        const ht = new HashTable();
        ht.put(1, 'One');
        expect(ht.size).toBe(1);

        ht.put(2, 'Two');
        expect(ht.size).toBe(2);

        ht.put(2, 'Two');
        expect(ht.size).toBe(2);

        ht.put(3, 'Three');
        expect(ht.size).toBe(3);

        ht.put(4, 'Four');
        expect(ht.size).toBe(4);

        ht.put(4, 'Four');
        expect(ht.size).toBe(4);

        expect(ht.remove(1)).toBe(true);
        expect(ht.size).toBe(3);

        expect(ht.remove(2)).toBe(true);
        expect(ht.size).toBe(2);

        expect(ht.remove(3)).toBe(true);
        expect(ht.size).toBe(1);

        expect(ht.remove(5)).toBe(false);
        expect(ht.size).toBe(1);

        expect(ht.remove(4)).toBe(true);
        expect(ht.size).toBe(0);

        expect(ht.remove(4)).toBe(false);
        expect(ht.size).toBe(0);
    });

    it('should get values from hash table by key', () => {
        const ht = testHashTable();
        expect(ht.get(1)).toBe('One');
        expect(ht.get(2)).toBe('Two');
        expect(ht.get(3)).toBe('Three');
        expect(ht.get(4)).toBe('Four');
    });

    it('should verify if given keys exist in the table', () => {
        const ht = testHashTable();
        expect(ht.has(-1)).toBe(false);
        expect(ht.has(1)).toBe(true);
        expect(ht.has(0)).toBe(false);
        expect(ht.has(2)).toBe(true);
        expect(ht.has(3)).toBe(true);
        expect(ht.has(4)).toBe(true);
        expect(ht.has(5)).toBe(false);
    });

    it('should create hash table from array', () => {
        const ht = new HashTable();
        const testData: [number | string, string][] = [
            [1, 'One'],
            [2, 'Two'],
            [3, 'Three'],
            [4, 'Four'],
        ];
        ht.fromArray(testData);
        expect(ht.size).toBe(testData.length);
        expect(ht.get(1)).toBe('One');
        expect(ht.get(2)).toBe('Two');
        expect(ht.get(3)).toBe('Three');
        expect(ht.get(4)).toBe('Four');
    });

    it('should return hash table keys', () => {
        const ht = testHashTable();
        expect(Array.from(ht.keys())).toEqual([1, 2, 3, 4]);
    });

    it('should return hash table values', () => {
        const ht = testHashTable();
        expect(Array.from(ht.values())).toEqual(['One', 'Two', 'Three', 'Four']);
    });
});
