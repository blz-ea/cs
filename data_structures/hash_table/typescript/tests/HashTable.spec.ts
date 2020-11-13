import HashTable from '@ds/hash_table/typescript/HashTable';

describe('Testing hash table', () => {
    it('should create empty hash table', () => {
        const ht = new HashTable();
        expect(ht).toBeInstanceOf(HashTable);
    });

    it('should create hash table with specified size', () => {
        const ht = new HashTable(2);
        expect(ht.size).toBe(2);
        expect(ht.table.length).toBe(2);
    });

    it('should hash input keys', () => {
        const ht = new HashTable();
        const keys = ['One', 1, 0.1];

        for (const key of keys) {
            const hashed_key = ht.hash(key);
            expect(typeof hashed_key).toBe('number');
            expect(hashed_key).toBeLessThanOrEqual(ht.size);
            expect(hashed_key).toBeGreaterThanOrEqual(0);
        }
    });

    it('should add values to hash table', () => {
        const ht = new HashTable();
        ht.put(1, 'One');
        ht.put(2, 'Two');
        ht.put(2, 'Two');
        ht.put(3, 'Three');
        ht.put(4, 'Four');
        ht.put(4, 'Four');
    });

    it('should get values from hash table by key', () => {
        const ht = new HashTable();
        ht.put(1, 'One').put(2, 'Two').put(3, 'Three').put(4, 'Four');
        expect(ht.get(1)).toBe('One');
        expect(ht.get(2)).toBe('Two');
        expect(ht.get(3)).toBe('Three');
        expect(ht.get(4)).toBe('Four');
    });

    it('should create hash table from array', () => {
        const ht = new HashTable<string>();
        const testData: [number | string, string][] = [
            [1, 'One'],
            [2, 'Two'],
            [3, 'Three'],
            [4, 'Four'],
        ];
        ht.fromArray(testData);
        expect(ht.get(1)).toBe('One');
        expect(ht.get(2)).toBe('Two');
        expect(ht.get(3)).toBe('Three');
        expect(ht.get(4)).toBe('Four');
    });
});
