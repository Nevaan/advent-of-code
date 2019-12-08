import { getInterpreter, task3Commands, Command } from '../2/task3';

class Command3 implements Command {
    execute = (programCode: number[], currentPosition: number) => {
        return programCode;
    }
}

class Command4 implements Command {
    execute = (programCode: number[], currentPosition: number) => {
        return programCode;
    }
}

const task9Commands = (): Map<number, Command> => {
    const commandMap = task3Commands();
    commandMap.set(3, new Command3);
    commandMap.set(4, new Command4);
    return commandMap;
}


require('make-runnable');