/* IMAGES for SUDOKU*/
var urlImages = "";
var valueUrlImages = [["jungle"], ["fruits"], ["music"], ["colors"]];

/* LOADING MENU*/
var valueLoading = ["spriteBoy", "spriteGirl"];

/* FLAGS */
var valueLan = ["catalonia", "spain", "english", "portugal"];

/* COLORS for SUDOKU */
var backgroundColor = "";
var tileColor = "";

var valueColors = [
    ['#E4FDE1', '#7BAE7F'],//Jungle colors
    ['#FCD0A9', '#FC963C'],//Fruits colors
    ['#E1F2FE', '#69C3EA'],//Music colors
    ['#EAEAE3', '#BFBFB9'],//Colors colors
    ['#dbe9fb', '#BFBFB9']]//Menu colors

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
}

function changeColors(backgroundColor, tableColor) {
    var body = $("body").css('background-color', backgroundColor);
    var tile = $(".sudoku").css('background-color', tableColor);
}

function opacity(divOpacity, typeOpacity) {
    $(divOpacity).css('opacity', typeOpacity);
}

