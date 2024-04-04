const readFileLines = require('./readDataFile');
const file = './input.txt';
const isDigit = require('./common')

function sumFromLines(lines) {
    let sum = 0

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        let filteredLine = line.split('').filter(isDigit).join('');
        let result
        //One digit by line
        if (filteredLine.length === 1) {
            result = parseInt('' + filteredLine + filteredLine)
            sum += result
        } else { //more than one digit
            let leftDigit = filteredLine.charAt(0)
            let rightDigit = filteredLine.charAt(filteredLine.length - 1)
            result = parseInt(leftDigit + rightDigit)

            sum += result
        }
    }
    return sum
}

//Read the file input.txt
readFileLines(file)
    .then((lines) => {
       let sum = sumFromLines(lines)
       console.log('sum: ',sum)
    })
    .catch((error) => {
        console.error(`Error while reading the file : ${error}`);
    });

//Function call to print the total,and answers to day1 challenge.
readFileLines(file)


module.exports = sumFromLines;