import { findShortestInterceptionDistance } from '../task6';

describe('task6', () => {


    test('findShortestInterceptionDistance', () => {
        let i1 = 
        [
            "R75","D30","R83","U83","L12","D49","R71","U7","L72"
        ]

        let i2 = [
            "U62","R66","U55","R34","D71","R55","D58","R83"
        ]

        expect(findShortestInterceptionDistance(i1,i2)).toEqual(610);

        let i3= [
            "R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"
        ];
        let i4 = [
            "U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"
        ]
        expect(findShortestInterceptionDistance(i3,i4)).toEqual(410);

    })

})