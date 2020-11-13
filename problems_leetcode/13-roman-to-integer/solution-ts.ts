const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

export function intToRoman(num: number): string {
    let result = '';

    for (const i in lookup) {
        while (num >= lookup[i]) {
            result += i;
            num -= lookup[i];
        }
    }

    return result;
}

export function romanToInt(roman: string): number {
    let result = 0;
    let i = 0;

    while (i < roman.length) {
        if (roman[i + 1] && lookup[roman[i] + roman[i + 1]]) {
            const char = roman[i] + roman[i + 1];
            result += lookup[char];
            i += 2;
        } else {
            result += lookup[roman[i]];
            i += 1;
        }
    }

    return result;
}
