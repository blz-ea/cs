const factorialRecursive = (n: number): number => {
    if (n === 1 || n === 0) {
        return 1;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return n * factorialRecursive(n - 1);
};

const factorialIterative = (n: number): number => {
    let result = 1;

    if (n === 1 || n === 0) {
        return result;
    }

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
};

const factorialBottomUp = (n: number): number => {
    const memo = new Array(n + 1);
    memo[0] = 1;

    let i = 1;
    while (i <= n) {
        memo[i] = i * memo[i - 1];
        i++;
    }

    return memo[n];
};

export { factorialRecursive, factorialIterative, factorialBottomUp };
