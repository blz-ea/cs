import { sqrt } from './solution-ts';

test('Testing `sqrt`', () => {
    expect(sqrt(4)).toBe(2);
    expect(sqrt(8)).toBe(2);
    expect(sqrt(81)).toBe(9);
});
