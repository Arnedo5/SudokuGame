//GLOBAL VARIABLES
var languageSudoku = "cat";

var currentSudoku = [];
var currentCorrectSudoku = [];
var incorrectSudocu = [];

var valueUrlImages = [["jungle"], ["fruits"], ["music"], ["colors"]];
var valueColors = [
    ['#E4FDE1', '#7BAE7F', '#BFEDC1', '#7BAE7F'],
    ['#FCD0A9', "#FC963C", '#FCB271', '#D1603D'],
    ['#E1F2FE', '#69C3EA', '#7FAEC1', '#0D4056'],
    ['#EAEAE3', '#5E5E5B', '#BFBFB9', '#4C4C4A']]

var backgroundColor = "";
var tileColor = "";
var progressTop = "";
var progressBot = "";
var urlImages = "";


//WHEN DOCUMENT READY, EXECUTE ...
$(document).ready(function () {
    newGameSudoku();
    newGameImage();
    mainMenu(languageSudoku);
});

// MAIN MENU
function mainMenu(languageSudoku) {

    //Create menu button elements

    createElement("<img>", "", "src", "images/sudoku.png", "body");
    createElement("<button>", "newSudoku menuLarge", "key", "newSudoku", ".menu");
    createElement("<button>", "configuration menuLarge", "key", "configuration", ".menu");
    createElement("<button>", "credits menuLarge", "key", "credit", ".menu");

    //Add Text
    changeLanguage(languageSudoku);

    //On clic button's
    $(".newSudoku").click(function () {
        newGameSudoku();
        menuAnimations('body', '50vh');
        menuAnimations('body', '300vh');
        elementRemove("img");

        setTimeout(function () {
            menuAnimations('body', '100vh');
            elementRemove("button");
            newGame(languageSudoku);
        }, 2000);

    });

    $(".configuration").click(function () {
        elementRemove("button");
        //menuAnimations('body', '100vh');
        animateImg('70px', 600);
        setTimeout(function () {
            configurationMenu(languageSudoku);
        }, 500);
    });

    $(".credits").click(function () {
        menuAnimations('body', '70vh');
        menuAnimations('body', '300vh');
        animateImg('20px', 600);
        animateImg('150px', 600)
        setTimeout(function () {
            elementRemove("button");
            menuAnimations('body', '0vh');
        }, 1000);
    });

    /* Animate menu */
    var body = $("body").height('0vh');
    menuAnimations('body', '150vh');
    menuAnimations('body', '100vh');
    animateImg('50px', 600);
    animateImg('150px', 600);

}

//CONFIGURATION MENU
function configurationMenu(languageSudoku) {

    //Create configuration button elements
    createElement("<button>", "images menuLarge", "key", "image", ".menu");
    createElement("<button>", "lenguage menuLarge", "key", "language", ".menu");
    createElement("<button>", "background menuLarge", "key", "background", ".menu");
    createElement("<button>", "mainMenuMenu menuLarge", "key", "mainMenuMenu", ".menu");

    //Add text to buttons
    changeLanguage(languageSudoku);

    //On clic button's
    $(".images").click(function () {
        elementRemove("button");
        imagesMenu(languageSudoku);
    });

    $(".lenguage").click(function () {
        elementRemove("button");
        lenguageMenu(languageSudoku);
    });

    $(".background").click(function () {
        elementRemove("button");
        backgroundMenu(languageSudoku);
    });


    $(".mainMenuMenu").click(function () {
        elementRemove("button");
        elementRemove("img");
        mainMenu(languageSudoku);
    });
}


//IMAGE MENU
function imagesMenu(languageSudoku) {

    createElement("<div>", "container", "key", "", ".menu");
    createElement("<div>", "images", "key", "", ".container");

    for (var x = 0; x < 4; x++) {
        createElement("<div>", "container-image container-image" + x, "key", "", ".images");
        createElement("<div>", "image imageImage" + x, "key", "", ".container-image" + x);
        createElement("<div>", "text descriptionImage" + x, "key", "", ".container-image" + x);
        createElement("<p>", "description", "key", "descriptionImage" + x, ".descriptionImage" + x);
    }

    //Button return - configurationMenu
    createElement("<div>", "container-button", "key", "", ".container");
    createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

    //Add text to buttons
    changeLanguage(languageSudoku);

    //On clic button's
    $(".mainMenu").click(function () {
        elementRemove(".container");
        configurationMenu(languageSudoku);
    });

    //Jungle
    $(".imageImage0").click(function () {
        elementRemove(".container");
        urlImages = "jungle";
        initColors(0);
        configurationMenu(languageSudoku);
    });

    //Jungle
    $(".imageImage1").click(function () {
        elementRemove(".container");
        urlImages = "fruits";
        initColors(1);
        configurationMenu(languageSudoku);
    });

    //Music
    $(".imageImage2").click(function () {
        elementRemove(".container");
        urlImages = "music";
        initColors(2);
        configurationMenu(languageSudoku);
    });

    //Colors
    $(".imageImage3").click(function () {
        elementRemove(".container");
        urlImages = "colors";
        initColors(3);
        configurationMenu(languageSudoku);
    });
}

//LENGUAGE MENU
function lenguageMenu() {

    createElement("<div>", "container", "key", "", ".menu");
    createElement("<div>", "images", "key", "", ".container");

    for (var x = 0; x < 4; x++) {
        createElement("<div>", "container-image container-image" + x, "key", "", ".images");
        createElement("<div>", "image imageLanguage" + x, "key", "", ".container-image" + x);
        createElement("<div>", "text descriptionLanguage" + x, "key", "", ".container-image" + x);
        createElement("<p>", "description", "key", "descriptionLanguage" + x, ".descriptionLanguage" + x);
    }

    //Button return - configurationMenu
    createElement("<div>", "container-button", "key", "", ".container");
    createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

    //Add text to buttons
    changeLanguage(languageSudoku);

    //On clic button's
    //Language - CAT
    $(".imageLanguage0").click(function () {
        elementRemove(".container");
        languageSudoku = "cat";
        configurationMenu(languageSudoku);
    });

    //Language - ES
    $(".imageLanguage1").click(function () {
        elementRemove(".container");
        languageSudoku = "es";
        configurationMenu(languageSudoku);
    });

    //Language - EN
    $(".imageLanguage2").click(function () {
        elementRemove(".container");
        languageSudoku = "en";
        configurationMenu(languageSudoku);
    });

    //Language - PT
    $(".imageLanguage3").click(function () {
        elementRemove(".container");
        languageSudoku = "pt";
        configurationMenu(languageSudoku);
    });

    //Go to mainMenu
    $(".mainMenu").click(function () {
        elementRemove(".container");
        configurationMenu(languageSudoku);
    });
}

//BACKGROUND MENU
function backgroundMenu(languageSudoku) {

    createElement("<div>", "container", "key", "", ".menu");
    createElement("<div>", "images", "key", "", ".container");

    for (var x = 0; x < 4; x++) {
        createElement("<div>", "container-image container-image" + x, "key", "", ".images");
        createElement("<div>", "image imageBackground" + x, "key", "", ".container-image" + x);
        createElement("<div>", "text descriptionBackground" + x, "key", "", ".container-image" + x);
        createElement("<p>", "description", "key", "descriptionBackground" + x, ".descriptionBackground" + x);
    }

    //Button return - configurationMenu
    createElement("<div>", "container-button", "key", "", ".container");
    createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

    //Add text to buttons
    changeLanguage(languageSudoku);

    //On clic button's
    //Go to mainMenu
    $(".mainMenu").click(function () {
        elementRemove(".container", ".images", ".image", ".container-button")
        configurationMenu(languageSudoku);
    });
}

function newGame(languageSudoku) {
    createElement("<div>", "containerSudoku", "key", "", ".menu");
    createElement("<div>", "trashSudoku", "key", "", ".containerSudoku");

    /* TRASH */
    createElement("<div>", "tileTrash", "key", "", ".trashSudoku");
    changeSprite($('.tileTrash'), 5, 0);


    /* DRAGGABLE IMAGES */
    createElement("<div>", "draggableImages", "key", "", ".containerSudoku");

    for (var x = 0; x < 4; x++) {
        var image = x + 1;
        createElement("<div>", "backTileSudoku sampleImage" + x, "key", "", ".draggableImages");
        var dragImgage = $('.sampleImage' + x);
        changeSprite(dragImgage, image, 0);
    }

    for (var x = 0; x < 4; x++) {
        var image = x + 1;
        createElement("<div>", "tileSudoku draggableTile drag" + x, "key", "", ".sampleImage" + x);
        var dragImgage = $('.drag' + x);
        dragImgage.data('sprite', image);
        changeSprite(dragImgage, image, 0);
    }

    /* TABLE SUDOKU */
    createElement("<div>", "tableSudoku", "key", "", ".containerSudoku");
    for (var x = 0; x < 16; x++) {
        createElement("<div>", "backTileSudoku back" + x, "key", "", ".tableSudoku");
    }

    for (var x = 0; x < 16; x++) {
        createElement("<div>", "tileSudoku location" + x, "data-position", x, ".back" + x);
        var dragImgage = $('.location' + x);
        if (currentSudoku[x] != 0) {
            changeSprite(dragImgage, currentCorrectSudoku[x], 0);
        } else {
            dragImgage.addClass("uncomplete");
        }
    }

    /* BUTTONS SUDOKU */
    createElement("<div>", "buttonsSudoku", "key", "", ".containerSudoku");
    createElement("<button>", "buttonBottomSudoku mainMenu", "key", "mainMenuMenu", ".buttonsSudoku");
    createElement("<button>", "buttonBottomSudoku newSudoku", "key", "newSudoku", ".buttonsSudoku");


    /* PROGRESS BAR */
    createElement("<div>", "progressBar", "key", "", ".containerSudoku");
    createElement("<div>", "bar", "key", "", ".progressBar");

    /* RIGHT IMAGE */
    createElement("<div>", "rightImage", "key", "", ".containerSudoku");
    createElement("<div>", "bigImage", "key", "", ".rightImage");

    //Go to mainMenu
    $(".mainMenu").click(function () {
        elementRemove(".containerSudoku");
        $('body').css('background-color', '#dbe9fb');
        mainMenu(languageSudoku);
    });

    //New sudoku
    $(".newSudoku").click(function () {
        elementRemove(".containerSudoku");
        newGameSudoku();
        newGame(languageSudoku);

    });

    //Change colors
    changeColors(backgroundColor, tileColor, progressTop, progressBot);

    //Add text to buttons
    changeLanguage(languageSudoku);

    //Initialise movement
    handleCardDrop();

}


/* SUDOKU */
function handleCardDrop(event, ui) {

    $(init);

    function init() {
        //Selected Images
        enableDraggable('.draggableTile');

        //Uncompleted tails
        enableDroppable(".uncomplete", inicializeMovement, '.draggableTile');

        //Trash
        enableDroppable(".tileTrash", goTrash, '.uncomplete');
    }

    function inicializeMovement(event, ui) {
        //Event target + element
        var target = $(event.target);
        var sampleTarget = $(event.toElement);

        //Change opacity
        opacity(target, 1);
        opacity(sampleTarget, 0);

        //Selected Image
        var selectImage = $(event.toElement).data("sprite");

        //Position in table
        var positionTable = target.data('position');

        //Change blackground - image
        changeSprite(target, selectImage, 0);

        //Change values - newArray
        completeSudoku(positionTable, selectImage);

        //Active 'draggable' when change image
        enableDraggable(target);
        $(event.target).draggable('enable');

        //Disable 'draggable' from uncomplete tails
        disableDroppable(event.target);

        // Check correct sudoku
        var sudokuComplete = currentSudoku.every(function (element) {
            return element != 0;
        });

        if (sudokuComplete) {
            checkSudoku();
        }

        //Progress bar
        progressBar(currentSudoku);

        //Change opacity
        opacity(sampleTarget, 1);
    }

    function goTrash(event, ui) {
        //Event
        var target = $(event.toElement);
        var back = $('.back' + target.data('position'));

        //Change Sprite
        changeSprite(back, '_null', 0);
        opacity(target, 0);

        //Change values - newArray
        completeSudoku(target.data('position'), 0);

        //Disable 'draggable' from uncomplete tails
        target.draggable("disable");

        //Enable 'droppable' again
        $('.uncomplete').droppable("enable");
        enableDroppable(".uncomplete", inicializeMovement, '.draggableTile');

        //Progress bar
        progressBar(currentSudoku);
    }



    /* AUXILIARS FUNCTIONS */
    function enableDraggable(divEnable) {
        //Selected Images
        $(divEnable).draggable({
            start: function (event, ui) {
                $(event.target).css("z-index", 100);
            },
            stop: function (event, ui) {
                $(event.target).css("z-index", 0);
            },
            revert: true,
            revertDuration: 0,
            containment: '.menu',
            snap:  '.menu'
        });
    }

    function enableDroppable(divEnable, typeDrop, typeAccept) {
        $(divEnable).droppable({
            drop: typeDrop,
            accept: typeAccept
        });
    }

    function disableDroppable(divDisable) {
        $(divDisable).droppable('disable');
    }


    function completeSudoku(positionTable, selectImage) {
        currentSudoku[positionTable] = selectImage;
    }



    function checkSudoku() {
        if (currentSudoku.join() == currentCorrectSudoku.join()) {
            //alert("COMPLETASTES EL SUDOKUUU FELICIDADESSS");
            $(".buttonsSudoku").animate({
                bottom: '430px'
            }, 2000);
        } else {
            currentSudoku.forEach(function (number, index) {
                if (number != currentCorrectSudoku[index]) {
                    var position = $("[data-position='" + index + "']")
                        .addClass('incorrect');

                    //Change Sprite & draggable - droppable
                    changeSprite(position, '_null', 3000);

                    setTimeout(function () {
                        position.removeClass('incorrect')

                            //Dissable draggable
                            .draggable("disable")

                        //Enable droppable
                        $('.uncomplete').droppable("enable");
                        enableDroppable(".uncomplete", inicializeMovement, '.draggableTile');

                        //Change value - newArray
                        currentSudoku[index] = 0;

                        //Progress bar
                        progressBar(currentSudoku);
                    }, 3000);
                }
            });
        };
    }
}


/* AUXILIARS FUNCTIONS*/
function changeSprite(element, image, time) {
    setTimeout(function () {
        element.css("background-image", "url(images/" + urlImages + "/image" + image + ".png)");
    }, time);
}

function opacity(divOpacity, typeOpacity) {
    $(divOpacity).css('opacity', typeOpacity);
}

function elementRemove(elementRemove) {
    $(elementRemove).remove();
}

function createElement(typeElement, nameClass, typeAttr, nameAttr, append) {
    var element = $(typeElement)
        .addClass(nameClass)
        .attr(typeAttr, nameAttr)
        .appendTo(append);
}

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

    randomizer = getRandomInt(0, valueSudoku.length - 1);

    currentSudoku = valueSudoku[randomizer];
    currentCorrectSudoku = valueCorrectSudoku[randomizer];

    console.log(currentSudoku);
}

function newGameImage() {
    randomizer = getRandomInt(0, valueUrlImages.length - 1);
    initColors(randomizer);
    urlImages = valueUrlImages[randomizer];
}

function initColors(value) {
    backgroundColor = valueColors[value][0]
    tileColor = valueColors[value][1];
    progressTop = valueColors[value][2];
    progressBot = valueColors[value][3];
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function progressBar(array) {
    var count = 0;
    for (var i = 0; i < array.length; ++i) {
        if (array[i] == 0)
            count++;
    }
    $(".bar").height(count * 12.5 + '%');
}

/* Animations */
function menuAnimations(container, position) {
    var body = $(container).animate({
        height: position,
    }, 600)
}

function animateImg(position, time) {
    var img = $("img").animate({
        top: position
    }, time)
}

function changeColors(backgroundColor, tileColor, progressTop, progressBot) {
    var body = $("body").css('background-color', backgroundColor);
    var tile = $(".backTileSudoku").css('background-color', tileColor);
    var bar = $('.bar').css('background-color', progressTop);
    var progressBar = $('.progressBar').css('background-color', progressBot);
}

//MULTI LANGUAGE - CAT | ES | EN | PT
function changeLanguage(language) {
    var arrLang = {
        'es': {
            'mainMenuMenu': 'Menu principal',
            'configurationMenu': "Menu de configuración",
            'newSudoku': 'Nuevo sudoku',
            'configuration': 'Configuración',
            'credit': 'Creditos',
            'image': 'Imagenes',
            'language': 'Idioma',
            'background': 'Fondo',
            'descriptionImage0': 'Selva',
            'descriptionImage1': 'Espacio',
            'descriptionImage2': 'Verano',
            'descriptionImage3': 'Invierno',
            'descriptionLanguage0': 'Catalan',
            'descriptionLanguage1': 'Castellano',
            'descriptionLanguage2': 'Ingles',
            'descriptionLanguage3': 'Portugues',
            'descriptionBackground0': 'Selva africana',
            'descriptionBackground1': 'Nave espacial',
            'descriptionBackground2': 'Dia en la playa',
            'descriptionBackground3': 'Dia de navidad',
            'difficultEasy': 'Facil',
            'difficultMedium': 'Medio',
            'difficultHard': 'Dificil',
            'difficultVeryHard': 'Muy dificil',
        },
        'cat': {
            'mainMenuMenu': 'Menu principal',
            'configurationMenu': "Menu de configuració",
            'newSudoku': 'Nou sudoku',
            'configuration': 'Configuració',
            'credit': 'Credits',
            'image': 'Imatges',
            'language': "Idioma",
            'background': 'Fons',
            'descriptionImage0': 'Selva',
            'descriptionImage1': 'Espai',
            'descriptionImage2': 'Estiu',
            'descriptionImage3': 'Hivern',
            'descriptionLanguage0': 'Català',
            'descriptionLanguage1': 'Castellà',
            'descriptionLanguage2': 'Anglès',
            'descriptionLanguage3': 'Portugues',
            'descriptionBackground0': 'Selva africana',
            'descriptionBackground1': 'Nau espacial',
            'descriptionBackground2': 'Dia de platja',
            'descriptionBackground3': 'Dia de nadal',
            'difficultEasy': 'Facil',
            'difficultMedium': 'Mitja',
            'difficultHard': 'Dificil',
            'difficultVeryHard': 'Molt dificil',
        },
        'en': {
            'mainMenuMenu': 'Main menu',
            'configurationMenu': "Configuration menu",
            'newSudoku': 'New sudoku',
            'configuration': 'Configuration',
            'credit': 'Credits',
            'image': 'Images',
            'language': "Language",
            'background': 'Background',
            'descriptionImage0': 'Jungle',
            'descriptionImage1': 'Space',
            'descriptionImage2': 'Summer',
            'descriptionImage3': 'Winter',
            'descriptionLanguage0': 'Catalan',
            'descriptionLanguage1': 'Spanish',
            'descriptionLanguage2': 'English',
            'descriptionLanguage3': 'Portuguese',
            'descriptionBackground0': 'Jungle',
            'descriptionBackground1': 'Fruits',
            'descriptionBackground2': 'Music',
            'descriptionBackground3': 'Colors',
            'difficultEasy': 'Easy',
            'difficultMedium': 'Medium',
            'difficultHard': 'Hard',
            'difficultVeryHard': 'Very Hard',
        },
        'pt': {

        }
    };
    $(function () {
        $('.menuLarge').each(function (index, element) {
            $(this).text(arrLang[language][$(this).attr('key')]);
        });
        $('.description').each(function (index, element) {
            $(this).text(arrLang[language][$(this).attr('key')]);
        });
        $('.buttonBottomSudoku').each(function (index, element) {
            $(this).text(arrLang[language][$(this).attr('key')]);
        });
    });
}