/* IMAGES for SUDOKU*/
var urlImages = "";
var valueUrlImages = [["jungle"], ["fruits"], ["music"], ["colors"]];

/* LOADING MENU*/
var valueLoading = ["spriteBoy","spriteGirl"];

/* FLAGS */
var valueLan = ["catalonia","spain","english","portugal"];

/* COLORS for SUDOKU */
var backgroundColor = "";
var tileColor = "";
var progressTop = "";
var progressBot = "";
var valueColors = [
['#E4FDE1', '#7BAE7F', '#BFEDC1', '#7BAE7F'],
['#FCD0A9', "#FC963C", '#FCB271', '#D1603D'],
['#E1F2FE', '#69C3EA', '#7FAEC1', '#0D4056'],
['#EAEAE3', '#5E5E5B', '#BFBFB9', '#4C4C4A']]

/* Images random*/
function newGameImage() {
    randomizer = getRandom(0, valueUrlImages.length - 1);
    initColors(randomizer);
    urlImages = valueUrlImages[randomizer];
    console.log(urlImages);
}

/* Colors & styles*/
function initColors(value) {
    backgroundColor = valueColors[value][0]
    tileColor = valueColors[value][1];
    progressTop = valueColors[value][2];
    progressBot = valueColors[value][3];
}

