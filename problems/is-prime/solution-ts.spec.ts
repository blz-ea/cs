import { isPrime, isPrimeOptimized } from './solution-ts';

describe('Testring function that checks prime numbers', () => {
    const funcs = [isPrime, isPrimeOptimized];

    funcs.forEach((func) => {
        it(`should verify prime number - ${func.name}`, () => {
            expect(func(11)).toBeTruthy();
            expect(func(15)).toBeFalsy();
            expect(func(67)).toBeTruthy();
            expect(func(541)).toBeTruthy();
        });
    });
});
