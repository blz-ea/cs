const reverseString = (s: string[]): void => {
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        const temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start++;
        end--;
    }
};

const reverseStringCharAt = (str: string): string => {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }

    return reversed;
};

const reverseStringSubStr = (str: string): string => {
    let reversed = '';

    for (let i = str.length; i > 0; i--) {
        reversed += str.substring(i, i - 1);
    }

    return reversed;
};

export { reverseString, reverseStringCharAt, reverseStringSubStr };
