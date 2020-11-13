const rotateArray = (nums: number[], k: number): void => {
    let i = 0;
    while (i < k) {
        const spliced = nums.splice(nums.length - 1, 1)[0];
        nums.splice(0, 0, spliced);
        i++;
    }
};

const rotateArray2 = (nums: number[], k: number): void => {
    nums.unshift(...nums.splice(nums.length - k));
};

const rotateArray3 = (nums: number[], k: number): void => {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};

const rotateArray4 = (nums: number[], k: number): void => {
    k = k % nums.length;
    nums.splice(0, nums.length, ...nums.slice(-k), ...nums.slice(0, -k));
};

export { rotateArray, rotateArray2, rotateArray3, rotateArray4 };
