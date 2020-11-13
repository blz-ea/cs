# Recursion #

Recursion - A process (function) that calls itself
Base Case - The condition when the recursion stops

Two essential parts of a recursive function

- Base Case
- Different input

Example #1

```javascript
function countDown(num) {
    if (num <= 0) {
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

Example #2

```javascript
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
```

Example #3 - Factorial

```javascript
// Iterative way
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
```

## Where things can go wrong ##

- No base case
- Non changing input
- Forgetting to return the wrong thing
- Stack overflow

## Helper method recursion ##

Method #1

```javascript
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9,10]);
```

Method #2 - Pure recursion

```javascript
function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
collectOddValues([1,2,3,4,5]);
/**
 * [1].concat(collectOddValues([2,3,4,5]))
 *      [].concat(collectOddValues([3,4,5]))
 *          [3].concat(collectOddValues([4,5]))
 *              [].concat(collectOddValues([5]))
 *                  [5].concat(collectOddValues([]))
 *                      []

```

## Pure Recursion Tips ##

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like `slice`, `substring` to make copies of strings
- To make copies of objects use Object.assign or the spread operator
