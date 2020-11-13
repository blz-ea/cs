const plusOne = (digits: number[]): number[] => {
    /**
     * Cases:
     * 1. input contain 9
     * 2. input does not contain 9
     *
     * Start loop from the end of array
     *  if current value is not 9; case 2
     *   add + 1 and return array
     *  else; case 1
     *   set current value to be 0 keep looping
     *
     * add 1 to the beginning of the array;
     */

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
};

export default plusOne;
