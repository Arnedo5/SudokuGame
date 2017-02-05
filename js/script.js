
$(document).ready(function () {
    // New array
    newGameImage();
    // Initial menu
    initMenu();
});



// Menu initial
function initMenu() {

    //Loading menu
    loading()

    setTimeout(function () {
        $(".game").fadeTo("slow", 0, function () {
            //Remove loading
            $(".game").remove();

            //Create menu button elements
            createElement("<button>", "newSudoku menuLarge", "key", "newSudoku", ".menu");
            createElement("<button>", "configuration menuLarge", "key", "configuration", ".menu");
            createElement("<button>", "credits menuLarge", "key", "credit", ".menu");

            //Add Text
            changeLanguage(languageSudoku);

            //On clic button's
            $(".newSudoku").click(function () {
                elementRemove("button");
                selectLevel();
            });

            $(".configuration").click(function () {
                elementRemove("button");
                configurationMenu();
            });

            $(".credits").click(function () {

            });
        });
    }, 1500);
}

function selectLevel() {

    //Create images elements
    createElement("<div>", "container", "key", "", ".menu");
    createElement("<div>", "images", "key", "", ".container");

    for (var x = 0; x < 4; x++) {
        createElement("<div>", "container-image container-image" + x, "key", "", ".images");
        createElement("<img>", "level" + x, "src", "img/configLevel/level" + x + ".png", ".container-image" + x);
        createElement("<div>", "description descriptionImage" + x, "key", "level" + x, ".container-image" + x);
    }

    createElement("<div>", "container-button", "key", "", ".container");
    createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");

    //Add text to buttons
    changeLanguage(languageSudoku);

    $(".mainMenu").click(function () {
        elementRemove(".container");
        initMenu();
    });

    $(".level0").click(function () {
        elementRemove(".container");
        actualDifficult = 4;
        difficultSudoku(actualDifficult);
        loading()
        setTimeout(function () {
            $(".game").fadeTo("slow", 0, function () {
                //Remove loading
                $(".game").remove();
                newGame();
            });
        }, 1000);
    });

    $(".level1").click(function () {
        elementRemove(".container");
        actualDifficult = 6;
        difficultSudoku(actualDifficult);
        loading()
        setTimeout(function () {
            $(".game").fadeTo("slow", 0, function () {
                //Remove loading
                $(".game").remove();
                newGame();
            });
        }, 1000);
    });

    $(".level2").click(function () {
        elementRemove(".container");
        actualDifficult = 8;
        difficultSudoku(actualDifficult);
        loading()
        setTimeout(function () {
            $(".game").fadeTo("slow", 0, function () {
                //Remove loading
                $(".game").remove();
                newGame();
            });
        }, 1000);
    });

    $(".level3").click(function () {
        elementRemove(".container");
        actualDifficult = 10;
        difficultSudoku(actualDifficult);
        loading()
        setTimeout(function () {
            $(".game").fadeTo("slow", 0, function () {
                //Remove loading
                $(".game").remove();
                newGame();
            });
        }, 1000);
    });
}

function configurationMenu() {

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
        imagesMenu();
    });

    $(".lenguage").click(function () {
        elementRemove("button");
        lenguageMenu();
    });

    $(".background").click(function () {
        elementRemove("button");

    });

    $(".mainMenuMenu").click(function () {
        elementRemove("button");
        console.log("IEE")
        initMenu();
    });


    function imagesMenu() {

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

        //On clic button's
        $(".mainMenu").click(function () {
            elementRemove(".container");
            configurationMenu();
        });

        //Jungle
        $(".imageImage0").click(function () {
            elementRemove(".container");
            urlImages = "jungle";
            initColors(0);
            configurationMenu();
        });

        //Jungle
        $(".imageImage1").click(function () {
            elementRemove(".container");
            urlImages = "fruits";
            initColors(1);
            configurationMenu();
        });

        //Music
        $(".imageImage2").click(function () {
            elementRemove(".container");
            urlImages = "music";
            initColors(2);
            configurationMenu();
        });

        //Colors
        $(".imageImage3").click(function () {
            elementRemove(".container");
            urlImages = "colors";
            initColors(3);
            configurationMenu();
        });


    }

    function lenguageMenu() {

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

        //On clic button's
        //Go to mainMenu
        $(".mainMenu").click(function () {
            elementRemove(".container");
            configurationMenu();
        });


        //Language - CAT
        $(".imageLanguage0").click(function () {
            elementRemove(".container");
            languageSudoku = "cat";
            configurationMenu();
        });

        //Language - ES
        $(".imageLanguage1").click(function () {
            elementRemove(".container");
            languageSudoku = "es";
            configurationMenu();
        });

        //Language - EN
        $(".imageLanguage2").click(function () {
            elementRemove(".container");
            languageSudoku = "en";
            configurationMenu();
        });

        //Language - PT
        $(".imageLanguage3").click(function () {
            elementRemove(".container");
            languageSudoku = "pt";
            configurationMenu();
        });
    }

    function backgroundMenu() {

    }

}

function newGame() {

    /* Pre containers table */
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
    createElement("<div>", "trash", "key", "", ".containerSudoku");
    var dragImgage = $('.trash');
    changeSprite(dragImgage, 5, 0);

    //Change colors
    changeColors(backgroundColor, tileColor);

    //Inicialize moviments
    inicializeMoviment();
}

function endGame() {

    //Create menu button elements
    createElement("<div>", "complete", "key", "", ".menu");
    createElement("<div>", "buttons", "key", "", ".complete");

    createElement("<button>", "newSudoku menuLarge", "key", "newSudoku", ".buttons");
    if (actualDifficult < 10) {
        createElement("<button>", "nextDifficult menuLarge", "key", "nextDifficult", ".buttons");
    }
    createElement("<button>", "mainMenuMenu menuLarge", "key", "mainMenuMenu", ".buttons");

    //Add Text
    changeLanguage(languageSudoku);

    //New Sudoku
    $(".newSudoku").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");

        //Generat new table
        difficultSudoku(actualDifficult);

        //Menu loading
        loading();
        setTimeout(function () {
            $(".game").fadeTo("slow", 0, function () {
                //Remove loading
                $(".game").remove();
                newGame();
            });
        }, 500);
    });

    //Next diffucult
    $(".nextDifficult").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");

        actualDifficult = actualDifficult + 2
        
        //Generat new table
        difficultSudoku(actualDifficult);

        //Menu loading
        loading();
        setTimeout(function () {
            $(".game").fadeTo("slow", 0, function () {
                //Remove loading
                $(".game").remove();
                newGame();
            });
        }, 500);

    });

    //Main menu
    $(".mainMenuMenu").click(function () {
        elementRemove(".containerSudoku");
        elementRemove(".complete");
        initColors(4);
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
    createElement("<div>", "game", "key", "", ".menu");
    createElement("<div>", "sprite " + valueLoading[getRandom(0, 1)], "key", "", ".game");
    createElement("<div>", "loading", "key", "", ".game");
    createElement("<div>", "text-loader", "key", "loading", ".loading");
    createElement("<div>", "loader", "key", "", ".loading");

    //Anitame sprite
    animationSprite();

    //Add Text
    changeLanguage(languageSudoku);
}