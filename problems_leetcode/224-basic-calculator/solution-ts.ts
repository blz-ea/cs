import Stack from '@ds/stack/typescript/Stack';

const basicCalculator = (s: string): number => {
    if (s === null) {
        return 0;
    }
    let result = 0;
    let sign = 1;
    let num = 0;

    // Start from `+1` sign and scan `s` from left to right
    const stack = new Stack<number>();
    stack.push(sign);

    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);

        if (c >= '0' && c <= '9') {
            // if `c` is a digit: this number * 10 + this digit
            num = num * 10 + Number.parseInt(c);
        } else if (c === '+' || c === '-') {
            // if `c` is '+' or '-': Add num to result before this sign;
            result += sign * num;
            // this sign = last context sign * current sign
            sign = stack.peek() * (c === '+' ? 1 : -1);
            // clear num
            num = 0;
        } else if (c === '(') {
            // Push this context sign to stack
            stack.push(sign);
        } else if (c === ')') {
            // Pop this context, and we come back to last context
            stack.pop();
        }
    }

    // Add the last num, this is because we only add number after '+' or '-'
    result += sign * num;
    return result;
};

export default basicCalculator;
