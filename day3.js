/** Working on another version of day3 part 2. */

const readFileLines = require('./readDataFile');
//const file = './inputDay3.txt';
const file = './inputSmall.txt';
const isDigit = require('./common');

// Converts lines in a grid
function processFileAsGrid(lines) {
    return lines.map(line => line.split(''));
}

/** Return true when a character 'is special' , i.e. , different of '.' and digit */
function isSpecial(char) {
    return !isDigit(char) && char !== '.'
}

/**Detects every special character around one input character.
 * If we dont consider the borders, we have 8 non-special character around a character */
function adjacentOfStar(grid, row, col) {
    let result = [];
    let adjObjs = {}
    let currentPos = grid[row][col]
    if (currentPos === '*') {
        let south = null;
        if (row + 1 < grid.length) {
            south = grid[row + 1][col];

            if (isDigit(south)) {
                console.log('south: ', 'line num: ', row + 1, 'col num: ', col);
                result.push(south)
                if (adjObjs[south] === undefined) {
                    adjObjs[south] = []
                }
                adjObjs[south].push([row + 1, col])
            }
        }
        let north = null;
        if (row - 1 >= 0) {
            north = grid[row - 1][col];

            if (isDigit(north)) {
                console.log('north: ', 'line num: ', row - 1, 'col num: ', col);
                result.push(north);
                if (adjObjs[north] === undefined) {
                    adjObjs[north] = []
                }
                adjObjs[north].push([row - 1, col])
            }
        }
        let east = null;
        if (col + 1 < grid[row].length) {
            east = grid[row][col + 1];

            if (isDigit(east)) {
                console.log('east: ', 'line num: ', row, 'col num: ', col + 1);
                result.push(east);
                if (adjObjs[east] === undefined) {
                    adjObjs[east] = []
                }
                adjObjs[east].push([row, col + 1])
            }
        }
        let west = null;
        if (col - 1 >= 0) {
            west = grid[row][col - 1];

            if (isDigit(west)) {
                console.log('west: ', 'line num: ', row, 'col num: ', col - 1);
                result.push(west);
                if (adjObjs[west] === undefined) {
                    adjObjs[west] = []
                }
                adjObjs[west].push([row, col - 1])
            }
        }
        let southEast = null;
        if (row + 1 < grid.length && col + 1 < grid[row].length) {
            southEast = grid[row + 1][col + 1];

            if (isDigit(southEast)) {
                console.log('southEast: ', 'line num: ', row + 1, 'col num: ', col + 1);
                result.push(southEast);
                if (adjObjs[southEast] === undefined) {
                    adjObjs[southEast] = []
                }
                adjObjs[southEast].push([row + 1, col + 1])
            }
        }
        let southWest = null;
        if (row + 1 < grid.length && col - 1 >= 0) {
            southWest = grid[row + 1][col - 1];

            if (isDigit(southWest)) {
                console.log('southWest: ', 'line num: ', row + 1, 'col num: ', col - 1);
                result.push(southWest);
                if (adjObjs[southWest] === undefined) {
                    adjObjs[southWest] = []
                }
                adjObjs[southWest].push([row + 1, col - 1])
            }
        }
        let northEast = null;
        if (row - 1 >= 0 && col + 1 < grid[row].length) {
            northEast = grid[row - 1][col + 1];

            if (isDigit(northEast)) {
                console.log('NE row: ', row - 1, ' col: ', col + 1);
                result.push(northEast);
                if (adjObjs[northEast] === undefined) {
                    adjObjs[northEast] = []
                }
                adjObjs[northEast].push([row - 1, col + 1])
            }
        }
        let northWest = null;
        if (row - 1 >= 0 && col - 1 >= 0) {
            northWest = grid[row - 1][col - 1];

            if (isDigit(northWest)) {
                console.log('NW row: ', row - 1, ' col: ', col - 1);
                result.push(northWest);
                if (adjObjs[northWest] === undefined) {
                    adjObjs[northWest] = []
                }
                adjObjs[northWest].push([row - 1, col - 1])
            }
        }
    }
    return { result, adjObjs };
}


adjacents = []

readFileLines(file)
    .then((lines) => {
        const grid = processFileAsGrid(lines)
        for (let lineNum = 0; lineNum < grid.length; lineNum++) {
            for (let colNum = 0; colNum < grid.length; colNum++) {
                let myChar = grid[lineNum][colNum]
                if (myChar === '*') {
                    const { result, adjObjs } = adjacentOfStar(grid, lineNum, colNum)
                    for (const key in adjObjs) {
                        if (adjObjs[key].length !== 0) {
                            console.log('adjacent number: ', key, 'his coordinates: ', adjObjs[key]);
                        }

                    }
                }
            }
        }
    }).catch((error) => {
        console.error(`Error while reading the file : ${error}`)
    })


