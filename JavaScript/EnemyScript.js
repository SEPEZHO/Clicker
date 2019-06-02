let numberOfClicks = 0;
let clickPerOne = 1;
const enemy = '#enemy';
const ground = '#ground';
const enemyMas = [];
enemyMas[0] = {
    background: 'url(enemy`s/Slime.png) 100% no-repeat',
    backgroundSize: 'cover'
};
enemyMas[1] = {
    background: 'url(enemy`s/Laptop.png) 100% no-repeat',
    backgroundSize: 'cover'
};
enemyMas[2] = {
    background: '#4800FFFF'
};
enemyMas[3] = {
    background: '#0094FFFF'
};
enemyMas[4] = {
    background: '#00FFFFFF'
};
enemyMas[5] = {
    background: '#00FF21FF'
};
enemyMas[6] = {
    background: '#B6FF00FF'
};
enemyMas[7] = {
    background: '#FFD800FF'
};
enemyMas[8] = {
    background: '#FF6A00FF'
};
enemyMas[9] = {
    background: '#FF0000FF'
};
enemyMas[10] = {
    background: '#3F3F3FFF'
};
const groundMas = [];
groundMas[0] = {
    background: 'url(enemy`s/ground.png) no-repeat',
    backgroundSize: '100%',
};
groundMas[1] = {
    background: 'url(enemy`s/space.png) no-repeat',
    backgroundSize: '100%',
};
$(document).ready(begin);

function begin() {
    settingsBegin();
    shopItem();
    menuAnim();
}

function reloadNumber() {
    $('#numberOfClicks').text(numberOfClicks);
    levelChange();
}

function click() {
    numberOfClicks += clickPerOne;
    dps();
    reloadNumber();
}

function dps() {
    let text = "<span id='clone' class='spanClickPerOne'>+" + clickPerOne + "</span>";
    $('#enemy').append(text);
    let rand = Math.random() * (95 - 0);
    $('#clone').css({
        left: rand + '%'
    });
    $('#clone').animate({
        top: '-20vh',
        opacity: -1
    }, {
        duration: 2000,
        start: function() {
            $("#clone").attr("id", "oldClone");
        },
        complete: function() {
            $("#oldClone").remove();
        }
    });
}

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

function levelChange() {
    if (numberOfClicks >= 0 && numberOfClicks < 9) {
        $(enemy).css(enemyMas[0]);
        $(ground).css(groundMas[0]);
        $('#level').text('level: 1')
        return;
    };
    if (numberOfClicks >= 10 && numberOfClicks < 99) {
        $(enemy).css(enemyMas[1]);
        $(ground).css(groundMas[1]);
        $('#level').text('level: 2')
        return;
    };
    if (numberOfClicks >= 100 && numberOfClicks < 249) {
        $(enemy).css(enemyMas[2]);
        $('#level').text('level: 3')
        return;
    };
    if (numberOfClicks >= 250 && numberOfClicks < 499) {
        $(enemy).css(enemyMas[3]);
        $('#level').text('level: 4')
        return
    };
    if (numberOfClicks >= 500 && numberOfClicks < 999) {
        $(enemy).css(enemyMas[4]);
        $('#level').text('level: 5')
        return;
    };
    if (numberOfClicks >= 1000 && numberOfClicks < 1999) {
        $(enemy).css(enemyMas[5]);
        $('#level').text('level: 6')
        return;
    };
    if (numberOfClicks >= 2000 && numberOfClicks < 3499) {
        $(enemy).css(enemyMas[6]);
        $('#level').text('level: 7')
        return;
    };
    if (numberOfClicks >= 3500 && numberOfClicks < 4999) {
        $(enemy).css(enemyMas[7]);
        $('#level').text('level: 8')
        return;
    };
    if (numberOfClicks >= 5000 && numberOfClicks < 6999) {
        $(enemy).css(enemyMas[8]);
        $('#level').text('level: 9')
        return;
    };
    if (numberOfClicks >= 7000 && numberOfClicks < 9999) {
        $(enemy).css(enemyMas[9]);
        $('#level').text('level: 10')
        return;
    };
}