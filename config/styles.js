/* IMAGES for SUDOKU*/
var urlImages = "";
var valueUrlImages = [["jungle"], ["fruits"], ["music"], ["colors"]];

/* LOADING MENU*/
var valueLoading = ["spriteBoy", "spriteGirl"];

/* FLAGS */
var valueLan = ["catalonia", "spain", "english", "portugal"];

/* COLORS for SUDOKU */
var typeColors = "";
var valueColors = [
    ['jungle','#7BAE7F','#DBFFC6','#5F7A66',"F2FFEA"],//Jungle colors
    ['fruit','#FC963C','#FFE1C6','#7A6C5F',"FFF4EA"],//Fruits colors
    ['music','#69C3EA','#C6DEFF','#5F6A7A',"E5F0FF"],//Music colors
    ['color','#BFBFB9','#BABFEF','#61647C',"E8EAFC"]//Colors colors
    ];//Menu colors
//Bkd image | Bkd sudoku | Bkd buttons | Color buttons | Bkd mini buttons
/*
BOTTOM | JUNGLE | > Background - #DBFFC6  | Color - #5F7A66 | Boton pequeño > #F2FFEA
BOTTOM | FRUIT | > Background - #FFE1C6  | Color - #7A6C5F | Boton pequeño > #FFF4EA
BOTTOM | MUSIC | > Background - #C6DEFF  | Color - #5F6A7A | Boton pequeño > #E5F0FF
BOTTOM | COLORS | > Background - #BABFEF  | Color - #61647C | Boton pequeño > #E8EAFC

*/

/* Images random*/
function newGameImage() {
    randomizer = getRandom(0, valueUrlImages.length - 1);
    /*initColors(randomizer);*/
    
    urlImages = valueUrlImages[randomizer];
    typeColors = randomizer;

    changeColors(typeColors);
}

/* Colors & styles*/
/*
function initColors(value) {
    backgroundColor = valueColors[value][0]
    tileColor = valueColors[value][1];
}
*/

function changeColors(style) {
    var body = $("body").css("background-image", "url(img/background/" + valueColors[style][0] + ".png)");
    var sudokuBackgorund = $(".sudoku").css('background-color', valueColors[style][1]);
    var buttonsBackground = $(".menuLarge").css('background-color', valueColors[style][2]);
    var buttonsColor = $(".menuLarge, .description").css('color', valueColors[style][3]);
    var buttonsBackground = $(".description").css('background-color', valueColors[style][4]);
}

function opacity(divOpacity, typeOpacity) {
    $(divOpacity).css('opacity', typeOpacity);
}

function backgroundOpacity (opacity) {
    $('.menu').css('background-color', 'rgba(255,255,255,' + opacity + ')');
}

/*

 ['#E4FDE1', '#7BAE7F'],//Jungle colors
    ['#FCD0A9', '#FC963C'],//Fruits colors
    ['#E1F2FE', '#69C3EA'],//Music colors
    ['#EAEAE3', '#BFBFB9'],//Colors colors
    ['#dbe9fb', '#BFBFB9']]//Menu colors

*/