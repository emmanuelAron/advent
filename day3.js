/** Working on another version of day3 part 2. */

const readFileLines = require('./readDataFile');
//const file = './inputDay3.txt';
const file = './inputSmall.txt';

// Converts lines in a grid
function processFileAsGrid(lines) {
    return lines.map(line => line.split(''));
}

adjCols = [-1,0,1] //indexes for adjacents rows
adjRows = [-1,0,1] //indexes for adjacents columns

readFileLines(file)
    .then((lines) => {
        const grid = processFileAsGrid(lines) 
       // console.log('grid: ',grid.length);
        for(let lineNum = 0; lineNum< grid.length;lineNum++){
            for(let colNum = 0; colNum< grid.length; colNum++){
                let myChar = grid[lineNum][colNum]
                //console.log(myChar);
                if(myChar === '*'){
                    console.log(myChar, 'lineNum:',lineNum,' colNum: ',colNum);
                    for(a_row in adjRows){
                        for(b_col in adjRows){
                            //we remove to coordinate of the star itself from the list.
                                console.log('adjacents coordinates: line indexes:',lineNum +adjCols[a_row],'rows indexes: ',colNum+adjRows[b_col], 'a_row: ',a_row,' b_col: ',b_col);
                            
                        }
                    }
                }
            }
        }
    }).catch((error)=>{
        console.error(`Error while reading the file : ${error}`)
    })