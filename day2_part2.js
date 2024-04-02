const readFileLines = require('./readDataFile');

async function part2() {
    try {
        const lines = await readFileLines('inputDay2.txt');
        let powersSum = 0;

        lines.forEach(line => {
            let gameParts = line.split(':');
            let gameData = gameParts[1].trim();

            let colors = gameData.split(';');
            let maxRed = 0;
            let maxGreen = 0;
            let maxBlue = 0;

            colors.forEach(group => {
                let groupColors = group.trim().split(', ');

                groupColors.forEach(color => {
                    let [count, col] = color.split(' '); // Number and color for every group
                    count = parseInt(count);

                    if (col === 'red' && count > maxRed) {
                        maxRed = count;
                    }
                    if (col === 'green' && count > maxGreen) {
                        maxGreen = count;
                    }
                    if (col === 'blue' && count > maxBlue) {
                        maxBlue = count;
                    }
                });
            });

            let power = maxRed * maxGreen * maxBlue;
            powersSum += power;
        });

        console.log('Sum of powers (part 2) : ', powersSum);

    } catch (error) {
        console.error(`Error while reading the file : ${error}`);
    }
}

part2();

