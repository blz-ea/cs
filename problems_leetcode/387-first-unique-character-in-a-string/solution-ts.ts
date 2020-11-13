const firstUniqueCharacterMap = (str: string): number => {
    const seen = new Map();
    for (const char of str) {
        if (seen.has(char)) {
            seen.set(char, seen.get(char) + 1);
        } else {
            seen.set(char, 1);
        }
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen.get(char) === 1) {
            return i;
        }
    }

    return -1;
};

const firstUniqueCharacterArray = (str: string): number => {
    const getIdxOfChar = (char: string) => char.charCodeAt(0) - 97;
    const counts = new Array(26).fill(0);

    for (const char of str) {
        counts[getIdxOfChar(char)]++;
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const idx = getIdxOfChar(char);

        if (counts[idx] === 1) {
            return i;
        }
    }

    return -1;
};

export { firstUniqueCharacterArray, firstUniqueCharacterMap };
