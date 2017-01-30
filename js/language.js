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