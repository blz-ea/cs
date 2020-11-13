/**
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * O(n)
 */

const maxSubArraySum = (arr: number[], num: number): number => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) {
        return;
    }

    // initial sliding window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        // 1,[2,3,4],5
        // -      +
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
};

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
