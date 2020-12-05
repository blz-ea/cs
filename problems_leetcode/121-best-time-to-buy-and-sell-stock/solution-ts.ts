export const maxProfit = (prices: number[]): number => {
    let maxCurr = 0;
    let maxSoFar = 0;

    for (let i = 1; i < prices.length; i++) {
        maxCurr = Math.max(0, (maxCurr += prices[i] - prices[i - 1]));
        maxSoFar = Math.max(maxCurr, maxSoFar);
    }

    return maxSoFar;
};
