
var actualMusic;
var actualVolume = 0.3;
var mute = false;

var valueMusic = [
    ["audio/menuIntro.mp3"], //initMusic
    ["audio/menuConfiguration.mp3"], //configMenus
    ["audio/menuLevel.mp3"],
    ["audio/gameMusic/game1.mp3"],
    ["audio/gameMusic/game2.mp3"],
    ["audio/gameMusic/game3.mp3"],
    ["audio/gameMusic/game4.mp3"],
];

//Buttons & effects

function generateMusic(music) {
    if (mute == false) {
        actualMusic = new Audio(valueMusic[music]);
        playMusic(actualMusic);
        actualMusic.volume = actualVolume;
    }
}

//Activate music
function playMusic(music) {
    music.play();
    mute = false;
}

//Pause music
function stopMusic(music) {
    music.pause();
}

//Less volume
function lessVolume(music) {
    if (actualVolume > 0.1) {
        actualMusic.volume = (actualVolume).toFixed(1) - 0.1;
        actualVolume = actualMusic.volume;
    }
    playMusic(actualMusic);
}

//More volume
function moreVolume(music) {
    if (actualVolume < 0.9) {
        actualMusic.volume = actualVolume + 0.1;
        actualVolume = actualMusic.volume;  
    }
    playMusic(actualMusic);
}

//NO music
function noMusic(music) {
    music.pause();
    mute = true;
}