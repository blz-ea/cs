# Merge sort #

Created back in 1949

- It is a combination of two hings - merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays 0 or 1 elements, then building up a newly sorted array

## Pseudo code ##

- Implement a function for merging two sorted arrays
- Given two arrays which are sorted, function should create a new array which is sorted, but consists of all of the elements in the two input arrays
- This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it

## Time complexity ##

If we have e.g. 32 elements in the array then log^2 32 = 5 (2 to the 5th power) as n grows the number of time we have to split it up grows at the rate of log n

O(log n) decompositions O(n) comparisons per decomposition

- Time Complexity (Best) O(n log n)
- Time Complexity (Average) O(n log n)
- Time Complexity (Worst) O (n log n)

**Auxiliary space:** O(n)
**Stable:** Yes

## Implementations ##

- [Typescript](mergeSort.ts)
- [Python](merge_sort.py)

## References ##

- [https://www.programiz.com/dsa/merge-sort](https://www.programiz.com/dsa/merge-sort)
