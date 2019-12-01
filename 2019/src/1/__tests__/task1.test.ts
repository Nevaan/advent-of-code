import { fuelCounter } from '../task1';

test('test1', () => {
    expect(fuelCounter(12)).toBe(2);
})

test('test2', () => {
    expect(fuelCounter(14)).toBe(2);

})

test('test3', () => {
    expect(fuelCounter(1969)).toBe(654);

})

test('test4', () => {
    expect(fuelCounter(100756)).toBe(33583);

})