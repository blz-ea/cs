const removeElementInPlace = (nums: number[], elem: number): number => {
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != elem) {
            nums[start] = nums[i];
            start++;
        }
    }
    nums.length = start;
    return start;
};

export default removeElementInPlace;
