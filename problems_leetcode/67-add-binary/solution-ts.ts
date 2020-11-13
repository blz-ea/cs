const addBinary = (a: string, b: string): string => {
    const values = [];
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry) {
        carry += (+a[i] || 0) + (+b[j] || 0);
        values.unshift(carry % 2);
        carry = Math.floor(carry / 2);
        i--;
        j--;
    }

    return values.join('');
};

export default addBinary;
