
import { getCrossingPoints, Point, getWirePath } from './task5';
import { path1, path2 } from './input3';

export const findShortestInterceptionDistance = (path1: string[], path2: string[]): number => {
    let wire1: Point[] = getWirePath(path1);
    let wire2: Point[] = getWirePath(path2);
    let crossingPaths: Point[] = getCrossingPoints(wire1, wire2);

    let distances = crossingPaths.map(point => {
        return wire1.findIndex( p1 => p1.x === point.x && p1.y === point.y) + wire2.findIndex(p2 => p2.x === point.x && p2.y === point.y);
    });

    return Math.min(...distances);
}

export const task6fn = () => {
    return findShortestInterceptionDistance(path1, path2);
}

require('make-runnable');