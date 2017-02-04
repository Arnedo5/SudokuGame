

// NEW GAME
$(document).ready(function () {
    initMenu();
    //configurationMenu();
    function initMenu() {

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
            });
        }, 2000);

        //On clic button's
        $(".newSudoku").click(function () {

        });

        $(".configuration").click(function () {
            configurationMenu();
        });

        $(".credits").click(function () {
            newGameSudoku();
        });

    }
});


function configurationMenu() {
/*
    //Create configuration button elements
    createElement("<button>", "images menuLarge", "key", "image", ".menu");
    createElement("<button>", "lenguage menuLarge", "key", "language", ".menu");
    createElement("<button>", "background menuLarge", "key", "background", ".menu");
    createElement("<button>", "mainMenuMenu menuLarge", "key", "mainMenuMenu", ".menu");
*/
    //Add text to buttons
    changeLanguage(languageSudoku);

    imagesMenu()

    function imagesMenu() {

        //Create images elements
        createElement("<div>", "container", "key", "", ".menu");
        createElement("<div>", "images", "key", "", ".container");

        for (var x = 0; x < 4; x++) {
            createElement("<div>", "container-image container-image" + x, "key", "", ".images");
            createElement("<img>", "", "src", "img/configIMG/image" + x + ".png" , ".container-image" + x);
            createElement("<div>", "description descriptionImage" + x, "key", "descriptionImage" + x , ".container-image" + x); 
        }

        createElement("<div>", "container-button", "key", "", ".container");
        createElement("<button>", "mainMenu menuLarge", "key", "configurationMenu", ".container-button");
        

    }

    function lenguageMenu() {


    }

    function backgroundMenu() {

    }

}




function endGame() {


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
