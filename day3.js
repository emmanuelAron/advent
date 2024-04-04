const isDigit = require('./common')

/** Function that detects numbers in a string (line) , and returns an array of numbers */
function group(line){
    let arr = []
    let currentNumber = '';
    for (let i = 0; i < line.length; i++) {
        let c = line.charAt(i);
        if (isDigit(c)) {
            currentNumber += c
        }else{
            //We prepare a split to have groups of digits at the end.
            currentNumber += ';'
        }
    }
    let result = currentNumber.split(";");
    //We need to remove the empty string elements of this array and converts the string elements into numbers.
    return result.filter(str => str !== '').map(str => parseInt(str));
}
module.exports = group;