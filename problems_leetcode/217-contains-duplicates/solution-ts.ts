const containsDuplicates = (nums: number[]): boolean => {
    if (nums.length === 0) return false;

    const set = new Set();

    for (const i of nums) {
        if (set.has(i)) {
            return true;
        } else {
            set.add(i);
        }
    }

    return false;
};

export default containsDuplicates;
