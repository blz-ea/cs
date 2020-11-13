/**
- create a helper function that will convert char to ASCII
- create an occurrency table in a form of fixed sized array

- loop over the string 
    - convert each character to ASCII code -97
    - populate occurency table

- loop over the string
    - for each character in the string check the corresponding
        index in occurrency table
    - if value is 1
        - return current index

- return -1
**/
const getIdxForChar = (char: string): number => char.charCodeAt(0) - 97;

const firstUniqueChar = (s: string): number => {
    if (!s) {
        return -1;
    }

    if (s.length === 1) {
        return 0;
    }

    const counts = new Array(26).fill(0);

    for (const char of s) {
        counts[getIdxForChar(char)]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (counts[getIdxForChar(s[i])] === 1) {
            return i;
        }
    }

    return -1;
};

export default firstUniqueChar;
