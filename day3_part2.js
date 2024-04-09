const isDigit = require('./common');
const readFileLines = require('./readDataFile');
const file = './inputDay3.txt';

/** Function that detects numbers in a string (line) , and returns an array of numbers */
function group(line) {
    let arr = []
    let currentNumber = '';
    for (let i = 0; i < line.length; i++) {
        let c = line.charAt(i);
        if (isDigit(c)) {
            currentNumber += c
        } else {
            //We prepare a split to have groups of digits at the end.
            currentNumber += ';'
        }
    }
    let result = currentNumber.split(";");
    //We need to remove the empty string elements of this array and converts the string elements into numbers.
    return result.filter(str => str !== '').map(str => parseInt(str))
}
/**Detects every special character around one input character.
 * If we dont consider the borders, we have 8 non-special character around a character */
function adjacentOfchar(grid, row, col) {
    let result = [];
    let currentPos = grid[row][col]
    if (isDigit(currentPos)) {
        let south = null;
        if (row + 1 < grid.length) {
            south = grid[row + 1][col];
            if (isSpecial(south))
                result.push(south)
        }
        let north = null;
        if (row - 1 >= 0) {
            north = grid[row - 1][col];
            if (isSpecial(north))
                result.push(north);
        }
        let east = null;
        if (col + 1 < grid[row].length) {
            east = grid[row][col + 1];
            if (isSpecial(east))
                result.push(east);
        }
        let west = null;
        if (col - 1 >= 0) {
            west = grid[row][col - 1];
            if (isSpecial(west))
                result.push(west);
        }
        let southEast = null;
        if (row + 1 < grid.length && col + 1 < grid[row].length) {
            southEast = grid[row + 1][col + 1];
            if (isSpecial(southEast))
                result.push(southEast);
        }
        let southWest = null;
        if (row + 1 < grid.length && col - 1 >= 0) {
            southWest = grid[row + 1][col - 1];
            if (isSpecial(southWest))
                result.push(southWest);
        }
        let northEast = null;
        if (row - 1 >= 0 && col + 1 < grid[row].length) {
            northEast = grid[row - 1][col + 1];
            if (isSpecial(northEast))
                result.push(northEast);
        }
        let northWest = null;
        if (row - 1 >= 0 && col - 1 >= 0) {
            northWest = grid[row - 1][col - 1];
            if (isSpecial(northWest))
                result.push(northWest);
        }
    }
    return result;
}

// Converts lines in a grid
function processFileAsGrid(lines) {
    return lines.map(line => line.split(''));
}

/** Return true when a character 'is special' , i.e. , different of '.' and digit */
function isSpecial(char) {
    return !isDigit(char) && char !== '.'
}

// Extract numbers , given a line.It constructs array of objects.
function processLineForNumbers(line, lineIndex) {
    const numbers = [];
    let start = -1;
    let currentNumber = '';
    let currentIndexes = [];
    for (let j = 0; j < line.length; j++) {
        const currentChar = line[j];
        if (isDigit(currentChar)) {
            if (start === -1) {
                start = j;
            }
            currentIndexes.push(j);
            currentNumber += currentChar;
        } else {
            if (start !== -1) {
                numbers.push({
                    number: parseInt(currentNumber),
                    line: lineIndex,
                    indexes: currentIndexes
                });
                start = -1;
                currentNumber = '';
                currentIndexes = [];
            }
        }
    }
    if (start !== -1) {
        numbers.push({
            number: parseInt(currentNumber),
            line: lineIndex,
            indexes: currentIndexes
        });
    }
    return numbers;
}

// It extracts specials characters , given a line.It construct an array of objects.
function processLineForSpecialCharacters(line, lineIndex) {
    const specialCharacters = [];
    for (let j = 0; j < line.length; j++) {
        const currentChar = line[j];
        if (isSpecial(currentChar)) {
            specialCharacters.push({
                special: currentChar,
                line: lineIndex,
                column: j
            });
        }
    }
    return specialCharacters;
}

// Read the lines
readFileLines(file)
    .then((lines) => {
        const grid = processFileAsGrid(lines) //you can log it

        const allNumbers = []
        const specCharacters = []

        for (let i = 0; i < grid.length; i++) {
            const numbersInLine = processLineForNumbers(grid[i], i)
            // Add extracted numbers to the list.
            allNumbers.push(...numbersInLine)

            const lineIndex = i
            const charactersInLine = processLineForSpecialCharacters(grid[i], lineIndex)
            specCharacters.push(...charactersInLine)
        }
        // Store the result objects
        const resultObjects = [];

        // Fetch numbers adjacent to special characters
        for (const specialChar of specCharacters) {
            const { special, line, column } = specialChar;
            if (special === '*') {
                const adjacentNumbers = [];
                // Loop through all numbers to find adjacent ones
                for (const numberData of allNumbers) {
                    const { number, line: numLine, indexes: numIndexes } = numberData;
                    // Check if the number is adjacent to the special character
                    for (const index of numIndexes) {
                        if (
                            (line === numLine && (index === column - 1 || index === column + 1)) ||
                            ((line === numLine - 1 || line === numLine + 1) && (index === column - 1 || index === column || index === column + 1))
                        ) {
                            adjacentNumbers.push(number);
                            break; //Stop when found an adjacent number
                        }
                    }
                }
                // Create the result object
                resultObjects.push({ special, line, column, numbers: adjacentNumbers });
            }
        }
        //Numbers of size 2, only.
        const filteredResultObjects = resultObjects.filter(obj => obj.numbers.length === 2);

        const products = filteredResultObjects.map(obj => {
            const product = obj.numbers.reduce((acc, curr) => acc * curr, 1); //Product
            return { ...obj, product };
        });

        //Final sum
        const sumOfProducts = products.reduce((acc, curr) => acc + curr.product, 0);
        console.log("Sum of Products:", sumOfProducts);
    })
    .catch((error) => {
        console.error(`Error while reading the file : ${error}`)
    });

module.exports = {
    group, isSpecial
};
