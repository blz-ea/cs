export const singleNumber = (nums: number[]): number => {
    if (nums.length === 1) {
        return nums[0];
    }

    const seen = new Map();

    for (const num of nums) {
        if (seen.has(num)) {
            seen.set(num, seen.get(num) + 1);
        } else {
            seen.set(num, 1);
        }
    }

    for (const num of Array.from(seen.keys())) {
        if (seen.get(num) === 1) {
            return num;
        }
    }
};

export const singleNumberXOR = (nums: number[]): number => {
    if (nums.length === 1) {
        return nums[0];
    }

    let result = 0;

    for (let i = 0; i <= nums.length; i++) {
        result ^= nums[i];
    }

    return result;
};
