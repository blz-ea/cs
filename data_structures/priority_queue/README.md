# Priority Stack #

A priority queue is a special type if queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

## Implementations of Priority Stack ##

Priority Stack can be implemented using an array, linked list, a heap data structure or a binary search tree. Among these data structures, heap data structure provides an efficient implementation of priority queues

|                    | Peek     | Insert     | Delete |
|:------------------:|:--------:|:----------:|:------:|
| Linked List        | O(1)     | O(n)       | O(n^2) |
| Binary Heap        | O(1)     | O(log n)   | O(n^2) |
| Binary Search Tree | O(1)     | O(log n)   | O(n^2) |

## Use Cases ##

- Dijkstra's algorithm
- Implementing stack
- For load balancing and interrupt handling in an operating system
- For data compression in Huffman code

## Solutions ##

- [TypeScript](./typescript)
- [Python](./python)
