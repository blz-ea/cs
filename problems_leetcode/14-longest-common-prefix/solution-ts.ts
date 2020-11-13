const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) {
        return '';
    }

    if (strs.length === 1) {
        return strs[0];
    }

    strs.sort();
    let result = '';

    for (let i = 0; i < strs[0].length; i++) {
        const charInLastString = strs[strs.length - 1][i];
        const charInFirstString = strs[0][i];

        if (charInFirstString === charInLastString) {
            result += charInFirstString;
        } else {
            break;
        }
    }
    return result;
};

export default longestCommonPrefix;
