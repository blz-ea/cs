## Tree Traverse ##

### Breadth First Search ###

The Breadth First Search is an algorithm for traversing or searching tree or graph data structures. It explores all the nodes at the present depth before moving on to the nodes at the next depth level.

#### Time complexity ####

The time complexity if the entree tree is traversed is `O(v)` where `v` is the number of nodes. In the case of a graph, the time complexity is `O(v + e)` where `v` is the number of vertexes and `E` is the number of edges

```pseudo
- Create a queue and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property in the node dequeued - add it to the queue
- Return the variable that stores all of the variable
```

### Depth First Search ###

The Depth First Search is an algorithm for traversing or searching tree or graph data structures which uses the idea of backtracking. It explores all the nodes by going forward if possible or uses backtracking

**Depth First Search - PreOrder**

```pseudo
- Create a variable to store the values of nodes visited
- Store the root of the tree in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
```

**Depth First Search - PostOrder**

```pseudo
- Create a variable to store the values of nodes visited
- Store the root of the tree in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - If the node has a right property, call the helper function with the right property on the node
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable
- Return the array of values
```

**Depth First Search - Traverse**

```pseudo
- Create a variable to store the values of nodes visited
- Store the root of the tree in a variable called current
- Write a helper function which accepts a node
  - If the node has a left property, call the helper function with the left property on the node
  - Push the value of the node to the variable that stores the values
  - If the node has a right property, call the helper function with the right property on the node
- Invoke the helper function with the current variable
- Return the array of values
```

#### Time complexity ####

The time complexity of `DFS` if the entire tree is traversed is `O(v)` where `v` is the number of nodes. In the case of a graph, the time complexity is `O(v + e)` where `v` is the number of vertexes and `E` is the number of edges

## BFS vs DFS ##

That heavily depends on the structure of the search tree and the number and location of searched items:

- If you know a solution is not far from the root of the tree, a `BFS` might be better
- If the tree is very deep and solutions are rare, `DFS` might take an extremely long time, but `BFS` could be faster
- If the tree is very wide, a `BFS` might need too much memory, so it might be completely impractical
- If solutions are frequent but located deep in the tree, `BFS` could be impractical
- If the search tree is very deep you will beed to restrict the search depth for `DFS`

## References ##

- [https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf](https://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-depth-first-search-dfs-vs-breadth-first-search-bf)
