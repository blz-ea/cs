const lengthOfLongestSubstringWithoutRepeating = (s: string): number => {
    if (s === '') {
        return 0;
    }

    const map: Record<string, number> = {};
    let maxLen = 0;
    let maxStr = '';
    let start = -1;

    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        if (val in map && map[val] > start) {
            start = map[val];
        }

        if (i - start > maxLen) {
            maxStr = s.slice(start + 1, i + 1);
        }
        map[val] = i;
        maxLen = Math.max(maxLen, i - start);
    }

    console.log(maxStr);
    return maxLen;
};

export default lengthOfLongestSubstringWithoutRepeating;
