const isPalindromeNumber = (x: number): boolean => {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    const original = x;
    let reversed = 0;

    while (x) {
        reversed = reversed * 10 + Math.round(x % 10);
        x = Math.round(x / 10);
    }

    return reversed === original;
};

export default isPalindromeNumber;
