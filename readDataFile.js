const readline = require('readline'); // Node.js module
const fs = require('fs'); 

//From a file parameter, it creates an array 'lines'
function readFileLines(file) {

    const lines = []; 
    return new Promise((resolve, reject) => {
      

        // Reading interface
        const readL = readline.createInterface({
            input: fs.createReadStream(file),
            output: process.stdout,
            terminal: false
        });

        // Event 'line' for every file lines
        readL.on('line', (line) => {
            lines.push(line); // Populate the file array lines
        });

        // End of file
        readL.on('close', () => {
            resolve(lines); 
        });

        readL.on('error', (error) => {
            reject(error); 
        });
       // return lines
    });
}

module.exports = readFileLines; 

