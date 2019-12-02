import { input2 } from './input2';

export interface ExtractedValues {
    resultIndex: number;
    operand1: number;
    operand2: number;
}

export const opCode1 = (value1: number, value2: number): number => {
    return value1 + value2;
}

export const opCode2 = (value1: number, value2: number): number => {
    return value1 * value2;
}

export const extractValues = (programCode: number[], position: number): ExtractedValues => {
    return {
        resultIndex: programCode[position+3],
        operand1: programCode[position+1],
        operand2: programCode[position+2]
    }
}

export const calculate = (programCode: number[], currentPosition: number): number[] => {
    const command = programCode[currentPosition]; 
    switch (command) {
        case 99:
            return programCode;
        case 1: 
            const values: ExtractedValues = extractValues(programCode, currentPosition);
            return programCode.map((value, index) => {
                if(index === values.resultIndex) {
                    return opCode1(programCode[values.operand1], programCode[values.operand2]);
                }
                return value;
            });
        case 2: 
        const values2: ExtractedValues = extractValues(programCode, currentPosition);
            return programCode.map((value, index) => {
                if(index === values2.resultIndex) {
                    return opCode2(programCode[values2.operand1], programCode[values2.operand2]);
                }
                return value;
            });
    };
    return [];
}

export const interpret = (programCode: number[]): number[] => {
    let position = 0;
    let currentCodeState = [...programCode];
    while(currentCodeState[position] !== 99) {
        currentCodeState = calculate(currentCodeState, position);
        position += 4;
    }
    return currentCodeState;
}

export const countWithParams = (firstInput: number, secondInput: number): number => {
    input2[1]=firstInput;
    input2[2]=secondInput;
    return interpret(input2)[0];
}

export const task3Fn = (): number => {
    return countWithParams(12,2);
}

require('make-runnable');