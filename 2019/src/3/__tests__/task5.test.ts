import { getPath, decodePath, getWirePath, getCrossingPoints, taxiCab, findShortestPath, rangeArray } from "../task5";

describe('task5', () => {


    test('decodePath first example path', () => {
        expect(getPath({x: 1, y:1}, 'R8')).toEqual([
            {x: 2, y: 1},
            {x: 3, y: 1},
            {x: 4, y: 1},
            {x: 5, y: 1},
            {x: 6, y: 1},
            {x: 7, y: 1},
            {x: 8, y: 1},
            {x: 9, y: 1}
        ]);

        expect(getPath({x: 9, y:1}, 'U5')).toEqual([
            {x: 9, y: 2},
            {x: 9, y: 3},
            {x: 9, y: 4},
            {x: 9, y: 5},
            {x: 9, y: 6}
        ]);

        expect(getPath({x: 9, y:6}, 'L5')).toEqual([
            {x: 8, y: 6},
            {x: 7, y: 6},
            {x: 6, y: 6},
            {x: 5, y: 6},
            {x: 4, y: 6}
        ]);

        expect(getPath({x: 4, y:6}, 'D3')).toEqual([
            {x: 4, y: 5},
            {x: 4, y: 4},
            {x: 4, y: 3}
        ]);
    })

    test('decodePath second example path', () => {
        expect(getPath({x: 1, y:1}, 'U7')).toEqual([
            {x: 1, y: 2},
            {x: 1, y: 3},
            {x: 1, y: 4},
            {x: 1, y: 5},
            {x: 1, y: 6},
            {x: 1, y: 7},
            {x: 1, y: 8}
        ]);

        expect(getPath({x: 1, y:8}, 'R6')).toEqual([
            {x: 2, y: 8},
            {x: 3, y: 8},
            {x: 4, y: 8},
            {x: 5, y: 8},
            {x: 6, y: 8},
            {x: 7, y: 8}
        ]);

        expect(getPath({x: 7, y:8}, 'D4')).toEqual([
            {x: 7, y: 7},
            {x: 7, y: 6},
            {x: 7, y: 5},
            {x: 7, y: 4}
        ]);

        expect(getPath({x: 7, y:4}, 'L4')).toEqual([
            {x: 6, y: 4},
            {x: 5, y: 4},
            {x: 4, y: 4},
            {x: 3, y: 4}
        ]);
    })

    test('decodePath', () => {
        expect(decodePath("D15")).toEqual({
            direction: 'D',
            amount: 15
        })
    })

    test('getWirePath', () => {
        expect(getWirePath([])).toEqual([{x:0, y:0}]);
        expect(getWirePath(["R8","U5","L5","D3"])).toEqual([
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
            {x: 4, y: 0},
            {x: 5, y: 0},
            {x: 6, y: 0},
            {x: 7, y: 0},
            {x: 8, y: 0},
            {x: 8, y: 1},
            {x: 8, y: 2},
            {x: 8, y: 3},
            {x: 8, y: 4},
            {x: 8, y: 5},
            {x: 7, y: 5},
            {x: 6, y: 5},
            {x: 5, y: 5},
            {x: 4, y: 5},
            {x: 3, y: 5},
            {x: 3, y: 4},
            {x: 3, y: 3},
            {x: 3, y: 2}
        ]);
    });

    test('getCrossingPoints', () => {

        let wire1 = [
            {x: 0, y: 0},
            {x: 0, y: 1},
            {x: 0, y: 2},
            {x: 0, y: 3},
            {x: 0, y: 4},
            {x: 0, y: 5},
            {x: 0, y: 6},
            {x: 0, y: 7},
            {x: 0, y: 8},
            {x: 1, y: 8},
            {x: 2, y: 8},
            {x: 3, y: 8},
            {x: 4, y: 8},
            {x: 5, y: 8},
            {x: 5, y: 7},
            {x: 5, y: 6},
            {x: 5, y: 5},
            {x: 5, y: 4},
            {x: 5, y: 3},
            {x: 4, y: 3},
            {x: 3, y: 3},
            {x: 2, y: 3}
        ]

        let wire2 = [
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
            {x: 4, y: 0},
            {x: 5, y: 0},
            {x: 6, y: 0},
            {x: 7, y: 0},
            {x: 7, y: 1},
            {x: 7, y: 2},
            {x: 7, y: 3},
            {x: 7, y: 4},
            {x: 7, y: 5},
            {x: 7, y: 6},
            {x: 6, y: 6},
            {x: 5, y: 6},
            {x: 4, y: 6},
            {x: 3, y: 6},
            {x: 3, y: 5},
            {x: 3, y: 4},
            {x: 3, y: 3},
            {x: 3, y: 2}
        ]

        const result = getCrossingPoints(wire1, wire2);
        expect(result.length).toBe(2);
        expect(result).toContainEqual({x: 3, y: 3});
        expect(result).toContainEqual({x: 5, y: 6});
    })

    test('taxiCab', () => {
        expect(taxiCab({x: 1, y:1}, {x: 4, y: 4})).toBe(6);
        expect(taxiCab({x: 1, y:1}, {x: 7, y: 6})).toBe(11);
    })

    test('findShortestPath', () => {
        expect(findShortestPath([
            "R75","D30","R83","U83","L12","D49","R71","U7","L72"
        ],[
            "U62","R66","U55","R34","D71","R55","D58","R83"
        ])).toBe(159);
        expect(findShortestPath([
            "R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"
        ],[
            "U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"
        ])).toBe(135);
    })

    test('rangeArray', () => {
        expect(rangeArray(5)).toEqual([1,2,3,4,5]);
    })

})