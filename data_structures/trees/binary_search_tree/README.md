# Binary Search Tree #

Binary Search Tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node's key
- The right subtree of a node contains only nodes with keys greater than the node's key
- The left and right subtree each must also be a binary search tree

## Steps ##

```pseudo
- Create a `node`
- Start at the `root`
  - Check if there is a `root`, is not `node` becomes new `root`
  - If there is a `root`, check if value of a new `node` is greater than or less than the value of the `root`
  - If it is greater
    - Check to see if there is a `node` to the right
      - If there is, move to that `node` and repeat these steps
      - If there is not, add that `node` as the right property
  - If it is less
    - Check to see if there is a `node` to the left
      - If there is, move to that `node` and repeat these steps
      - If there is not, add that `node` as the left property
```