import addBinary from './solution-ts';

test('Testing `addBinary`', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1010', '1011')).toBe('10101');
});
