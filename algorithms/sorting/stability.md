# Stability in sorting algorithms #

Stability in mainly important when we have key value pairs with duplicate keys possible.

A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted.

Consider the following dataset:

```pseudo
(Dave, A)
(Alice, B)
(Ken, A)
(Eric, B)
(Carol, A)
```

If we sort this data according to name only, then it is highly unlikely that the resulting dataset will be grouped according to sections as well

```pseudo
(Alice, B)
(Carol, A)
(Dave, A)
(Eric, B)
(Ken, A)
```

So we might have to sort again to obtain list of students section wise too. But in doing so, if the sorting algorithm is not stable, we might get a result like this:

```pseudo
(Carol, A)
(Ken, A)
(Dave, A)
(Eric, B)
(Alice, B)
```

The dataset is now sorted according to sections, but not according to names.

In the name-sorted dataset, the tuple `(Alice, B)` was before `(Eric, B)`, but since the sorting algorithm is not stable, the relative order is lost.

If on the other hand we used a stable sorting algorithm, the result would be

```pseudo
(Carol, A)
(Dave, A)
(Ken, A)
(Alice, B)
(Eric, B)
```

## References ##

- [https://www.geeksforgeeks.org/stability-in-sorting-algorithms/](https://www.geeksforgeeks.org/stability-in-sorting-algorithms/)
