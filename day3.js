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
    let currentPos = grid[row][col]
    if (currentPos === '*') {
        let south = null;
        if (row + 1 < grid.length) {
            south = grid[row + 1][col];
            
            if (isDigit(south)){
                console.log('south: ','line num: ',row + 1,'col num: ',col);
                result.push(south)
                
            }     
        }
        let north = null;
        if (row - 1 >= 0) {
            north = grid[row - 1][col];
            
            if (isDigit(north)){
                console.log('north: ','line num: ',row - 1,'col num: ',col);
                result.push(north);
            }   
        }
        let east = null;
        if (col + 1 < grid[row].length) {
            east = grid[row][col + 1];
            
            if (isDigit(east)){
                console.log('east: ','line num: ',row,'col num: ',col+1);
                result.push(east);
               // console.log('E row: ',row,' col: ',col);
            }  
        }
        let west = null;
        if (col - 1 >= 0) {
            west = grid[row][col - 1];
            
            if (isDigit(west)){
                console.log('west: ','line num: ',row,'col num: ',col-1);
                result.push(west);
            } 
        }
        let southEast = null;
        if (row + 1 < grid.length && col + 1 < grid[row].length) {
            southEast = grid[row + 1][col + 1];
            
            if (isDigit(southEast)){
                console.log('southEast: ','line num: ',row + 1,'col num: ',col + 1);
                result.push(southEast);
            } 
        }
        let southWest = null;
        if (row + 1 < grid.length && col - 1 >= 0) {
            southWest = grid[row + 1][col - 1];
            
            if (isDigit(southWest)){
                console.log('southWest: ','line num: ',row + 1,'col num: ',col - 1);
                result.push(southWest);
            }
        }
        let northEast = null;
        if (row - 1 >= 0 && col + 1 < grid[row].length) {
            northEast = grid[row - 1][col + 1];
            
            if (isDigit(northEast)){
                console.log('NE row: ',row - 1,' col: ',col + 1);
                result.push(northEast);
            }  
        }
        let northWest = null;
        if (row - 1 >= 0 && col - 1 >= 0) {
            northWest = grid[row - 1][col - 1];
            
            if (isDigit(northWest)){
                console.log('NW row: ',row - 1,' col: ',col - 1);
                result.push(northWest);
            }  
        }
    }
    return result;
}

adjCols = [-1,0,1] //indexes for adjacents rows
adjRows = [-1,0,1] //indexes for adjacents columns

adjacents = []

readFileLines(file)
    .then((lines) => {
        const grid = processFileAsGrid(lines) 
       // console.log('grid: ',grid.length);
        for(let lineNum = 0; lineNum< grid.length;lineNum++){
            for(let colNum = 0; colNum< grid.length; colNum++){
                let myChar = grid[lineNum][colNum]
                //console.log(myChar);
                if(myChar === '*'){
                   // console.log(myChar, 'lineNum:',lineNum,' colNum: ',colNum);
                    console.log(adjacentOfStar(grid, lineNum, colNum))
                    // for(a_row in adjRows){
                    //     for(b_col in adjRows){
                    //         //we remove to coordinate of the star itself from the list.
                    //         console.log('adjacents coordinates: line indexes:',lineNum +adjCols[a_row],'rows indexes: ',colNum+adjRows[b_col], 'a_row: ',a_row,' b_col: ',b_col);
                            
                    //     }
                    // }
                }
            }
        }
    }).catch((error)=>{
        console.error(`Error while reading the file : ${error}`)
    })