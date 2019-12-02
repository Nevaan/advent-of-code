import { countWithParams } from './task3';

export const outputFn = (noun: number, verb: number): number => {
    return 100 * noun + verb;
}

export const getPairs = (upperLimit: number): { left: number, right: number }[] => {
    const range = Array.from(Array(upperLimit+1).keys());
    let initial: { left: number, right: number }[] = [];

    return range.reduce((acc, currentIndex) => {
        let pairs: { left: number, right: number }[]= [];
        for(var i = 0; i <= upperLimit; i++) {
            pairs = [...pairs, {
                left: currentIndex,
                right: i
            }];
        }
        return [...acc, ...pairs];
    }, initial); 
}

export const task4Fn = (): number => {
    let pairs = getPairs(99);
    const computerIndexes = pairs.find((pair) => {
        let res = countWithParams(pair.left, pair.right);
        if(res===19690720) {
            return res;
        }
    });

    if(computerIndexes) {
        return outputFn(computerIndexes.left, computerIndexes.right);
    }
    return -1;
}

require('make-runnable');