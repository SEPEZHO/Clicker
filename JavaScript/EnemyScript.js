let numberOfClicks = 0;
let numberOfClicks1 = 0;
let numberOfClicksOld = 0;
const enemy = '#enemy';
const ground = '#ground';
const enemyMas = [];
enemyMas[0] = {
    background: 'url(enemy`s/Вор.png) 100% no-repeat',
    backgroundSize: 'cover'
};
enemyMas[1] = {
    background: 'url(enemy`s/космонавт.png) 100% no-repeat',
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

function begin() {
    $(enemy).click(click);
}

function reloadNumber() {
    $('#numberOfClicks').text(numberOfClicks);
    levelChange();
    backgroundChange();
}

function click() {
    // numberOfClicks1++;
    // if (numberOfClicks1 % 35 == 0) {
    numberOfClicks++;
    // if (($.getScript("itemScript.js", sadSecondClickAdd())) == false) {} else {
    //     sadSecondClickAdd()
    // };
    eval(sadSecondClickAdd);
    reloadNumber();
    // }
}

function backgroundChange() {
    if (numberOfClicks == 1) {
        $(enemy).css(enemyMas[0]);
        $(ground).css(groundMas[0]);
        return;
    }
    if (numberOfClicks == 10) {
        $(enemy).css(enemyMas[1]);
        $(ground).css(groundMas[1]);
        return;
    }
    if (numberOfClicks == 100) {
        $(enemy).css(enemyMas[2]);
        return;
    }
    if (numberOfClicks == 250) {
        $(enemy).css(enemyMas[3]);
        return;
    }
    if (numberOfClicks == 500) {
        $(enemy).css(enemyMas[4]);
        return;
    }
    if (numberOfClicks == 1000) {
        $(enemy).css(enemyMas[5]);
        return;
    }
    if (numberOfClicks == 2000) {
        $(enemy).css(enemyMas[6]);
        return;
    }
    if (numberOfClicks == 3500) {
        $(enemy).css(enemyMas[7]);
        return;
    }
    if (numberOfClicks == 5000) {
        $(enemy).css(enemyMas[8]);
        return;
    }
    if (numberOfClicks == 7000) {
        $(enemy).css(enemyMas[9]);
        return;
    }
    if (numberOfClicks == 10000) {
        $(enemy).css(enemyMas[10]);
        return;
    }
}

function levelChange() {
    if (numberOfClicks >= 0 && numberOfClicks < 9) {
        $('#level').text('level: 1')
        return;
    };
    if (numberOfClicks >= 10 && numberOfClicks < 99) {
        $('#level').text('level: 2')
        return;
    };
    if (numberOfClicks >= 100 && numberOfClicks < 249) {
        $('#level').text('level: 3')
        return;
    };
    if (numberOfClicks >= 250 && numberOfClicks < 499) {
        $('#level').text('level: 4')
        return
    };
    if (numberOfClicks >= 500 && numberOfClicks < 999) {
        $('#level').text('level: 5')
        return;
    };
    if (numberOfClicks >= 1000 && numberOfClicks < 1999) {
        $('#level').text('level: 6')
        return;
    };
    if (numberOfClicks >= 2000 && numberOfClicks < 3499) {
        $('#level').text('level: 7')
        return;
    };
    if (numberOfClicks >= 3500 && numberOfClicks < 4999) {
        $('#level').text('level: 8')
        return;
    };
    if (numberOfClicks >= 5000 && numberOfClicks < 6999) {
        $('#level').text('level: 9')
        return;
    };
    if (numberOfClicks >= 7000 && numberOfClicks < 9999) {
        $('#level').text('level: 10')
        return;
    };
}

function numberOfClicksAdd() {}