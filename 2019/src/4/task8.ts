import { day4LowerLimit, day4UpperLimit } from "./input4";
import { checkCriteria, task7TestFns } from "./task7";

export const task8Criteria = [
    ...task7TestFns,
    (x: number): boolean => {
        let xAsString = "" + x;
        let digitArray: string[] = xAsString.split("");
        let occurenceMap: Map<string, number> = new Map<string, number>();
        digitArray.forEach(elem => {
            let occurences = occurenceMap.get(elem);
            if(occurences === undefined) {
                occurenceMap.set(elem, 1);
            } else {
                occurenceMap.set(elem, occurences + 1);
            }
        });
        let counts: number[] = [];
         for( let entry of occurenceMap.values()) {
            counts = [...counts, entry];
         }
        return counts.some(x => x===2);
    }
]

export const task8Fn = () => {
    let count = 0;
    for(let i = day4LowerLimit; i <= day4UpperLimit; i++) {
        if(checkCriteria(i, task8Criteria)) count ++;
    }

    return count;
}

require('make-runnable');