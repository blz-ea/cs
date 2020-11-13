const twoSums = (nums: number[], target: number): number[] | undefined => {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];

        if (pair in map) {
            return [map[pair], i];
        }

        map[nums[i]] = i;
    }
};

export default twoSums;
