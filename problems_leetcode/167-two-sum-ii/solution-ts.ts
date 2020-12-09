export const twoSum2 = (nums: number[], target: number): [number, number] => {
    const seen = {};

    for (let i = 0; i <= nums.length; i++) {
        const pair = target - nums[i];
        if (pair in seen) {
            return [seen[pair] + 1, i + 1];
        } else {
            seen[nums[i]] = i;
        }
    }
};

export const twoSum2TwoPointer = (nums: number[], target: number): [number, number] => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const pair = nums[left] + nums[right];
        if (pair === target) {
            return [left + 1, right + 1];
        } else if (pair < target) {
            left++;
        } else {
            right--;
        }
    }
};

export const twoSum2BinarySearch = (nums: number[], target: number): [number, number] => {
    for (let i = 0; i <= nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        const candidate = target - nums[i];

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] === candidate) {
                return [i + 1, mid + 1];
            } else if (nums[mid] < candidate) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
};
