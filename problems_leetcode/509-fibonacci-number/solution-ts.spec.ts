import { fib, fib2, fib3, fib4 } from './solution-ts';

describe('Testing functions that return Fibonacci numbers', () => {
    const funcs = [fib, fib4];
    funcs.forEach((func) => {
        it(`should return nth Fibonacci number  - ${func.name}`, () => {
            expect(func(5)).toBe(5);
            expect(func(30)).toBe(832040);
        });
    });

    const funcs2 = [fib2, fib3];

    funcs2.forEach((func) => {
        it(`should return nth Fibonacci number  - ${func.name}`, () => {
            expect(func(5)).toBe(5);
            expect(func(30)).toBe(832040);
            expect(func(70)).toBe(190392490709135);
        });
    });
});
