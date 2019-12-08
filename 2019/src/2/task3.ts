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

export interface Command {
    execute: (programCode: number[], currentPosition: number) => number[];
}

class Command99 implements Command {
    execute = (programCode: number[], currentPosition: number) => {
        return programCode;
    }
}

class Command1 implements Command {
    execute = (programCode: number[], currentPosition: number) => {
        const values: ExtractedValues = extractValues(programCode, currentPosition);
            return programCode.map((value, index) => {
                if(index === values.resultIndex) {
                    return opCode1(programCode[values.operand1], programCode[values.operand2]);
                }
                return value;
        });
    }
}

class Command2 implements Command {
    execute = (programCode: number[], currentPosition: number) => {
        const values2: ExtractedValues = extractValues(programCode, currentPosition);
            return programCode.map((value, index) => {
                if(index === values2.resultIndex) {
                    return opCode2(programCode[values2.operand1], programCode[values2.operand2]);
                }
                return value;
            });
    }
}

export const getInterpreter = (commands: Map<number, Command>): (programCode: number[], currentPosition: number) => number[]  => {
    return (programCode: number[], currentPosition: number): number[] => {
        const command = programCode[currentPosition]; 
        return (commands.get(command) as Command).execute(programCode, currentPosition);
    }
};

export const task3Commands = (): Map<number, Command> => {
    const commandMap: Map<number, Command> = new Map<number,Command>();
    commandMap.set(1, new Command1);
    commandMap.set(2, new Command2);
    commandMap.set(99, new Command99);
    return commandMap;
}

export const calculate = (programCode: number[], currentPosition: number): number[] => {
    let interpreter = getInterpreter(task3Commands());
    return interpreter(programCode, currentPosition);
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