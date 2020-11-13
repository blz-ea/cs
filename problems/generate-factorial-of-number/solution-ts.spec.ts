import { factorialRecursive, factorialIterative, factorialBottomUp } from './solution-ts';

const funcs = [factorialRecursive, factorialIterative, factorialBottomUp];

describe('Testring function that returns factorial of a number', () => {
    funcs.forEach((func) => {
        it(`should return factorial of a number - ${func.name}`, () => {
            expect(func(5)).toBe(120);
            expect(func(10)).toBe(3628800);
        });
    });
});
