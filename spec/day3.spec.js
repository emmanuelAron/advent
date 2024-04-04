const group = require('../day3');
//const readFileLines = require('../readDataFile')
const fs = require('fs').promises;


describe("function group(line)", function() {
    it("Detects the numbers (group of digits) and convert them to an array of digits , for one input line", function() {
        expect(group("467..114..")).toEqual([ 467, 114 ]);
    });
});

describe("function adjacentOfchar", function() {
    it("Detects every adjacent character of a character an return an array of symbols", function(done) {
        fs.readFile("./inputSmall.txt", "utf-8")
            .then(content => {
                console.log(content); //File content
                done(); // end of test
            })
            .catch(error => {
                console.error(`Error while reading the file : ${error}`);
                done();
            });
    });
});


