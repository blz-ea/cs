export const convertToTitle = (nums: number): string => {
    const result = [];

    while (nums > 0) {
        const char = String.fromCharCode(((nums - 1) % 26) + 65); // 65 is a char code of `A`
        result.push(char);
        nums = Math.floor((nums - 1) / 26);
    }

    return result.reverse().join('');
};
