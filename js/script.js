

// NEW GAME
$(document).ready(function () {
    newGame();
    function newGame() {

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




    }
});


$(document).ready(function () {
    function configurationMenu() {

    }
});

$(document).ready(function () {
    function endGame() {


    }
});

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
