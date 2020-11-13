const lengthOfLastWord = (str: string): number => {
    let len = 0;
    let tail = str.length - 1;

    while (tail >= 0 && str[tail] == ' ') tail--;
    while (tail >= 0 && str[tail] !== ' ') {
        len++;
        tail--;
    }

    return len;
};

export default lengthOfLastWord;
