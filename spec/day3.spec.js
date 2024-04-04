const group = require('../day3');

describe("function group(line)", function() {
    it("Detects the numbers (group of digits) and convert them to an array of digits , for one input line", function() {
        expect(group("467..114..")).toEqual([ 467, 114 ]);
    });
});


