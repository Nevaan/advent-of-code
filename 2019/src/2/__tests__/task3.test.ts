import {opCode1, opCode2, calculate, interpret, task3Fn} from '../task3';

describe('task3', () => {

    test('test1', () => {
        expect(opCode1(3,4)).toBe(7);
    });

    test('test2', () => {
        expect(opCode2(3,4)).toBe(12);
    });

    test('test calculate 1 at index 0', () => {
        expect(calculate([1,4,5,3,5,10], 0)).toEqual([1,4,5,15,5,10]);
    });

    test('test calculate 2 at index 0', () => {
        expect(calculate([2,4,5,3,5,10], 0)).toEqual([2,4,5,50,5,10]);
    });

    test('test calculate 3 at index 0', () => {
        expect(calculate([99,4,5,3,5,10], 0)).toEqual([99,4,5,3,5,10]);
    });

    test('test calculate 1 at index 4', () => {
        expect(calculate(
            [1,9,10,70,
             2,3,11,0,
             99,
             30,40,50
            ], 4)).toEqual([
                3500,9,10,70,
                2,3,11,0,
                99,
                30,40,50
            ]);
    });

    test('test calculate 2 at index 4', () => {
        expect(calculate([1,9,10,70,
                          1,3,11,0,
                          99,
                          30,40,50
                        ], 4)).toEqual([
                            120,9,10,70,
                            1,3,11,0,
                            99,
                            30,40,50
                        ]);
    });

    test('test interpret 1', () => {
        expect(interpret([1,0,0,0,99])).toEqual([2,0,0,0,99]);
    });

    test('test interpret 2', () => {
        expect(interpret([2,3,0,3,99])).toEqual([2,3,0,6,99]);
    });

    test('test interpret 3', () => {
        expect(interpret([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
    });

})