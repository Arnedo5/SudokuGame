
var unCompleteArray = [];
var completeArray = [[1, 2, 3, 4], [4, 3, 2, 1], [3, 1, 4, 2], [2, 4, 1, 3]];

var completeaArrayActual = [];
var completeaArrayToChange = [];

var actualDifficult = 0;

function difficultSudoku(difficult) {
    //Change positions - new board sudoku
    completeArray = newGameSudoku();

    //this.unCompleteSudoku = completeArray.slice();
    unCompleteArray = completeArray.map(array => array.slice());

    //Change values for '0'
    for (var x = 0; x < difficult; x++) {
        changeValue(x);
        function changeValue(x) {
            var x = getRandom(0, 3);
            var y = getRandom(0, 3);

            if (unCompleteArray[x][y] != 0) {
                unCompleteArray[x][y] = 0;
            } else {
                changeValue(x);
            }
        }
    }
    console.log("UNCOMPLETE ARRAY");
    console.table(unCompleteArray);
    console.log("COMPLETE ARRAY");
    console.table(completeArray);
}

function newGameSudoku() {
    var rand = getRandom(0, 1);
    if (rand = 1) {
        changeColumn();
    } else {
        changeLine();
    }
    //Change columns
    function changeColumn() {
        var actualColumn = getRandom(0, 3);
        var columnToChange = valueLineal(actualColumn);
        //Charge pre-values columns
        for (var x = 0; x < 4; x++) {
            completeaArrayActual[x] = completeArray[x][actualColumn];
            completeaArrayToChange[x] = completeArray[x][columnToChange];
        }
        //Change values
        for (var x = 0; x < 4; x++) {
            completeArray[x][actualColumn] = completeaArrayToChange[x];
            completeArray[x][columnToChange] = completeaArrayActual[x];
        }
    }

    //Change lines
    function changeLine() {
        var actualLine = getRandom(0, 3);
        var lineToChange = valueLineal(actualLine);

        //Charge pre-values lines
        completeaArrayActual = completeArray[actualLine];
        completeaArrayToChange = completeArray[lineToChange];

        //Change values
        completeArray[actualLine] = completeaArrayToChange;
        completeArray[lineToChange] = completeaArrayActual;
    }

    //return completeArray.reverse();
    return completeArray.reverse();
}

function valueLineal(valueRandom) {
    switch (valueRandom) {
        case 0:
            return 1;
            break;
        case 1:
            return 0;
            break;
        case 2:
            return 3;
            break;
        case 3:
            return 2;
            break;
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

