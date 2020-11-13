# Insertion Sort #

Builds up the sort by gradually creating a larger left half which is always sorted

## Pseudo code ##

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted

Big strength If we have data that constantly comes in (live) with insertion sort can work well.

**Time Complexity:** O(n^2)

**Auxiliary Space:** O(1)

**Stable:** Yes

**Use cases:** 

- Used when number of elements is small. 
- It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.

## Implementations ##

- [TypeScript](insertionSort.ts)
- [Python](insertion-sort.py)

## References ##

- [https://www.programiz.com/dsa/insertion-sort](https://www.programiz.com/dsa/insertion-sort)