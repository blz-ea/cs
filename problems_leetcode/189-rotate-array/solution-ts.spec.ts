import * as rotateFunctions from './solution-ts';

for (const func of Object.values(rotateFunctions)) {
    test(`should test ${func.name}`, () => {
        const data = [1, 2, 3, 4, 5, 6, 7];
        func.call(null, data, 3);
        expect(data).toEqual([5, 6, 7, 1, 2, 3, 4]);
        func.call(null, data, 6);
        expect(data).toEqual([6, 7, 1, 2, 3, 4, 5]);
        func.call(null, data, 7);
        expect(data).toEqual([6, 7, 1, 2, 3, 4, 5]);
        func.call(null, data, 8);
        expect(data).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
}
