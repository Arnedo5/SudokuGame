var currentSudoku = [];
var currentCorrectSudoku = [];

function newGameSudoku() {
    //Variables Arrays
    var valueSudoku = [
    [1, 0, 3, 0, 0, 0, 2, 1, 3, 1, 0, 0, 0, 4, 0, 3],
    [4, 0, 2, 0, 0, 2, 0, 4, 2, 0, 4, 0, 3, 0, 1, 0],
    [0, 4, 3, 0, 2, 0, 0, 1, 3, 0, 0, 4, 0, 1, 2, 0],
    [4, 0, 3, 0, 0, 2, 0, 1, 2, 0, 1, 0, 0, 4, 0, 3]];

    var valueCorrectSudoku = [
    [1, 2, 3, 4, 4, 3, 2, 1, 3, 1, 4, 2, 2, 4, 1, 3],
    [4, 3, 2, 1, 1, 2, 3, 4, 2, 1, 4, 3, 3, 4, 1, 2],
    [1, 4, 3, 2, 2, 3, 4, 1, 3, 2, 1, 4, 4, 1, 2, 3],
    [4, 1, 3, 2, 3, 2, 4, 1, 2, 3, 1, 4, 1, 4, 2, 3]];

    randomizer = getRandom(0, valueSudoku.length - 1);

    currentSudoku = valueSudoku[randomizer];
    currentCorrectSudoku = valueCorrectSudoku[randomizer];

    console.log(currentSudoku);
    console.log(currentCorrectSudoku);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}