import hasBalancedParentheses from './solution-ts';

test('Testing if a string has balanced parentheses', () => {
    expect(hasBalancedParentheses('{}')).toBe(true);
    expect(hasBalancedParentheses('()[]{}')).toBe(true);
    expect(hasBalancedParentheses('(]')).toBe(false);
    expect(hasBalancedParentheses('([)]')).toBe(false);
    expect(hasBalancedParentheses('{test}{}{text}{}{}')).toBe(true);
    expect(hasBalancedParentheses('{{{{{[[[[]]]]}}}}}')).toBe(true);
    expect(hasBalancedParentheses('{{{{{[[[[]]]]}}}}}]{test}][')).toBe(false);
});
