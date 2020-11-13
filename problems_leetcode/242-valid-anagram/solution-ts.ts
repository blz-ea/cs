const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false;
    }

    if (s === t) {
        return true;
    }

    const map = new Map();

    for (const char of s) {
        if (!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }

    for (const char of t) {
        if (!map.has(char)) {
            return false;
        } else {
            map.set(char, map.get(char) - 1);
        }
    }

    return true;
};

export default isAnagram;
