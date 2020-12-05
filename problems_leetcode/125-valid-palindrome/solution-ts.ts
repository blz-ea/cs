const isLetterOrDigit = (char: string): boolean => {
    if ((char < 'a' || char > 'z') && (char < '0' || char > '9')) {
        return false;
    }

    return true;
};

const isPalindrome = (str: string): boolean => {
    if (str.length === 0) {
        return false;
    }

    const s = str.toLowerCase();
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (!isLetterOrDigit(s[i])) {
            i++;
            continue;
        }

        if (!isLetterOrDigit(s[j])) {
            j--;
            continue;
        }

        if (s[i] !== s[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

const isPalindrome2 = (str: string): boolean => {
    const lowerCased = str.toLowerCase();
    const filtered = lowerCased.replace(/[^a-z0-9]/g, '');
    const reversed = filtered.split('').reverse().join('');

    return reversed === filtered;
};

export { isPalindrome2 };

export default isPalindrome;
