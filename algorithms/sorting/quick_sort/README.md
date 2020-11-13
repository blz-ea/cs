# Quick sort #

Like `Merge sort`, `Quick sort` is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

## Many versions ##

- Always pick first element as pivot
- Always pick last element as pivot
- Pick random element as pivot
- Pick median as pivot

## Pivot Helper ##

- It is useful to implement a function responsible arranging elements in an array on either side of a pivot
- Given an array this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left and values greater than the pivot to the right of the pivot

## Picking a pivot ##

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally the pivot should be chosen so that it's roughly the median value in the data set you're sorting

## Pseudo code ##

- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the sub array to the left of that index, and the sub array to the right of that index

## Time Complexity ##

- Time Complexity (Best) O(n log n)
- Time Complexity (Average) O(n log n)
- Time Complexity (Worst) O (n^2)
  - If you are pivoting around minimum or the maximum value it will result in O(n^2) we can avoid that by pivoting randomly, but always there is a chance
- Space Complexity O(log n)

## Implementations ##

- [Typescript](quickSort.ts)
- [Python](quick_sort.py)
