import { day4LowerLimit, day4UpperLimit } from "./input4";

export const task7TestFns = [
    (x: number): boolean => {
        let xAsString = "" + x;
        return xAsString.length === 6;
    },
    (x: number): boolean => {
        let xAsString = "" + x;
        let digitArray: string[] = xAsString.split("");

        return digitArray.reduce((acc, current) => {
            let currentAdjacentTest = acc.lastProcessedDigit === current;
            return {
                lastProcessedDigit: current, testResult: acc.testResult || currentAdjacentTest
            }
        }, { lastProcessedDigit: '0', testResult: false }).testResult;
    },
    (x: number): boolean => {
        let xAsString = "" + x;
        let digitArray: string[] = xAsString.split("");

        return digitArray.reduce((acc, current) => {
            let currentIncreaseTest = +acc.lastProcessedDigit <= +current;
            return {lastProcessedDigit: current, testResult: acc.testResult && currentIncreaseTest };
        }, {lastProcessedDigit: '0', testResult: true }).testResult;
    }
];

export const checkCriteria = (testNumber: number, criteria: ((x: number) => boolean)[]): boolean => {
    return criteria.every(fn => fn(testNumber));
}

export const task7Fn = () => {
    let count = 0;
    for(let i = day4LowerLimit; i <= day4UpperLimit; i++) {
        if(checkCriteria(i, task7TestFns)) count ++;
    }

    return count;
}

require('make-runnable');