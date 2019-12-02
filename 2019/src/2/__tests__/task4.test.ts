import { outputFn, getPairs } from '../task4';

describe('task4', () => {

    test('outputFn test', () => {
        expect(outputFn(12, 2)).toBe(1202);
    });

    test('get pairs', () => {
        expect(getPairs(2)).toEqual([
            {
                left: 0,
                right: 0
            },
            {
                left: 0,
                right: 1
            },
            {
                left: 0,
                right: 2
            },
            {
                left: 1,
                right: 0
            },
            {
                left: 1,
                right: 1
            },
            {
                left: 1,
                right: 2
            },
            {
                left: 2,
                right: 0
            },
            {
                left: 2,
                right: 1
            },
            {
                left: 2,
                right: 2
            }
        ]);
        expect(getPairs(5).length).toEqual(36);
    });
})