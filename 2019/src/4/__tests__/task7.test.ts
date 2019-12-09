import { checkCriteria, task7TestFns } from '../task7'

describe('task7', () => {


    test('checkCriteria', () => {
        expect(checkCriteria(111111, task7TestFns)).toBe(true);
        expect(checkCriteria(223450, task7TestFns)).toBe(false);
        expect(checkCriteria(123789, task7TestFns)).toBe(false);
    })

})