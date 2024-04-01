const readFileLines = require('./readDataFile')

async function filterLines() {
    try {
        const lines = await readFileLines('inputDay2.txt')
        let games = [] // games to prints
        let sum = 0

        lines.forEach(line => {
            let gameParts = line.split(':') // Every game
            let gameName = gameParts[0].trim()
            let gameId = parseInt(gameName.split(' ')[1]) //get id value of the game.
            let gameData = gameParts[1].trim()

            let colors = gameData.split(';')
            let excludeGame = false // Exclusion from the final result

            colors.forEach(group => {
                let groupColors = group.trim().split(', ')

                groupColors.forEach(color => {
                    let [count, col] = color.split(' ') // Number and color for every groups
                    count = parseInt(count)

                    if ((col === 'red' && count > 12) || (col === 'green' && count > 13) || (col === 'blue' && count > 14)) {
                        excludeGame = true
                    }
                });
            });

            // List of array games to print
            if (!excludeGame) {
                games.push(line)
                sum += gameId
            }
        });

        games.forEach(game => console.log(game))
        console.log('Final sum:', sum);

    } catch (error) {
        console.error('Error reading file:', error)
    }
}

filterLines()
