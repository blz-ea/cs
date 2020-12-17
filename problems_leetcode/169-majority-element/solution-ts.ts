export const majorityElementSort = (nums: number[]): number => {
    const sorted = nums.sort();
    return sorted[Math.floor(nums.length / 2)];
};

// Boyer-Moore Majority Vote Algorithm
export const majorityElementMoore = (nums: number[]): number => {
    let major = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            count++;
            major = nums[i];
        } else if (major == nums[i]) {
            count++;
        } else {
            count--;
        }
    }

    return major;
};
