const reverseInteger = (x: number): number => {
    const sign = x < 0 ? -1 : 1;
    const n = Math.abs(x).toString().split('');
    const reversed = Number.parseInt(n.reverse().join(''));

    // 32 bit signed integer's max value is 0x8fffffff - 1 which is 0x7fffffff
    if (reversed > 0x7fffffff || reversed <= -0x8fffffff) {
        return 0;
    }

    return sign * reversed;
};

const reverseInteger2 = (n: number): number => {
    let digit = 0;
    let result = 0;

    while (n) {
        digit = n % 10;
        result = result * 10 + digit;
        n = Math.trunc(n / 10);
    }

    return result > 0x7fffffff || result <= -0x8fffffff ? 0 : result;
};

export { reverseInteger, reverseInteger2 };
