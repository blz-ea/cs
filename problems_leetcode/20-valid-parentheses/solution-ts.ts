import Stack from '@ds/stack/typescript/Stack';

const hasBalancedParentheses = (str: string): boolean => {
    if (str.length === 0) {
        return true;
    }

    const stack = new Stack<string>();

    const open = {
        '{': '}',
        '[': ']',
        '(': ')',
    };

    const close = {
        '}': true,
        ']': true,
        ')': true,
    };

    for (const char of str) {
        if (open[char]) {
            stack.push(char);
        } else if (close[char]) {
            const popped = stack.pop();
            if (open[popped] !== char) {
                return false;
            }
        }
    }

    return true;
};

export default hasBalancedParentheses;
