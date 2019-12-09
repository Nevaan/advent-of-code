import { checkCriteria } from "../task7";
import { task8Criteria } from "../task8";

describe('task8', () => {


    test('', () => {
        expect(checkCriteria(112233, task8Criteria)).toBe(true);
        expect(checkCriteria(123444, task8Criteria)).toBe(false);
        expect(checkCriteria(111122, task8Criteria)).toBe(true);
    })

})