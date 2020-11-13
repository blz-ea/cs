const fib = (n: number): number => {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return fib(n - 1) + fib(n - 2);
};

const fib2 = (n: number): number => {
    if (n === 0) {
        return 0;
    }

    let memo = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        const last = memo[memo.length - 1];
        const secondToLast = memo[memo.length - 2];
        memo = [last, last + secondToLast];
    }

    return memo[memo.length - 1];
};

const fib3 = (n: number): number => {
    if (n > 70) {
        throw new Error('n should be less than 70');
    }

    const sqrtOfFive = Math.sqrt(5);

    const phi1 = (1 + sqrtOfFive) / 2;
    const phi2 = (1 - sqrtOfFive) / 2;

    const ans = (Math.pow(phi1, n) - Math.pow(phi2, n)) / sqrtOfFive;

    return Math.floor(ans);
};

const fib4 = (n: number): number => {
    // If we have specific constraints we can pre-calculate fibonacci numbers and just return values in O(1) time
    if (n > 30) {
        throw new Error('n should be less than 30');
    }
    const fibs = [
        0,
        1,
        1,
        2,
        3,
        5,
        8,
        13,
        21,
        34,
        55,
        89,
        144,
        233,
        377,
        610,
        987,
        1597,
        2584,
        4181,
        6765,
        10946,
        17711,
        28657,
        46368,
        75025,
        121393,
        196418,
        317811,
        514229,
        832040,
    ];

    return fibs[n];
};

export { fib, fib2, fib3, fib4 };
