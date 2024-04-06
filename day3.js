
const isDigit = require('./common');
const readFileLines = require('./readDataFile');

const file = './inputSmall.txt'; 

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

// Converts lines in a grid
function processFileAsGrid(lines) {
    return lines.map(line => line.split(''));
}

/** Return true when a character 'is special' , i.e. , different of '.' and digit */
function isSpecial(char){
    return !isDigit(char) && char !== '.'
}

function adjacentOfchar(grid, row, col) {
    let result = [];
    let currentPos = grid[row][col]
    console.log('current pos: ',currentPos);
    if (isDigit(currentPos)) {

        let south = null;
        if (row + 1 < grid.length) {
            south = grid[row + 1][col];
            if(isSpecial(south))
                result.push(south)
        }
        let north = null;
        if (row - 1 >= 0) {
            north = grid[row - 1][col];
            if(isSpecial(north))
                result.push(north);
        }
        let east = null;
        if (col + 1 < grid[row].length) {
            east = grid[row][col + 1];
            if(isSpecial(east))
                result.push(east);
        }
        let west = null;
        if (col - 1 >= 0) {
            west = grid[row][col - 1];
            if(isSpecial(west))
                result.push(west);
        }
        let southEast = null;
        if (row + 1 < grid.length && col + 1 < grid[row].length) {
            southEast = grid[row + 1][col + 1];
            if(isSpecial(southEast))
                result.push(southEast);
        }
        let southWest = null;
        if (row + 1 < grid.length && col - 1 >= 0) {
            southWest = grid[row + 1][col - 1];
            if(isSpecial(southWest))
                result.push(southWest);
        }
        let northEast = null;
        if (row - 1 >= 0 && col + 1 < grid[row].length) {
            northEast = grid[row - 1][col + 1];
            if(isSpecial(northEast))
                result.push(northEast);
        }
        let northWest = null;
        if (row - 1 >= 0 && col - 1 >= 0) {
            northWest = grid[row - 1][col - 1];
            if(isSpecial(northWest))
                result.push(northWest);
        }
    }
    return result;
}

module.exports = {
    group,
    isSpecial
};

//Read file
readFileLines(file)
    .then((lines) => {
        console.log(lines);
        const grid = processFileAsGrid(lines); 
       
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const result = adjacentOfchar(grid, i, j);
                console.log(`Result for (${i}, ${j}):`, result);
            }
        }
    })
        
    .catch((error) => {
        console.error(`Error while reading the file : ${error}`);
    });

  
    