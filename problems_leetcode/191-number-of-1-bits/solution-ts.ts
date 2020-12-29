export const hammingWeight = (num: number): number => {
    let count = 0;

    while (num) {
        num &= num - 1;
        count++;
    }

    return count;
};
