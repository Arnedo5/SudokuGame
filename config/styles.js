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
    //Bkd image | Bkd sudoku | Bkd buttons | Color buttons | Bkd mini buttons
    ['jungle', '#7BAE7F', '#DBFFC6', '#5F7A66', "F2FFEA"],//Jungle colors
    ['fruit', '#FC963C', '#FFE1C6', '#7A6C5F', "FFF4EA"],//Fruits colors
    ['music', '#69C3EA', '#C6DEFF', '#5F6A7A', "E5F0FF"],//Music colors
    ['color', '#E5E5DE', '#F2F2EA', 'black', "FFFFF9"]//Colors colors
];//Menu colors

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
    console.log(urlImages);


    typeColors = randomizer;

    changeColors(typeColors);
}

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

function backgroundOpacity(opacity) {
    $('.menu').css('background-color', 'rgba(255,255,255,' + opacity + ')');
}

/* Backgorund particles */


TweenMax.set("img", { xPercent: "-50%", yPercent: "-50%" })

var svgNS = "http://www.w3.org/2000/svg";

var total = 70;
var w = $(".particles").width();
var h = $(".particles").height();

for (i = 0; i < total; i++) {
    var myCircle = document.createElementNS(svgNS, "circle");
    myCircle.setAttributeNS(null, "class", "dot");
    myCircle.setAttributeNS(null, "r", 5);
    document.getElementById("particles").appendChild(myCircle);
    TweenMax.set($(".dot")[i], { x: Random(w), y: 0, scale: Random(0.5) + 0.5, fill: "hsl(" + random(0, 150) + ",50%,50%)" });
    animm($(".dot")[i]);
}

function animm(elm) {
    TweenMax.to(elm, Random(5) + 3, { y: h, ease: Linear.easeNone, repeat: -1, delay: -5 });
    TweenMax.to(elm, Random(5) + 1, { x: '+=70', repeat: -1, yoyo: true, ease: Sine.easeInOut })
    TweenMax.to(elm, Random(1) + 0.5, { fill: "rgba(0,0,0,0)", repeat: -1, yoyo: true, ease: Sine.easeInOut })
};

function Random(max) {
    return Math.random() * max;
}

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
