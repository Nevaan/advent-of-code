import { day6input } from "./input6";

export const getPathToRoot = () => {

};

export const createChildParentRelationsMap = (relations: string[]): Map<string, string> => {
    let result: Map<string, string> = new Map();
    relations.forEach( relation => {
        let nodes: string[] = relation.split(")");
        result.set(nodes[1], nodes[0]);
    }
    );
    return result;
}


export const findPath = (source: string, relationsAsString: string[]): string[] => {
    const target = "COM";

    let relations =  createChildParentRelationsMap(relationsAsString);

    let path: string[] = [];
    
    let parent = relations.get(source);

    while(parent !== target) {
        path = [...path, parent as string];
        parent = relations.get(parent as string);
    }

    path = [...path, target];

    return path;
}

export const getRoadDistance = (input: string[]): number => {
    let sanPath = findPath("SAN", input);
    let youPath = findPath("YOU", input);

    let lastCommonElementIndex = 1;

    while(sanPath[sanPath.length - lastCommonElementIndex] === youPath[youPath.length - lastCommonElementIndex]) {
        lastCommonElementIndex++;
    }
    lastCommonElementIndex;

    return sanPath.length - (lastCommonElementIndex - 1) + youPath.length - (lastCommonElementIndex - 1)

}

export const task12Fn = () => {
    return getRoadDistance(day6input);
}


require('make-runnable');