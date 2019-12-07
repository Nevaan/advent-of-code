import { checkCriteria } from '../task7'

describe('task7', () => {


    test('checkCriteria', () => {
        expect(checkCriteria(111111)).toBe(true);
        expect(checkCriteria(223450)).toBe(false);
        expect(checkCriteria(123789)).toBe(false);
    })

})