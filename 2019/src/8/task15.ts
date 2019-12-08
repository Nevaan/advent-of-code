import { day8Input } from './input8';

export const countLayersNumber = (input: string, h: number, w: number): number => {
    return input.length / (w*h);
}

export const sliceIntoLayers = (input: string, h: number, w: number): string[] => {

    let layers: string[]= [];
    let chunkSize = h*w;
    let idx = 0;

    while(chunkSize <= input.length) {
        layers = [...layers, input.slice(idx, chunkSize)];
        idx += h*w;
        chunkSize += h*w;
    }

    return layers;
}

export const mapLayerIntoNumberArray = (input: string): number[] => {
    return input.split("").map(e => +e);
}

export const findLayerWithFewestDigit = (input: string, h: number, w: number, digit: number): number[] => {
    let layers = createLayers(input,h,w);

    let fewestDigitsLayerIdx = layers
        .map((layer, idx) => { return { digits: countDigit(layer, digit), idx: idx}})
        .sort((digitsCount1, digitsCount2) => digitsCount1.digits - digitsCount2.digits)
    return layers[fewestDigitsLayerIdx[0].idx];
} 

export const createLayers = (input: string, h: number, w: number) => {
    return sliceIntoLayers(input, h, w)
    .map(layer => mapLayerIntoNumberArray(layer));
}

const countDigit = (input: number[], digit: number): number => {
    return input.filter(a => a===digit).length;
}

export const task15Fn = () => {
    let fewest0Layer = findLayerWithFewestDigit(day8Input, 6, 25, 0);
    return countDigit(fewest0Layer, 1) * countDigit(fewest0Layer, 2); 
}

require('make-runnable');