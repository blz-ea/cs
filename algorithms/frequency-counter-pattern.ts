/**
 * Frequency Counter Pattern
 * Example #1
 * Write a function which takes in a string and returns counts of each character in the string
 *
 **/

const charCount = (str: string): Record<string, number> => {
    // 1. make object to return at end
    const result = {};
    // if char is smt. else (space, period etc.) don't do anything
    const filteredStr = str.toLowerCase();

    // loop over string, for each character
    for (const char of filteredStr) {
        // if the char is a number/letter AND is a key in the object, add one to the count
        // if the char is a number/letter AND is not in the object, add it and set value to 1
        result[char] = ++result[char] || 1;
    }
    // 3. return an object with keys that are lowercase alphanumeric characters in the string;
    // values should be an amount of times character appeared in the string;
    return result;
};

// Instead of using regular expressions we can use below function to check if character is AlphaNumeric
function isAlphaNumeric(char) {
    const charCode = char.charCodeAt(0);

    if (
        !(charCode > 47 && charCode < 58) && // numeric 0-9
        !(charCode > 64 && charCode < 91) && // upper case alpha A-Z
        !(charCode > 96 && charCode < 123) // lower alpha a-z
    ) {
        return false;
    }
    return true;
}

console.log(charCount('aaaa')); // { a: 4 }
console.log(charCount('hello')); // { h: 1, e: 1, l: 2, o: 1 }
