const sqrt = (x: number): number => {
    let n = x;
    while (n * n > x) {
        n = ((n + x / n) / 2) | 0;
    }

    return n;
};

export { sqrt };
