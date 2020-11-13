const searchInsert = (nums: number[], target: number): number => {
    // start loop from 0 till the end of nums
    //  - if current value is equal to target
    //    - return i
    //  - else if current value > target
    //    - break
    // return i

    let i = 0;
    while (i < nums.length) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) {
            break;
        }

        i++;
    }

    return i;
};

export default searchInsert;
