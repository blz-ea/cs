# Heap #

Heap is a special case of balanced binary tree data structure where the root-node key is compared with its children and arranged accordingly

Min-Heap - value of the root node is less than or equal to either of its children

Max-Heap - value of the root node is greater than or equal to either of its children 

## Applications ##

- Heapsort
- Findind min and max values
- Order statistic: Heap data structure can be used to efficiently find the kth smallest (or largest) element in an array
- Dijkstra's shortest path problem

## BST vs Heap ##

- Heaps have better locality of reference since heap is implemented using arrays
- Heaps are cache friendly (because implemented using arrays)
- BST implemented using pointers (more complex, not easy to cache)
- BST takes more time to construct

## Time complexity ##

```pseudo
          Type      BST (*)   Heap
Insert    average   log(n)    1
Insert    worst     log(n)    log(n) or n (***)
Find any  worst     log(n)    n
Find max  worst     1 (**)    1
Create    worst     n log(n)  n
Delete    worst     log(n)    log(n)

- *: everywhere in this answer, BST == Balanced BST, since unbalanced sucks asymptotically
- **: using a trivial modification BST can be O(1)
- ***: log(n) for pointer tree heap, n for dynamic array heap
```

## Implementations ##

- [TypeScript](./typescript)
- [Python](./python)

## References ##

- [Back To Back SWE](https://www.youtube.com/watch?v=g9YK6sftDi0)
