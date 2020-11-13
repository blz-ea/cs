const countAndSay = (n: number): string => {
    if (n === 1) {
        return '1';
    }

    return countAndSay(n - 1)
        .match(/1+|2+|3+/g)
        .reduce((acc, nums) => (acc += `${nums.length}${nums[0]}`), '');
};

const countAndSay2 = (n: number): string => {
    if (n <= 1) {
        return '1';
    }

    let before = '1';
    let after = '';

    for (let i = 0; i < n - 1; i++) {
        let count = 1;
        let ba = before[0];

        for (const a of before.slice(1)) {
            if (a !== ba) {
                after = after + count.toString() + ba;
                ba = a;
                count = 1;
            } else {
                count++;
            }
        }

        after = after + count.toString() + ba;
        before = after;
        after = '';
    }

    return before;
};

const countAndSay3 = (n: number): string => {
    /**
     * Initialize str variable with '1'
     * loop from 1 till n
     *   split `str` <- list
     *   set str to empty string
     *   set count to 1
     *
     *   loop from 0 till end of array:
     *     if current value is not equal to current value + 1
     *       concat str to be count plus current value (say)
     *     else
     *       increment count
     */

    let str = '1';

    for (let i = 1; i < n; i++) {
        const strArray = str.split('');
        str = '';
        let count = 1;

        for (let j = 0; j < strArray.length; j++) {
            if (strArray[j] !== strArray[j + 1]) {
                str += count + strArray[j];
            } else {
                count++;
            }
        }
    }

    return str;
};

export { countAndSay, countAndSay2, countAndSay3 };
