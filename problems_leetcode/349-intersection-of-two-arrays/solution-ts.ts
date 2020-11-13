const arrayIntersection = (num1: number[], num2: number[]): number[] => {
    const result = [];
    const map = new Map();

    num1.forEach((el) => {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1);
        } else {
            map.set(el, 1);
        }
    });

    num2.forEach((el) => {
        if (map.get(el) >= 1) {
            result.push(el);
            map.set(el, map.get(el) - 1);
        }
    });

    return result;
};

export { arrayIntersection };
