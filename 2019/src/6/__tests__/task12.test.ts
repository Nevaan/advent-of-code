import { findPath, getRoadDistance } from '../task12';

describe('task12', () => {

    test('', () => {

        let input: string[] = [
            "COM)B",
            "COM)C",
            "B)D",
            "B)E",
            "B)F",
            "C)G"
        ]
        expect(findPath("F", input)).toEqual(["B", "COM"]);


        input = [            
            "COM)B",
            "B)C",
            "C)D",
            "D)E",
            "E)F",
            "B)G",
            "G)H",
            "D)I",
            "E)J",
            "J)K",
            "K)L"
        ]

        expect(findPath("F", input)).toEqual(["E", "D", "C", "B", "COM"]);

        expect(true).toBe(true);
    })

    test('getRoadDistance', () => { 

        let input = [
            "COM)B",
            "B)C",
            "C)D",
            "D)E",
            "E)F",
            "B)G",
            "G)H",
            "D)I",
            "E)J",
            "J)K",
            "K)L",
            "K)YOU",
            "I)SAN"
        ]

        expect(getRoadDistance(input)).toEqual(4);

    });

})