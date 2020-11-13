# Selection Sort #

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

## Pseudo code ##

- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array
- If the 'minimum' is not the value(index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted

**Time complexity:** O(n^2)

**Auxiliary Space:** O(1)

**Stable:** Can be made stable

**In Place:** Yes

## Implementations ##

- [TypeScript](selectionSort.ts)
- [Python](selection_sort.py)

## References ##

- [https://www.programiz.com/dsa/selection-sort](https://www.programiz.com/dsa/selection-sort)