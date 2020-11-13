const maxSubArray = (nums: number[]): number => {
    let runSum = nums[0];
    let result = runSum;

    for (let i = 1; i < nums.length; i++) {
        runSum = runSum + nums[i] >= nums[i] ? runSum + nums[i] : nums[i];
        result = Math.max(result, runSum);
    }

    return result;
};

export default maxSubArray;
