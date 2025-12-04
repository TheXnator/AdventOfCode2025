function part1(inputData) {
    let lines = inputData.split('\n');

    let currentLocation = 50;
    let password = 0;
    lines.forEach(line => {
        let direction = line.substring(0, 1);
        let distance = parseInt(line.substring(1));

        let moveAmt = direction == "L" ? -1 : 1;
        for (let i = 0; i < distance; i++) {
            currentLocation += moveAmt;
            if (currentLocation < 0) currentLocation = 99;
            if (currentLocation > 99) currentLocation = 0;
        }

        if (currentLocation == 0) password++;
    });

    return password;
}

function part2(inputData) {
    let lines = inputData.split('\n');

    let currentLocation = 50;
    let password = 0;
    lines.forEach(line => {
        let direction = line.substring(0, 1);
        let distance = parseInt(line.substring(1));

        let moveAmt = direction == "L" ? -1 : 1;
        for (let i = 0; i < distance; i++) {
            currentLocation += moveAmt;
            if (currentLocation < 0) currentLocation = 99;
            if (currentLocation > 99) currentLocation = 0;
            if (currentLocation == 0) password++;
        }
    });

    return password;
}

module.exports = { part1, part2 };