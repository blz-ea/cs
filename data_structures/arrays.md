# Arrays #

An array is a data structure consisting of a collection of elements, each identified by at least one array index or key

## Dynamic arrays ##

A dynamic array, resizable, or array list is a random access, variable-size list data structure.
Dynamic arrays overcome a limit of static arrays, which have a fixed capacity that needs to be specified at allocation.

## When to use ##

- When you need order
- When you need fast access / insertion removal (sort of...)

## Time complexity ##

- Insertion Depends
   - If adding to the end of the array the O(1) 
   - If adding to the beginning then O(n) since we have to reorder indexes
Removal Depends
   - If removing from the end of the array the O(1)
   - If removing from the beginning then O(n) since we have to reorder indexes
- Searching O(n)
- Access O(1)


### JavaScript Array methods Time Complexity ###
 
| Method     | Complexity | Comment  |
|------------|------------|----------|
| Array.push | O(1)  |
| Array.pop | O(1)  |
| Array.shift | O(n)  |
| Array.unshift | O(n)  |
| Array.concat | O(n)  |
| Array.slice | O(n)  | Creates a shallow copy
| Array.splice | O(n)  | Mutates existing array
| Array.slice | O(n * log n)  |
| Array.{forEach/map/filter/reduce}} | O(n)  |


