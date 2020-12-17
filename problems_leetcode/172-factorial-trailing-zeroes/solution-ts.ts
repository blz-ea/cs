export const factorialNumberOfTrailingZeros = (num: number): number => {
    let sum = 0;

    while (num > 0) {
        const tmp = Math.floor(num / 5);
        sum += tmp;
        num = tmp;
    }

    return sum;
};
