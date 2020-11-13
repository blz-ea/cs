const findKthLargest = (nums: number[], k: number): number => {
    /**
     * Time complexity: O(n log n)
     * Space complexity: O(1)
     */
    nums.sort((a, b) => a - b);
    return nums[nums.length - k];
};

const findKthLargestSelection = (nums: number[], k: number): number => {
    /**
     * Time complexity: O(n) guaranteed
     * Space complexity: O(1)
     */

    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;

    while (lo < hi) {
        const j = partition(nums, lo, hi);

        if (j < k) {
            lo = j + 1;
        } else if (j > k) {
            hi = j - 1;
        } else {
            break;
        }
    }

    return nums[k];
};

const partition = (nums: number[], lo: number, hi: number): number => {
    const pivot = nums[hi];
    let i = lo;

    for (let j = lo; j < hi; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    }

    swap(nums, i, hi);
    return i;
};

const swap = (arr: number[], i: number, j: number): void => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

export { findKthLargest, findKthLargestSelection };
