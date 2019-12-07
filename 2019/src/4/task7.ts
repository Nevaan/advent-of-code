import { day4LowerLimit, day4UpperLimit } from "./input4";

export const checkCriteria = (testNumber: number): boolean => {

    let numberAsString = "" + testNumber;

    if( numberAsString.length !== 6) {
        return false;
    }

    let digitArray: string[] = numberAsString.split("");

    let result = digitArray.reduce((acc, current) => {
        let currentAdjacentTest = acc.lastProcessedDigit === current;
        let currentIncreaseTest = +acc.lastProcessedDigit <= +current;

        return {
            lastProcessedDigit: current,
            adjacentTestResult: acc.adjacentTestResult || currentAdjacentTest,
            increaseTest: acc.increaseTest && currentIncreaseTest
        };
    }, {
        lastProcessedDigit: '0',
        adjacentTestResult: false,
        increaseTest: true
    });

    return result.adjacentTestResult && result.increaseTest;
}

export const task7Fn = () => {
    let count = 0;
    for(let i = day4LowerLimit; i <= day4UpperLimit; i++) {
        if(checkCriteria(i)) count ++;
    }

    return count;
}

require('make-runnable');