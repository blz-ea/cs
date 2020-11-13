# Bubble Sort #

Simplest sorting algorithm, that works by repeatedly swapping adjacent elements.

## Pseudo code ##

- Start looping from the end with a variable called `i` towards the beginning
- Start an inner loop with a variable called `j` from the beginning until `i - 1`
- If arr[j] is greater then arr[j+1], swap those two values
- Check if elements were swapped during the pass, if not that means that array is already sorted, return array
- Return sorted array

```pseudo
for end = lastElem; i--;
    for j = 0; j < end - 1; j++
        if (leftElem > rightElem)
            swap(leftElem, rightElem)
            swapped = true
    if (!swapped) break

return arr
```

**Time Complexity:**

- Best case O(n) if data is sorted or nearly sorted
- Average and Worst case O(n^2)

**Auxiliary Space:** O(1)
**Stable:** Yes
**Sorting In Place:** Yes

## Implementations ##

- [TypeScript](bubbleSort.ts)
- [Python](bubble_sort.py)

## References ##

- [https://www.programiz.com/dsa/bubble-sort](https://www.programiz.com/dsa/bubble-sort)