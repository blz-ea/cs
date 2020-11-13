const strStr = (haystack: string, needle: string): number => {
    const needleLength = needle.length;
    const haystackLength = haystack.length;

    if (needleLength === 0) {
        return 0;
    }

    if (needleLength > haystackLength || haystackLength === 0) {
        return -1;
    }

    for (let i = 0; i < haystackLength; i++) {
        if (haystack.slice(i, i + needleLength) === needle) {
            return i;
        }
    }

    return -1;
};

export default strStr;
