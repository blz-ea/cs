# Trees #

Tree is a hierarchical nonlinear data structure that consists of nodes connected by edges.
Different tree data structures allow quicker and easier access to the data as it is a non-linear data structure

## Terminology ##

 - **Nodes** - entity that has value and pointers to its child nodes
 - **Edge** - is a link between two nodes
 - **Root** - top most nodes of a tree
 - **Sibling** A group of nodes with the same parent
 - **Height of a Node** - is a number of edges from the node to the deepest leaf (i.e. longest path from the node to a leaf node)
 - **Depth of a Node** - is a number of edges from the root to the node
 - **Leaf** A node with no children

## Tree traversal ##

Linear data structures like arrays, stacks, queues, and linked list have only one way to read the data. But a hierarchical data structure like a tree can be traversed in different ways.

 - **DFS (Depth First Search)**
   - **Traverse**
     - **Use cases**
       - Used to get the values on the nodes in non-decreasing order in a BST
       - Flattens the tree into the original sequence, in the same way it was created
     - **Steps:**
       - Traverse left subtree recursively
       - Access data part of the node
       - Traverse right subtree recursively
     **Note**: In Binary Search Tree values returned in a sorted order
   - **PreOrder**
     - **Use Cases**
        - If you want to create replica of a tree, put nodes in an array with a pre-order traversal
        - If you need to explore the roots before inspecting any leaves
     - **Steps:**
       - Access data part of the node
       - Traverse left subtree recursively
       - Traverse right subtree recursively
   - **PostOrder**
     - **Use cases**
       - Used to delete a tree from leaf to root
       - If you need to explore all the leaves before any nodes
     - **Steps:**
       - Traverse left subtree recursively
       - Traverse right subtree recursively
       - Access data part of the node
 - **BFS (Bredth First Search)**
   - **Use Cases**
     - Construction of shortest path
     - Traverses through graph with smallest number of iterations

## Tree applications ##

 - Binary Search Trees are used to quickly check whether an element is present in a set or not
 - Trees are used to store routing information in routers
 - Most popular databases use B-Trees and T-Trees for storing indexes
 - Compilers use AST(Abstract Syntax Tree) to validate syntax of a programming language
 - HTML DOM
 - Network routing
 - Abstract Syntax Tree
 - Artificial Intelligence (Minimax tree)
 - Folders in OS