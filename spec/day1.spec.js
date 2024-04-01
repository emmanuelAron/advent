//const sumFromLines = require('../day1');
//const readFileLines = require('../day1');
const sumFromLines = require('../day1')

describe('sumFromLines function', () => {
    it('should return the correct sum of digits from a one-digit number and a two-digit number , in input', () => {
        const arr = ['44', '1']; 
        expect(sumFromLines(arr)).toEqual(55); 
    });
    it('should return the correct sum of digits from a one-digit number and a three-digit number , in input', () => {
      const arr = ['7', '123']; 
      expect(sumFromLines(arr)).toEqual(90); 
  });
  
}
);