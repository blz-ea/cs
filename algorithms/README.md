# What is an algorithm #

**Algorithm** - is a finite sequence of well-defined computer-implementable instructions, typically to solve a class of problems or to perform a computation
We use algorithms and data structures to make our code scalable

## Steps for algorithm development ##

- Understand the Problem
- Explore Concrete Examples
- Break it Down
- Solve/Simplify
  - Solve a simpler problem
- Refactor

## Patterns ##

### Frequency counter pattern ###

- [Frequency counter pattern](./frequency-counter-pattern.ts)
- [Frequency counter anagrams](./frequency-counter-anagrams.ts)

### Multiple pointers pattern ###

- [Multiple pointers pattern](./multiple-pointers-pattern.ts)

### Sliding window pattern ###

This pattern involves creating a window which can either be an array or number from one position to another.
Depending on certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track of a subset of data in an array/string etc

- [Typescript](./sliding-window-pattern.ts)

### Divide and Conquer ###

A divide and conquer algorithm is a strategy of solving a large problem by

- breaking the problem into smaller sub-problems
- solving the sub-problems, and
- combining them to get the desired output.

## Divide and Conquer vs Dynamic approach ##

The divide and conquer approach divides a problem into smaller subproblems, these subproblems are further solved recursively. The result of each subproblem is not stored for future reference, whereas, in a dynamic approach, the result of each subproblem is stored for future reference.

Use the divide and conquer approach when the same subproblem is not solved multiple times. Use the dynamic approach when the result of a subproblem is to be used multiple times in the future.

Let us understand this with an example. Suppose we are trying to find the Fibonacci series. Then,

Divide and Conquer approach:

```pseudo
fib(n)
    If n < 2, return 1
    Else , return f(n - 1) + f(n -2)
```

Dynamic approach:

```pseudo
mem = [ ]
fib(n)
    If n in mem: return mem[n] 
    else,     
        If n < 2, f = 1
        else , f = f(n - 1) + f(n -2)
        mem[n] = f
        return f
```

In a dynamic approach, mem stores the result of each subproblem.

## Advantage of Divide and Conquer Algorithm ##

- The complexity is simplified by this approach.
- This approach is suitable for multiprocessing systems.
- It makes efficient use of memory caches.