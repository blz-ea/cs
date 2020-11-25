const addBinary = (a: string, b: string): string => {
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry) {
        carry += (+a[i] || 0) + (+b[j] || 0);
        result = (carry % 2) + result;
        carry = Math.floor(carry / 2);
        i--;
        j--;
    }

    return result;
};

const SUM = 0;
const CARRY = 1;

const addBinary2 = (a: string, b: string): string => {
    if (a.length !== b.length) {
        throw new Error('Length of a should equal to length of b');
    }

    let sum = '';
    let carry = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        if (i === a.length - 1) {
            //half add the first pair
            const halfAdd = halfAdder(a[i], b[i]);
            sum = halfAdd[SUM] + sum;
            carry = halfAdd[CARRY];
        } else {
            //full add the rest
            const fullAdd = fullAdder(a[i], b[i], carry);
            sum = fullAdd[SUM] + sum;
            carry = fullAdd[CARRY];
        }
    }

    return carry ? carry + sum : sum;
};

function halfAdder(a, b) {
    const sum = xor(a, b);
    const carry = and(a, b);

    return [sum, carry];
}

function fullAdder(a, b, carry) {
    const halfAdd1 = halfAdder(a, b);
    const halfAdd2 = halfAdder(halfAdd1[SUM], carry);
    const c = or(halfAdd1[CARRY], halfAdd2[CARRY]);

    return [halfAdd2[SUM], c];
}

//logic gates
const xor = (a, b) => (a === b ? 0 : 1);
const and = (a, b) => (a == 1 && b == 1 ? 1 : 0);
const or = (a, b) => a || b;

export { addBinary, addBinary2 };
