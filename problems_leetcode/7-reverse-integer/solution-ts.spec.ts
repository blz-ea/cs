import { reverseInteger, reverseInteger2 } from './solution-ts';

const funcs = [reverseInteger, reverseInteger2];

describe('Testing reverse integer', () => {
    funcs.forEach((func) => {
        test(`reverse integer - ${func.name}`, () => {
            expect(func(123)).toBe(321);
            expect(func(-123)).toBe(-321);
            expect(func(120)).toBe(21);
            expect(func(98237568623785)).toBe(0);
            expect(func(0)).toBe(0);
            expect(func(-0)).toBe(0);
        });
    });
});
