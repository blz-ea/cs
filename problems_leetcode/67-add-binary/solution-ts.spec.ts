import { addBinary, addBinary2 } from './solution-ts';

test('Testing `addBinary`', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1010', '1011')).toBe('10101');
});

test('Testing `addBinary2`', () => {
    expect(addBinary2('11', '01')).toBe('100');
    expect(addBinary2('1010', '1011')).toBe('10101');
});
