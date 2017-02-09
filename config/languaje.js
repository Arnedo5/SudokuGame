//MULTI LANGUAGE - CAT | ES | EN | PT
var languageSudoku = "cat";

function changeLanguage(language) {
    var arrLang = {
        'es': {
            'Menu' : 'Menu',
            'loading' : 'Cargando',
            'mainMenuMenu': 'Menu principal',
            'configurationMenu': "Menu de configuración",
            'newSudoku': 'Nuevo sudoku',
            'configuration': 'Configuración',
            'nextDifficult' : 'Cambiar de difficultad',
            'credit': 'Creditos',
            'level0' : 'Facil',
            'level1' : 'Medio',
            'level2' : 'Dificil',
            'level3' : 'Hardcore',
            'image': 'Imagenes',
            'language': 'Idioma',
            'background': 'Fondo',
            'descriptionImage0': 'Selva',
            'descriptionImage1': 'Fruta',
            'descriptionImage2': 'Musica',
            'descriptionImage3': 'Colores',
            'descriptionLanguage0': 'Catalan',
            'descriptionLanguage1': 'Castellano',
            'descriptionLanguage2': 'Ingles',
            'descriptionLanguage3': 'Portugues',
            'descriptionBackground0': 'Selva africana',
            'descriptionBackground1': 'Nave espacial',
            'descriptionBackground2': 'Dia en la playa',
            'descriptionBackground3': 'Dia de navidad',
            'continue' : 'Continuar'
        },
        'cat': {
            'Menu' : 'Menu',
            'loading' : 'Carregant',
            'mainMenuMenu': 'Menu principal',
            'configurationMenu': "Menu de configuració",
            'newSudoku': 'Nou sudoku',
            'configuration': 'Configuració',
            'nextDifficult' : 'Canviar de difficultat',
            'credit': 'Crèdits',
            'level0' : 'Fàcil',
            'level1' : 'Mitjà',
            'level2' : 'Dificil',
            'level3' : 'Hardcore',
            'image': 'Imatges',
            'language': "Idioma",
            'background': 'Fons',
            'descriptionImage0': 'Selva',
            'descriptionImage1': 'Fruita',
            'descriptionImage2': 'Musica',
            'descriptionImage3': 'Colors',
            'descriptionLanguage0': 'Català',
            'descriptionLanguage1': 'Castellà',
            'descriptionLanguage2': 'Anglès',
            'descriptionLanguage3': 'Portugues',
            'descriptionBackground0': 'Selva africana',
            'descriptionBackground1': 'Nau espacial',
            'descriptionBackground2': 'Dia de platja',
            'descriptionBackground3': 'Dia de nadal',
            'continue' : 'Continuar'
        },
        'en': {
            'Menu' : 'Menu',
            'loading' : 'Loading',
            'mainMenuMenu': 'Main menu',
            'configurationMenu': "Configuration menu",
            'newSudoku': 'New sudoku',
            'configuration': 'Configuration',
            'nextDifficult' : 'Change difficult',
            'credit': 'Credits',
            'level0' : 'Easy',
            'level1' : 'Medium',
            'level2' : 'Hard',
            'level3' : 'Hardcore',
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
            'continue' : 'Continuar'
        },
        'pt': {
            'Menu' : 'Menu',

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
        $('.text-loader').each(function (index, element) {
            $(this).text(arrLang[language][$(this).attr('key')]);
        });
    });
}