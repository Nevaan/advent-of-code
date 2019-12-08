import { countLayersNumber, sliceIntoLayers, mapLayerIntoNumberArray, findLayerWithFewestDigit } from '../task15';

describe('task15', () => {


    test('countLayersNumber', () => {

        expect(countLayersNumber("123456789012", 2, 3)).toBe(2);
    })

    test('sliceIntoLayers', () => {
        expect(sliceIntoLayers("123456789012", 2, 3)).toEqual([
            "123456",
            "789012"
        ])
    })

    test('mapLayerIntoNumberArray', () => {
        expect(mapLayerIntoNumberArray("1234567890")).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    })

    test('findLayerWithFewestDigit', () => {
        
        expect(findLayerWithFewestDigit("123456789012005436324154",2 ,3, 0)).toEqual(
            [
                0,0,5,4,3,6
            ]
        )
    });

})