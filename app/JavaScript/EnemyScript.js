let numberOfClicks = 0;
let clickPerOne = 1;
var numClick = 0;
var damage = 0;
var lvl = 1
//глобальные переменные из form.js
var isLog = false;
var login;
var id;

// Подключаю все функции во всех файлах
$(document).ready(begin);

function begin() {
    settingsBegin();
    shopItem();
    menuAnim();
    beginForm();
    dps();
    levelChange();
    chatBegin();
}

// Обновление уровней и текста и картинок и тд
function reloadNumber() {
    $('#numberOfClicks').text('NOC: ' + numberOfClicks);
    levelChange();
}

// Осн. функция клика
function click() {
    numberOfClicks += clickPerOne;
    $('#damage').text('+' + clickPerOne);
    damage += clickPerOne;
    reloadNumber();
}

//Мой гениальный хп бар
function hp(min, max) {
    var num = max - min;
    var numCl = numberOfClicks - min;
    numClick = (numCl / num) * 100;
    if (numClick >= 100) {
        numClick = 0;
    }
    $('#hp').width(numClick + "%");
    $('#damage').css({ left: numClick + "%" });
}

//Обновление дпс каждую сек.
function dps() {
    window.setInterval(() => {
        $('#dps').text('Dps: ' + damage);
        damage = 0
    }, 1000);
}

//Скрипт поворота enemy (нашел на ютубе)
function enemyBox() {
    let box = $('#enemyBox');
    box.mousemove(startRotate);
    box.mouseleave(stopRotate);

    function startRotate(event) {
        let boxItem = this.querySelector('#enemy'),
            halfHeight = boxItem.offsetHeight / 2,
            halfWidth = boxItem.offsetWidth / 2;
        boxItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 15 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 15 + 'deg)';
    }

    function stopRotate(event) {
        let boxItem = this.querySelector('#enemy');
        boxItem.style.transform = 'rotate(0)';
    }
}
//Собственно сам switch для уровней 
function levelChange() {
    switch (true) {
        case numberOfClicks < 100:
            // первый лвл меняется картинка enemy
            $('#enemy').css({
                background: 'url(../app/Enemy`s/Slime.png) 100% no-repeat',
                backgroundSize: 'cover'
            });
            //меняется background
            $('#ground').css({
                background: 'url(../app/Enemy`s/ground.png) no-repeat',
                backgroundSize: '100%',
            });
            //меняется надпись уровня
            lvl = 1;
            $('#level').text('level: ' + lvl);
            //вызов функции хп бара
            hp(0, 100);
            break;
        case numberOfClicks < 500:
            $('#enemy').css({
                background: 'url(../app/Enemy`s/Laptop.png) 100% no-repeat',
                backgroundSize: 'cover'
            });
            $('#ground').css({
                background: 'url(../app/Enemy`s/space.png) no-repeat',
                backgroundSize: '100%',
            });
            lvl = 2;
            $('#level').text('level: ' + lvl);
            hp(100, 500);
            break;
        case numberOfClicks < 1000:
            var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            $('#enemy').css({ background: color });
            lvl = 3;
            $('#level').text('level: ' + lvl);
            hp(500, 1000);
            break;
        case numberOfClicks < 2000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 4;
            $('#level').text('level: ' + lvl);
            hp(1000, 2000);
            break;
        case numberOfClicks < 4000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 5;
            $('#level').text('level: ' + lvl);
            hp(2000, 4000);
            break;
        case numberOfClicks < 8000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 6;
            $('#level').text('level: ' + lvl);
            hp(4000, 8000);
            break;
        case numberOfClicks < 16000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 7;
            $('#level').text('level: ' + lvl);
            hp(8000, 16000);
            break;
        case numberOfClicks < 32000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 8;
            $('#level').text('level: ' + lvl);
            hp(16000, 32000);
            break;
        case numberOfClicks < 64000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 9;
            $('#level').text('level: ' + lvl);
            hp(32000, 64000);
            break;
        case numberOfClicks < 128000:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 10;
            $('#level').text('level: ' + lvl);
            hp(64000, 128000);
            break;
        default:
            var color = '#' + 25..toString(16) + 130..toString(16) + 210..toString(16);
            $('#enemy').css({ background: color });
            lvl = 'OVER999';
            $('#level').text('level: ' + lvl);
            break;
    }
}