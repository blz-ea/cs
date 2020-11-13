import { reverseStringCharAt, reverseString, reverseStringSubStr } from './solution-ts';

test('reverse string in place', () => {
    const str = ['h', 'e', 'l', 'l', 'o'];
    const strReversed = ['o', 'l', 'l', 'e', 'h'];

    reverseString(str);
    expect(str).toEqual(strReversed);

    const str2 = ['H', 'a', 'n', 'n', 'a', 'h'];
    const str2Reversed = ['h', 'a', 'n', 'n', 'a', 'H'];

    reverseString(str2);
    expect(str2).toEqual(str2Reversed);
});

test('reverse string primitive solutions', () => {
    const str = 'reverseme';
    const reversed = 'emesrever';

    expect(reverseStringCharAt(str)).toBe(reversed);
    expect(reverseStringSubStr(str)).toBe(reversed);
});
