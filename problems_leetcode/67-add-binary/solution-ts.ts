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

/**
 * Ripple carry adder
 * a1 -↘
 *       → HA → sum
 * b1 -↗      → carry--↘
 * a2 ---------------→ FA--→ sum
 * b2 ----------------↗    → carry-↘
 * a3 ----------------------------→ FA --→ sum
 * b3 ----------------------------↗        carry <- last carry will be a signal for overflow
 */
const addBinary2 = (a: string, b: string): string => {
    if (a.length !== b.length) {
        throw new Error('Length of `a` should equal to length of `b`');
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

/** Half adder adds two binary digits and returns sum and carry.
 * Carry signals represents the overflow.
 *
 * a →
 *      HA → sum
 * b →     → carry
 **/
function halfAdder(a, b) {
    const sum = xor(a, b);
    const carry = and(a, b);

    return [sum, carry];
}

/** Full adder add two binary digits but also accounts for
 * values carried in as well as out (Input: a,b,carry Output: sum, carry)
 *
 *    a  →
 *    b  →  FA → sum
 * carry →     → carry
 */

function fullAdder(a, b, carry) {
    const halfAdd1 = halfAdder(a, b);
    const halfAdd2 = halfAdder(halfAdd1[SUM], carry);
    const c = or(halfAdd1[CARRY], halfAdd2[CARRY]);

    return [halfAdd2[SUM], c];
}

// Logic Gates

/**
 * XOR (Exclusive or), evaluates to one if only exactly one of the bits is set
 * A B | Q
 * -------
 * 0 0 | 0
 * 0 1 | 1
 * 1 0 | 1
 * 1 1 | 0
 */
const xor = (a, b) => (a === b ? 0 : 1);

/** AND Evaluates to one if only both bits set to one
 * A B | Q
 * -------
 * 0 0 | 0
 * 0 1 | 0
 * 1 0 | 0
 * 1 1 | 1
 */
const and = (a, b) => (a == 1 && b == 1 ? 1 : 0);

/**
 * OR Evaluates to one if one of the bits is set to one
 * A B | Q
 *  -------
 * 0 0 | 0
 * 0 1 | 1
 * 1 0 | 1
 * 1 1 | 1
 */
const or = (a, b) => a || b;

export { addBinary, addBinary2 };
