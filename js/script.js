
$(document).ready(function () {
    // New array
    newGameImage();
    // Initial menu
    initMenu();
});

// Menu initial
function initMenu() {

    //Generate music
    generateMusic(0);

    //Background menu
    backgroundOpacity(0);

    //Loading menu
    loading()

    //Create menu button elements
    createElement("<img>", "logoSudoku", "src", "img/titles/logo.png", "body");
    createElement("<button>", "newSudoku menuLarge", "key", "newSudoku", ".menu");
    createElement("<button>", "configuration menuLarge", "key", "configuration", ".menu");
    createElement("<button>", "credits menuLarge", "key", "credit", ".menu");

    //Add Text
    changeLanguage(languageSudoku);

    //On clic button's
    $(".newSudoku").click(function () {
        elementRemove("button");
        elementRemove("img");

        //Stop music
        stopMusic(actualMusic);

        //Generate music
        generateMusic(2);

        selectLevel();
    });

    $(".configuration").click(function () {
        elementRemove("button");
        elementRemove("img");

        //Stop music
        stopMusic(actualMusic);

        //Generate music
        generateMusic(1);

        configurationMenu();
    });

    $(".credits").click(function () {
        elementRemove("button");
        elementRemove("img");

        creditsMenu()
    });

    //Change Colors
    changeColors(typeColors);

    //Remove loading
    removeLoading(500);
}

//Select level
function selectLevel() {

    //Loading menu
    loading()

    //Background menu
    backgroundOpacity(0.3)

    //Background menu
    backgroundOpacity(0)

    //Background menu
    backgroundOpacity(0.3)

    //Create images elements
    createElement("<div>", "container", "key", "", ".menu");
    createElement("<div>", "images", "key", "", ".container");

    for (var x = 0; x < 4; x++) {
        createElement("<div>", "container-image container-image" + x, "key", "", ".images");
        createElement("<img>", " exampleImg level" + x, "src", "img/configLevel/level" + x + ".gif", ".container-image" + x);
        createElement("<div>", "description descriptionImage" + x, "key", "level" + x, ".container-image" + x);
    }

    createElement("<div>", "container-button", "key", "", ".container");
    createElement("<button>", "mainMenu menuLarge", "key", "mainMenuMenu", ".container-button");

    //Add text to buttons
    changeLanguage(languageSudoku);

    $(".mainMenu").click(function () {
        elementRemove(".container");

        //Stop music
        stopMusic(actualMusic);

        initMenu();
    });

    $(".level0,  .descriptionImage0").click(function () {
        elementRemove(".container");
        actualDifficult = 4;
        difficultSudoku(actualDifficult);

        //Generate talbe - new sudoku
        newGame();
    });

    $(".level1, .descriptionImage1").click(function () {
        elementRemove(".container");
        actualDifficult = 6;
        difficultSudoku(actualDifficult);

        //Generate talbe - new sudoku
        newGame();
    });

    $(".level2, .descriptionImage2").click(function () {
        elementRemove(".container");
        actualDifficult = 8;
        difficultSudoku(actualDifficult);

        //Generate talbe - new sudoku
        newGame();
    });

    $(".level3, .descriptionImage3").click(function () {
        elementRemove(".container");
        actualDifficult = 10;
        difficultSudoku(actualDifficult);

        //Generate talbe - new sudoku
        newGame();
    });

    //Change Colors
    changeColors(typeColors);

    //Remove loading
    removeLoading(400);
}

//Configure sudoku
function configurationMenu() {

    //Loading menu
    loading()

    //Background menu
    backgroundOpacity(0);

    //Create configuration button elements
    createElement("<button>", "images menuLarge", "key", "image", ".menu");
    createElement("<button>", "lenguage menuLarge", "key", "language", ".menu");
    createElement("<button>", "music menuLarge", "key", "music", ".menu");
    createElement("<button>", "mainMenuMenu menuLarge", "key", "mainMenuMenu", ".menu");

    //Add text to buttons
    changeLanguage(languageSudoku);

    //Change Colors
    changeColors(typeColors);

    //Remove loading
    removeLoading(400);

    //On clic button's
    $(".images").click(function () {
        elementRemove("button");
        imagesMenu();
    });

    $(".lenguage").click(function () {
        elementRemove("button");
        lenguageMenu();
    });

    $(".music").click(function () {
        elementRemove("button");
        musicMenu();

    });

    $(".mainMenuMenu").click(function () {
        elementRemove("button");

        //Stop music
        stopMusic(actualMusic);

        initMenu();
    });

    function imagesMenu() {

        //Loading menu
        loading()

        //Background menu
        backgroundOpacity(0.3)

        //Create images elements
        createElement("<div>", "container", "key", "", ".menu");
        createElement("<div>", "images", "key", "", ".container");

        for (var x = 0; x < 4; x++) {
            createElement("<div>", "container-image container-image" + x, "key", "", ".images");
            createElement("<img>", "imageImage" + x, "src", "img/configIMG/image" + x + ".png", ".container-image" + x);
            createElement("<div>", "description descriptionImage" + x, "key", "descriptionImage" + x, ".container-image" + x);
        }

        createElement("<div>", "container-button", "key", "", ".container");
        createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

        //Add text to buttons
        changeLanguage(languageSudoku);

        //Change Colors
        changeColors(typeColors);

        //On clic button's
        $(".mainMenu").click(function () {
            elementRemove(".container");
            configurationMenu();
        });

        //Jungle
        $(".imageImage0, .descriptionImage0").click(function () {
            elementRemove(".container");
            urlImages = "jungle";
            typeColors = 0;
            changeColors(typeColors);
            configurationMenu();
        });

        //Jungle
        $(".imageImage1, .descriptionImage1").click(function () {
            elementRemove(".container");
            urlImages = "fruits";
            typeColors = 1;
            changeColors(typeColors);
            configurationMenu();
        });

        //Music
        $(".imageImage2, .descriptionImage2").click(function () {
            elementRemove(".container");
            urlImages = "music";
            typeColors = 2;
            changeColors(typeColors);
            configurationMenu();
        });

        //Colors
        $(".imageImage3, .descriptionImage3").click(function () {
            elementRemove(".container");
            urlImages = "colors";
            //Change Colors
            typeColors = 3;
            changeColors(typeColors);
            configurationMenu();
        });

        //Remove loading
        removeLoading(0);

    }

    function lenguageMenu() {

        //Loading menu
        loading()

        //Background menu
        backgroundOpacity(0.3)

        //Create images elements
        createElement("<div>", "container", "key", "", ".menu");
        createElement("<div>", "images", "key", "", ".container");

        for (var x = 0; x < 4; x++) {
            createElement("<div>", "container-image container-image" + x, "key", "", ".images");
            createElement("<img>", "imageLanguage" + x, "src", "img/configLAN/" + valueLan[x] + ".png", ".container-image" + x);
            createElement("<div>", "description descriptionLanguage" + x, "key", "descriptionLanguage" + x, ".container-image" + x);
        }

        createElement("<div>", "container-button", "key", "", ".container");
        createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

        //Add text to buttons
        changeLanguage(languageSudoku);

        //Change Colors
        changeColors(typeColors);

        //On clic button's
        //Go to mainMenu
        $(".mainMenu").click(function () {
            elementRemove(".container");
            configurationMenu();
        });


        //Language - CAT
        $(".imageLanguage0, .descriptionLanguage0").click(function () {
            elementRemove(".container");
            languageSudoku = "cat";
            configurationMenu();
        });

        //Language - ES
        $(".imageLanguage1, .descriptionLanguage1").click(function () {
            elementRemove(".container");
            languageSudoku = "es";
            configurationMenu();
        });

        //Language - EN
        $(".imageLanguage2, .descriptionLanguage2").click(function () {
            elementRemove(".container");
            languageSudoku = "en";
            configurationMenu();
        });

        //Language - PT
        $(".imageLanguage3, .descriptionLanguage3").click(function () {
            elementRemove(".container");
            languageSudoku = "pt";
            configurationMenu();
        });

        //Remove loading
        removeLoading(400);
    }

    function musicMenu() {

        //Loading menu
        loading()

        //Background menu
        backgroundOpacity(0.3)

        //Create images elements
        createElement("<div>", "container", "key", "", ".menu");
        createElement("<div>", "images", "key", "", ".container");

        //Remove loading
        removeLoading(400);

        for (var x = 0; x < 4; x++) {
            createElement("<div>", "container-image container-image" + x, "key", "", ".images");
            createElement("<img>", "exampleImg imageMusic" + x, "src", "img/configMusic/image" + x + ".gif", ".container-image" + x);
            createElement("<div>", "description descriptionMusic" + x, "key", "descriptionMusic" + x, ".container-image" + x);
        }

        createElement("<div>", "container-button", "key", "", ".container");
        createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

        //Add text to buttons
        changeLanguage(languageSudoku);

        //Change Colors
        changeColors(typeColors);

        //On clic button's
        $(".mainMenu").click(function () {
            elementRemove(".container");
            configurationMenu();
        });

        //Music ON
        $(".imageMusic0, .descriptionMusic0").click(function () {
            playMusic(actualMusic);
        });

        //Music OFF
        $(".imageMusic1, .descriptionMusic1").click(function () {
            noMusic(actualMusic);
        });

        //Less Volume
        $(".imageMusic2, .descriptionMusic2").click(function () {
            noMusic(actualMusic);
            moreVolume(actualMusic);
        });

        //More volume
        $(".imageMusic3, .descriptionMusic3").click(function () {
            noMusic(actualMusic);
            lessVolume(actualMusic);
        });
    }

}

//Credits menu
function creditsMenu() {

    //Change visiblitiy particles
    $(".particles").css('visibility', 'visible');

    //Change Background backgroundOpacity
    $('.complete').css('background-color', 'rgba(0,0,0,0.0)');

    //Background menu
    backgroundOpacity(0);

    //Change color Background
    $("body").css('background-color', 'black');

    //Create div elements
    createElement("<img>", "logoSudoku", "src", "img/titles/logo.png", "body");
    createElement("<div>", "complete", "key", "", ".menu");
    createElement("<div>", "creditsMenu", "key", "", ".complete");
    createElement("<div>", "creditsContent", "key", "", ".creditsMenu");

    //Creator
    createElement("<span>", "creditText creditTitle", "key", "creator", ".creditsContent");
    createElement("<p>", "creditText creditDescription", "key", "david", ".creditsContent");

    //Images
    createElement("<span>", "creditText creditTitle", "key", "images", ".creditsContent");
    createElement("<p>", "creditText creditDescription", "key", "david_escola", ".creditsContent");

    //Code
    createElement("<span>", "creditText creditTitle", "key", "code", ".creditsContent");
    createElement("<p>", "creditText creditDescription", "key", "david", ".creditsContent");

    //Animation
    createElement("<span>", "creditText creditTitle", "key", "animation", ".creditsContent");
    createElement("<p>", "creditText creditDescription", "key", "david", ".creditsContent");

    //Inspiration
    createElement("<span>", "creditText creditTitle", "key", "inspiration", ".creditsContent");
    createElement("<p>", "creditText creditDescription", "key", "other", ".creditsContent");

    //Add Text
    changeLanguage(languageSudoku);

    //Remove elements
    $(".complete").click(function () {

        //Remove credits
        elementRemove(".complete");
        elementRemove(".logoSudoku");

        //Stop music
        stopMusic(actualMusic);

        //Change visiblitiy particles
        $(".particles").css('visibility', 'hidden');

        initMenu();
    });












}

//New game - generate new sudoku
function newGame() {

    //Stop music
    stopMusic(actualMusic);

    //Genrate music
    generateMusic(getRandom(3, 6));

    //Loading menu
    loading()

    difficultSudoku(actualDifficult);

    //Pre containers table
    createElement("<div>", "containerSudoku", "key", "", ".menu");
    createElement("<table>", "sudoku", "key", "", ".containerSudoku");
    createElement("<table>", "exampleTile", "key", "", ".containerSudoku");


    var positionDiv = 0;

    /* Sudoku Table */
    for (var x = 0; x < 4; x++) {
        createElement("<tr>", "lineal" + x, "key", "", ".sudoku");

        for (var y = 0; y < 4; y++) {
            createElement("<td>", "tileSudoku location" + positionDiv, "data-position", y, ".lineal" + x);
            //Add value line
            var dragImgage = $('.location' + positionDiv)
                .attr("data-line", x);
            var dragImgage = $('.location' + positionDiv);
            //Add line position
            positionDiv++;
            if (unCompleteArray[x][y] != 0) {
                changeSprite(dragImgage, unCompleteArray[x][y], 0);
            } else {
                dragImgage.addClass("uncomplete");
            }

        }
    }

    // Example tile
    createElement("<tr>", "example", "key", "", ".exampleTile");
    for (var x = 0; x < 4; x++) {
        var image = x + 1;
        createElement("<td>", "exampleTile" + x, "key", "", ".example");
        var dragImgage = $('.exampleTile' + x);
        changeSprite(dragImgage, image, 0);

        //Change Sprite
        createElement("<div>", "draggableTile drag" + x, "key", "", ".exampleTile" + x);
        //Add data
        var dragImgage = $('.drag' + x);
        dragImgage.data('sprite', image);
        //Change Sprite
        changeSprite(dragImgage, image, 0);
    }

    // Trash
    createElement("<div>", "under", "key", "", ".containerSudoku");

    //Menu
    createElement("<div>", "separator separator" + 1, "key", "", ".under");
    createElement("<div>", "newSudoku menuLarge", "key", "newSudoku", ".separator1");

    //Trash
    createElement("<div>", "trash", "key", "Menu", ".under");

    //New Sudoku
    createElement("<div>", "separator separator" + 2, "key", "", ".under");
    createElement("<div>", "menuStop menuLarge", "key", "Menu", ".separator2");

    var dragImgage = $('.trash');
    changeSprite(dragImgage, 5, 0);

    //Add Text
    changeLanguage(languageSudoku);


    //Main menu
    $(".newSudoku").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");

        newGame();
    });

    //Menu stop
    $(".menuStop").click(function () {
        //Call menu
        endGame(false);
        $(".buttons").fadeTo("slow", 1)
    });

    //Remove loading
    removeLoading(400);

    //Change colors
    changeColors(typeColors);

    //Inicialize moviments
    inicializeMoviment();
}

//Menu final game
function endGame(complete) {

    //Create menu button elements
    createElement("<div>", "complete", "key", "", ".menu");
    createElement("<div>", "buttons", "key", "", ".complete");

    //Change Background backgroundOpacity
    $('.complete').css('background-color', 'rgba(0,0,0,0.8)');

    if (complete == true) {
        //Change visiblitiy particles
        $(".particles").css('visibility', 'visible');

        //Change Background backgroundOpacity
        $('.complete').css('background-color', 'rgba(0,0,0,0.0)');

        //Create Elements
        createElement("<img>", "logoSudoku congratulations", "src", "img/titles/congratulations.png", "body");
        createElement("<button>", "newSudoku menuLarge", "key", "newSudoku", ".buttons");
    } else {
        createElement("<button>", "continue menuLarge", "key", "continue", ".buttons");
    }

    createElement("<button>", "changeDifficult menuLarge", "key", "nextDifficult", ".buttons");
    createElement("<button>", "mainMenuMenu menuLarge", "key", "mainMenuMenu", ".buttons");

    //Add Text
    changeLanguage(languageSudoku);

    //Change colors
    changeColors(typeColors);

    //New Sudoku
    $(".newSudoku").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");
        elementRemove(".congratulations");

        //Stop music
        stopMusic(actualMusic);

        //Change visiblitiy particles
        $(".particles").css('visibility', 'hidden');
        newGame();
    });

    //New Continue
    $(".continue").click(function () {
        //Change visiblitiy particles
        $(".particles").css('visibility', 'hidden');

        elementRemove(".complete");
        elementRemove(".congratulations");
    });

    //Change diffucult
    $(".changeDifficult").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");
        elementRemove(".congratulations");

        //Stop music
        stopMusic(actualMusic);

        //Change visiblitiy particles
        $(".particles").css('visibility', 'hidden');

        //Generate music
        generateMusic(2);

        //Select level
        selectLevel();
    });

    //Main menu
    $(".mainMenuMenu").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");
        elementRemove(".congratulations");

        //Stop music
        stopMusic(actualMusic);

        //Change visiblitiy particles
        $(".particles").css('visibility', 'hidden');

        //Call init menu
        initMenu();
    });
}


// ADDITIONAL FUCTIONS 
// Create a new element
function createElement(typeElement, nameClass, typeAttr, nameAttr, append) {
    $(typeElement)
        .addClass(nameClass)
        .attr(typeAttr, nameAttr)
        .appendTo(append);
}

/* Animate loading Sprite */
function animationSprite() {
    $(".sprite").animateSprite({
        fps: 12,
        animations: {
            walkRight: [0, 1, 2, 3, 4, 5, 6, 7],
        },
        loop: true,
        complete: function () {
            // use complete only when you set animations with 'loop: false'
            alert("animation End");
        }
    });
}

/* Remove element in HTML */
function elementRemove(elementRemove) {
    $(elementRemove).remove();
}

/* Change sprite */
function changeSprite(element, image, time) {
    setTimeout(function () {
        element.css("background-image", "url(img/" + urlImages + "/image" + image + ".png)");
    }, time);
}

//Loading menu
function loading() {
    //Create loading
    createElement("<div>", "charge", "key", "", ".menu");
    createElement("<div>", "game", "key", "", ".charge");
    createElement("<div>", "sprite " + valueLoading[getRandom(0, 1)], "key", "", ".game");
    createElement("<div>", "loading", "key", "", ".game");
    createElement("<div>", "text-loader", "key", "loading", ".loading");
    createElement("<div>", "loader", "key", "", ".loading");

    //Anitame sprite
    animationSprite();

    //Add Text
    changeLanguage(languageSudoku);
}

function removeLoading(time) {
    $("body").ready(function () {
        setTimeout(function () {
            console.log("Removed!");
            $(".charge").fadeTo("slow", 0, function () {
                //Remove loading
                $(".charge").remove();
            });
        }, time);
    });
}