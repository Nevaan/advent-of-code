import { fuelCeption } from "../task2"

test('test1', () => {
    expect(fuelCeption(14)).toBe(2);
})

test('test2', () => {
    expect(fuelCeption(1969)).toBe(966);
})

test('test3', () => {
    expect(fuelCeption(100756)).toBe(50346);
})