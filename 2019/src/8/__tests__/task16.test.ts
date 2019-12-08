import { merge, getEmptyArraysArray, mergeLayers, takeFirstOtherThan } from '../task16';


describe('task16', () => {


    test('zip', () => {

        let list1 = [[1],[2],[3],[4],[5],[6]];
        let list2 = [6,5,4,3,2,1]
        let result1 = merge(list1,list2);
        expect(result1).toEqual([
            [1, 6],
            [2, 5],
            [3, 4],
            [4, 3],
            [5, 2],
            [6, 1]
        ]);
        let list3 = [0, 0, 0, 0, 0, 0];
        let result2= merge(result1, list3);
        expect(result2).toEqual([
            [1, 6, 0],
            [2, 5, 0],
            [3, 4, 0],
            [4, 3, 0],
            [5, 2, 0],
            [6, 1, 0]
        ]);
    });

    test('getEmptyArraysArray', () => {
        expect(getEmptyArraysArray(5).length).toBe(5);
        expect(getEmptyArraysArray(3)).toEqual([[],[],[]]);
    })

    test('mergeLayers', () => {
        expect(mergeLayers("0222112222120000", 2, 2)).toEqual([
            [0, 1, 2, 0],
            [2, 1, 2, 0],
            [2, 2, 1, 0],
            [2, 2, 2, 0]
        ])
    });

    test('takeFirstOtherThan', () => {
        expect(takeFirstOtherThan([0,0,0,0,0,4,0,2], 0)).toBe(4);
    });

})