const moveZeros = (nums: number[]): void => {
    let numOfZeros = 0;
    let index = 0;

    while (index < nums.length) {
        if (nums[index] === 0) {
            numOfZeros++;
            nums.splice(index, 1);
        } else {
            index++;
        }
    }

    for (let i = 0; i < numOfZeros; i++) {
        nums.push(0);
    }
};

export default moveZeros;
