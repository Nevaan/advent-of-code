import { path1, path2 } from './input3';

export interface Point {
    x: number;
    y: number;
}

export interface DecodedPath {
    direction: string;
    amount: number;
}

export const createPoints = () => {

}

export const getPath = (startingPoint: Point, path: string): Point[] => {
    let decodedPath = decodePath(path);

    switch(decodedPath.direction) {
        case "U":
            return rangeArray(decodedPath.amount).map(
                i => {
                    return {
                        x: startingPoint.x,
                        y: startingPoint.y + i
                    }
                }
            );
        case "D":
            return rangeArray(decodedPath.amount).map(
                i => {
                    return {
                        x: startingPoint.x,
                        y: startingPoint.y - i
                    }
                }
            )
            
        case "R":
            return rangeArray(decodedPath.amount).map(
                i => {
                    return {
                        x: startingPoint.x + i,
                        y: startingPoint.y
                    }
                }
            )
        case "L":
            return rangeArray(decodedPath.amount).map(
                i => {
                    return {
                        x: startingPoint.x - i,
                        y: startingPoint.y
                    }
                }
            )
    }
    return [];
}

export const rangeArray = (upperLimit: number) : number[] => {
    return [...Array.from(Array(upperLimit).keys())].map(i => { return i+1});
}


export const decodePath = (path: string): DecodedPath => {
    return {
        direction: path.substring(0,1),
        amount: +path.substring(1)
    }
}

export const getWirePath = (path: string[]): Point[] => {
    let startingPath: Point[] = [{x:0, y:0}];
    return path.reduce((acc, currentPath) => [...acc,  ...getPath(acc[acc.length-1], currentPath)], startingPath);
}

export const getCrossingPoints = (wire1:Point[] , wire2: Point[] ): Point[] => {

    return wire1.filter(point => {
        if(wire2.find((x) => x.x===point.x && x.y===point.y)!==undefined) return true;
        return false;
    }).filter(point => point.x !== 0 || point.y !==0);
}

export const taxiCab = (point1: Point, point2: Point): number => {
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y);
}

export const findShortestPath = (path1: string[], path2: string[]): number => {
    let wire1: Point[] = getWirePath(path1);
    let wire2: Point[] = getWirePath(path2);

    const crossingPoints: Point[] = getCrossingPoints(wire1, wire2);
    let paths: number[] = crossingPoints.map( point => taxiCab({x: 0, y: 0}, point));
    return Math.min(...paths);
}

// inefficient, probably can be refactored to give the result faster
export const task5fn = () => {
    return findShortestPath(path1, path2);
}

require('make-runnable');