let numberOfClicks = 0;
const enemy = '#enemy';
const enemyMas = [];
enemyMas[0] = {
    background: '#FF00DCFF'
};
enemyMas[1] = {
    background: '#B200FFFF'
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

function begin() {
    $(enemy).click(click)
}

function click() {
    numberOfClicks++;
    $('#numberOfClicks').text(numberOfClicks);
    if (numberOfClicks >= 0 && numberOfClicks < 9) {
        $('#level').text('level: 1')
    };
    if (numberOfClicks >= 10 && numberOfClicks < 99) {
        $('#level').text('level: 2')
    };
    if (numberOfClicks >= 100 && numberOfClicks < 249) {
        $('#level').text('level: 3')
    };
    if (numberOfClicks >= 250 && numberOfClicks < 499) {
        $('#level').text('level: 4')
    };
    if (numberOfClicks >= 500 && numberOfClicks < 999) {
        $('#level').text('level: 5')
    };
    if (numberOfClicks >= 1000 && numberOfClicks < 1999) {
        $('#level').text('level: 6')
    };
    if (numberOfClicks >= 2000 && numberOfClicks < 3499) {
        $('#level').text('level: 7')
    };
    if (numberOfClicks >= 3500 && numberOfClicks < 4999) {
        $('#level').text('level: 8')
    };
    if (numberOfClicks >= 5000 && numberOfClicks < 6999) {
        $('#level').text('level: 9')
    };
    if (numberOfClicks >= 7000 && numberOfClicks < 9999) {
        $('#level').text('level: 10')
    };
    if (numberOfClicks == 1) {
        $(enemy).css(enemyMas[0]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 10) {
        $(enemy).css(enemyMas[1]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 100) {
        $(enemy).css(enemyMas[2]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 250) {
        $(enemy).css(enemyMas[3]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 500) {
        $(enemy).css(enemyMas[4]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 1000) {
        $(enemy).css(enemyMas[5]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 2000) {
        $(enemy).css(enemyMas[6]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 3500) {
        $(enemy).css(enemyMas[7]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 5000) {
        $(enemy).css(enemyMas[8]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 7000) {
        $(enemy).css(enemyMas[9]);
        console.log(numberOfClicks + ' click')
    }
    if (numberOfClicks == 10000) {
        $(enemy).css(enemyMas[10]);
        console.log(numberOfClicks + ' click')
    }
}