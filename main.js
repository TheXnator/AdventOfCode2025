const fs = require('fs');
const path = require('path');

function runDay(day, dataFile) {
    const dataPath = path.join(__dirname, 'data', dataFile);

    let inputData = fs.readFileSync(dataPath, 'utf-8');
    let dayModule = require('./day' + day + '.js');

    console.log("Running Day " + day);
    let resultPart1 = dayModule.part1(inputData);
    console.log("Part 1 Result: " + resultPart1);
    let resultPart2 = dayModule.part2(inputData);
    console.log("Part 2 Result: " + resultPart2);
}

// Run days
runDay(1, 'day1.txt');