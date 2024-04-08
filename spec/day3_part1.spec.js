const { isSpecial , group} = require('../day3_part1')

describe("function group(line)", function() {
    it("Detects the numbers (group of digits) and convert them to an array of digits , for one input line", function() {
        expect(group("467..114..")).toEqual([ 467, 114 ])
    });
});

describe("function isSpecial(char)", function() {
    it("Returns true when a character is different from a digit and '.' ", function() {
        expect(isSpecial('.')).toEqual(false)
        expect(isSpecial('5')).toEqual(false)
        expect(isSpecial('#')).toEqual(true)
        expect(isSpecial('+')).toEqual(true)
        expect(isSpecial('*')).toEqual(true)
    });
});



