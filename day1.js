const readline = require('readline'); //nodeJs module
const fs = require('fs');
//the input file that we want to read
let file = './input.txt'
//Read the file
let readL = readline.createInterface(
    { 
      input: fs.createReadStream(file), 
      output: process.stdout,
      terminal: false 
    }
    );
readL.on('line', function (text) {
    console.log(text);
});