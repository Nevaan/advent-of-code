import { createLayers, sliceIntoLayers } from './task15';
import { day8Input } from './input8';

export const mergeLayers = (input: string, h: number, w: number ): number[][] => {
    let result: string[][] = [];

    let layers = createLayers(input, h, w);
    
    return layers.reduce((acc, layer) => {
        return merge(acc,layer);
    }, getEmptyArraysArray(w*h))

}

export function getEmptyArraysArray<T>(countOfArrays: number) {
    let result: any[] = [];
    
    if(countOfArrays>0) {
        result =  [...Array.from(Array(countOfArrays).keys())].map(() => []);
    }
    return result;
}

export function merge<T>(accumulatorList: T[][], listToMerge: T[]): T[][] {

    return accumulatorList.map(
        (accElement, index) => {
            return [...accElement, listToMerge[index]]
        }
    )
}

export const takeFirstOtherThan = (list: number[], notWanted: number): number => {
    let checked = list.shift();
    while(checked == notWanted) {
        checked = list.shift();
    }

    return checked === undefined ? notWanted: checked;
}

export const task16Fn = () => {
    let layers: number[][] = mergeLayers(day8Input, 6, 25);
    let result = layers.map(layer => takeFirstOtherThan(layer, 2));
    let resultAsString = result.reduce((acc, val) => acc+ val, "");
    let readable: string[] = sliceIntoLayers(resultAsString, 25,1);
    readable = readable.map( line => {
        return line.split("").map(i => (i === "0" ? ' ' : i)).join("")
    });
    console.dir(readable);
    return result;
}

require('make-runnable');