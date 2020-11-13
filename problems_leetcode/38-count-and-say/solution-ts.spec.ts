import { countAndSay, countAndSay2, countAndSay3 } from './solution-ts';

test('returns count-and-say sequence of integers', () => {
    expect(countAndSay(1)).toBe('1');
    expect(countAndSay(4)).toBe('1211');

    expect(countAndSay2(4)).toBe('1211');
    expect(countAndSay2(1)).toBe('1');

    expect(countAndSay3(4)).toBe('1211');
    expect(countAndSay3(1)).toBe('1');
});
