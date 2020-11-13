const removeDuplicates = (nums: number[]): number => {
    if (nums.length == 0 || nums.length == 1) {
        return nums.length;
    }

    let curr = nums[0];
    let j = 1;

    for (let i = 1; i < nums.length; i++) {
        if (curr !== nums[i]) {
            curr = nums[i];
            nums[j] = nums[i];
            j++;
        }
    }

    nums.length = j;
    return j;
};

const removeDuplicatesNoBuffer = (nums: number[]): number => {
    const len = nums.length;
    if (len == 0 || len < 2) {
        return len;
    }

    let tail = 1;

    for (let i = 0; i < len; i++) {
        let j = 0;
        while (j < tail) {
            if (nums[i] === nums[j]) {
                break;
            }
            j++;
        }

        if (tail === j) {
            nums[tail] = nums[i];
            tail++;
        }
    }

    nums.length = tail;
    return tail;
};

export { removeDuplicates, removeDuplicatesNoBuffer };
