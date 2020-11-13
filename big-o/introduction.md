# Introduction #

Big O notation is a convenient way to describe how fast a function is growing.

It allows us to talk formally about how the runtime of an algorithm grows as the input grow.

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear, quadric, constant)
- The time and space complexity depends only on the algorithm, not the hardware used to run the algorithm

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases

f(input) = output

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different

**Example #1**

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) n

```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total
}
```

```javascript
function addUpTo2(n) {
    return n * (n + 1) / 2;
}
```

```javascript
function checkPerformance(func, params) {
    const time1 = performance.now();
    func(params);
    const time2 = performance.now();
    console.log(`Time elapsed ${(time2 - time1) / 1000 } seconds`);
}

checkPerformance(addUpTo, 1000000000); // Time elapsed 1.4786100000001023 seconds
checkPerformance(addUpTo2, 1000000000); //Time elapsed 0.0000749999998952262 seconds
```

## Time complexity ##

`Time complexity` estimates how an algorithm performs regardless kind of machine it run on. You can get the time complexity by "counting" the number of operations performed bt your code. This time complexity is defined as a function of the input size `n` using Big-O notation. `n` indicates the size of the input, while O is the worst-case scenario growth rate function.

We use the Big-O notation to classify algorithms based on their running time or space (memory used) as the input grows. The `O` function is the growth rate in function of the input size `n`.

![big-o chart](big-o-time-complexity.png)

### O(1) - Constant time ###

`O(1)` describes algorithms that take the same amount of time to compute regardless of input size.

For instance, if a function takes the identical time to process ten elements as well as 1 million items, the we say that it has a constant growth rate or `O(1)`.

**Examples**

- Find if a number is even or odd
- Check if an item on an array is null
- Print the first element from a list
- Fond value on a map

```javascript
function isEvenOrOdd(n) {
    return n % 2 ? 'Odd' : 'Even';
}
```

```javascript
function addUpTo2(n) {
    return n * (n + 1) / 2;
}

/** 1 multiplication; 1 addition; 1 division
3 simple operations, regardless of the size of n **/
```

Primitive operations like sum, multiplication, subtraction, division, modulo, bit shift, etc. have a constant runtime.

Let's go into detail why they are constant time. If you using schoolbook long multiplication algorithm, it would take `O(n^2)` to multiply two numbers. However most programming languages limit numbers to max value (e.g. in JS: `Number.MAX_VALUE` is `1.7976931348623157e+308`). So you cannot operate numbers that yield a result greater than the `MAX_VALUE`. So primitive operations are bound to be completed on a fixed amount of instructions `O(1)` or throw overflow errors (in JS `Infinity` keyword)

### O(n) - Linear time ###

Linear running time algorithms are widespread. There algorithms imply that the program visits every element from the input.

Linear time complexity `O(n)` means that as the input grows, the algorithms take proportionally longer to complete.

**Examples**

- Get max/min value in ar array
- Find a given element in a collection
- Print all the values in a list

```javascript
function findMax(n) {
    let max;
    let counter = 0;

    for (let i=0; i < n.length; i++) {
        counter++;
        if (max === undefined || max < n[i]) {
            max = n[i]
        }
    }
}
```

`findMax` checks every element from `n`. If the current item is more significant than `max` it will do an assignment

Number of operations is (eventually) bounded by a multiple of n(say, 10n) O(n)

```javascript
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total
}

/** total = 0       1 assignment
total += i      n additions and n assignments
i = 1           1 assignment
i <= n          n comparisons
i++             n additions and n assignments
**/
```

Depending on what we count the number of operations can be as low as 2n or as high as 5n + 2
But regardless of the exact number, the number of operations grows roughly proportionally with n

```javascript
function countUpAndDown(n) {
    console.log('Going up');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down ...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye");
}
/**
* loop #1 O(n)
* loop #2 O(n)
* Result O(n)
**/
```

### O(n^2) - Quadratic time ###

A function with a quadratic time complexity has a growth rate on `n^2`. If the input is size 2, it will do four operations. if the input is size 8, it will take 64, ans so on.

**Examples**

- Sorting items in a collection using bubble sort, insertion sort, or selection sort

```javascript
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
/**
* loop #1
* nested loop #2
* Result O(n^2)
**/
```

## O(log n) - Logarithmic time ##

Logarithmic time complexities usually apply to algorithms that divide problems in half every time. For instance, let's say that we want to look for a word in a dictionary. As you know, this book has every work sorted alphabetically. If you are looking for a word, then there are at least two ways to do it:

Algorithm A `O(n)`:

- Start on the first page of the book and go word by word

Algorithm B `O(log n)`:

- Open the book in the middle and check the first work on it
- If the word that you are looking for is alphabetically more significant, then look to the right half. Otherwise, look in the left half
- Divide the remainder if half again, and repeat step 2 until you find the word you are looking for

O(log n) - basically means time goes up linearly while n goes up exponentially. So if it takes 1 second to compute 10 elements, it will take 2 seconds to compute 20 elements, 3 seconds to compute 40 elements, and so on.

It is a O(log n) when we do divide and conquer type of algorithms e.g. binary search. Another example is quick sort where each time we divide the array into two parts and each time it takes O(n) time to find a pivot element. Hence N O(log N)

### O(n log n) - Linerarithmic ###

The lineararithmic time `O(n log n` is a combination of linear time `O(n)` and logarithmic time `O(log n)`.

**Examples**

- Merge sort

### O(2^n) - Exponential time ###

Exponential (base 2) running time means that the calculations performed by an algorithm double every time as the input grows.

**Examples**

- Power Set: finding all the subsets on a set

```javascript
powerset('') // =>  ['']
powerset('a') // => ['', 'a']
powerset('ab') // => ['', 'a', 'b', 'ab']
```

***Note:*** You shoud avaoid functions with exponential running times (if possible) since they don't scale well.

### O(n!) - Factorial time ###

Will execute in `n` factorial time per every new operation 

**Examples**

- Permutations of a string

## Space Complexity ##

Space Complexity is how much additional memory do we need to allocate in order to run the code in our algorithm

Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

```javascript
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
/**
 * Our total variable is a number and it will be a number when returned (even if it will be  1 million)
 * O(1) space
 */
```

```javascript
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
/**
 * Size of an array (newArr) increases if our input increases
 * O(n) space
 */
```
