import { day6input } from "./input6";

export class OrbitNode {
    id: string;
    children: Set<OrbitNode> = new Set<OrbitNode>();

    constructor(id: string) {
        this.id = id;
    };

    addChild(child: OrbitNode) {
        this.children.add(child);
    }
}

export const createRoot = (relation: string): OrbitNode => {
    let nodes: string[] = relation.split(")");
    let root = new OrbitNode(nodes[0]);
    let child = new OrbitNode(nodes[1]);
    root.addChild(child);
    return root;
}

export const createRelationsMap = (relations: string[]): Map<string, string[]> => {
    let result: Map<string, string[]> = new Map();
    relations.forEach( relation => {
        let nodes: string[] = relation.split(")");
        let mapElement = result.get(nodes[0]);
        if(mapElement=== undefined) {
            result.set(nodes[0], [nodes[1]]);
        } else {
            result.set(nodes[0], [...mapElement, nodes[1]]);
        }
    }
    );
    return result;
}

export const buildTree = (relationsMap: Map<string, string[]>): OrbitNode  => {
    
    const rootNodeName = "COM";

    let root = addChildrenToNode(new OrbitNode(rootNodeName), relationsMap);

    return root;
}

const addChildrenToNode = (rootNode: OrbitNode, relationsMap: Map<string, string[]>): OrbitNode => {

    let children = relationsMap.get(rootNode.id);
    
    if(children == undefined || !children.length) {
        return rootNode;
    }

    children.forEach(child => {
        let node = new OrbitNode(child);
        rootNode.addChild(addChildrenToNode(node, relationsMap));
    });

    return rootNode;
}

export const getTotalDeepness = (relationsMap: Map<string, string[]>): number => {
    const rootNodeName = "COM";

    let count = countDeepness(new OrbitNode(rootNodeName), relationsMap, 0);

    return count;
}

const countDeepness = (rootNode: OrbitNode, relationsMap: Map<string, string[]>, deepness: number): number => {
    let count = deepness;
    let children = relationsMap.get(rootNode.id);
    
    if(children == undefined || !children.length) {
        return count;
    }

    children.forEach(child => {
        let node = new OrbitNode(child);
        count += countDeepness(node, relationsMap, deepness + 1);
    });

    return count;
}

export const getTreeFromInput = (input: string[]): OrbitNode => {
    let relationsMap = createRelationsMap(input);
    return buildTree(relationsMap);
}

export const getDeepnessFromInput = (input: string[]): number => {
    let relationsMap = createRelationsMap(input);
    return getTotalDeepness(relationsMap);
}

export const task11Fn = () => {
    return getDeepnessFromInput(day6input);
}

require('make-runnable');