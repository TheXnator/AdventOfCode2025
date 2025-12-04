const fs = require('fs');
const path = require('path');

function runDay(day, dataFile, useSample) {
    const dataPath = path.join(__dirname, useSample ? 'sample-data' : 'data', dataFile);

    let inputData = fs.readFileSync(dataPath, 'utf-8');
    let dayModule = require('./day' + day + '.js');

    console.log("");
    console.log("Running Day " + day + (useSample ? " (Sample Data)" : ""));
    let resultPart1 = dayModule.part1(inputData);
    console.log("Part 1 Result: " + resultPart1);
    let resultPart2 = dayModule.part2(inputData);
    console.log("Part 2 Result: " + resultPart2);
    console.log("");
}

// Run days
const RUN_SINGLE_DAY = null;
const RUN_DAYS = [
    { day: 1, useSample: false },
    { day: 2, useSample: true },
];

RUN_DAYS.forEach(day => {
    if (RUN_SINGLE_DAY !== null && RUN_SINGLE_DAY !== day.day) return;
    runDay(day.day, 'day' + day.day + '.txt', day.useSample);
});