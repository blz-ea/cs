# Hash Table #

Hash Table (Hash map) is an abstract(not a concrete existence) data structure that implements associative array

An abstract data type is a mathematical model for data types, where a data type is defined by its behavior

A hash table uses a hash function to compute an index in an array of slots
Ideally a hash function will assign each key to a unique bucket, but if your hash function is imperfect
(meaning it can generate same hash for two different indexes) it may cause a collision (hash function generates index for more than one key)
Such collisions must be accommodated in some way

Basic structure:

```pseudo
hash = hashFunc(key)
index = hash % arraySize

John -> hash('John') -> 12345 ->

Storage [
    bucket       tuple          tuple
    [12345] = [ [KEY, VALUE], [KEY, VALUE] ]
]
```

## Collision Resolving ##

### Linear Probing ###

In linear probing we linearly probe for next slot.

```pseudo
if slot hash(x) % s is full then
try hash(x) + 1
try hash(x) + 2
...
```
Main problem with linear probing is clustering, many consecutive elements form groups and it starts taking time to find a free slot

### Quadratic probing ###

Quadratic probing operates by taking the original hash index and adding successive values of an arbitrary quadratic polynomial until an open slot is found

```pseudo
if slot hash(x) % s is full then
try hash(x) + 1*1
try hash(x) + 2*2
...
```

### Double hashing ###
We use another separate hash function and for `i*hash2(x)` slot

```pseudo
if slot hash(x) % s is full then
try hash(x) + 1 * hash2(x)
try hash(x) + 2 * hash2(x)
...
```

### Chaining ###

The idea is to make each slot of hash table point to a linked list (doubly linked list preferably) of records that have same hash function value

```pseudo
Storage [
    bucket       tuple          tuple
    [12345] =  LinkedList(Unit(key, value)) -> LinkedList((key, value))
]
```

## Collision Resolving - Comparison ##

**Separate Chaining**
- Simpler to implement
- Hash table never fills up, we can always add more elements to chain
- Less sensitive to hash function or load factors
- Mostly used when it is unknown how many and how frequently keys may be inserted or deleted
- Cache performance is not good as keys are stored using linked list
- Wastage of space (Some parts of hash table are never used)
- Chaining uses extra space for links
- Can become O(n) access time as linked list grow big 

**Open addressing**
- Requires for more computation
- Table may become full
- Requires extra care to avoid clustering and load factor
- Used when frequency and number of keys is known
- Provides better cache performance as everything is stored in the same table
- Slot can be used even if an input doesn't map to it
- No links in Open addressing

## Terminology ##

**Load Factor** - total number of items stored / Size of the array - Hash table will be rehashed if load factor reaches certain threshold
