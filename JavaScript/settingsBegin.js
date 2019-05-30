function settingsBegin() {
    transformOnOrOff();
    clickOrMousemove()
}

function clickOrMousemove() {
    if ($("#clickOrMousemove").is(":checked")) {
        let oldClick = 0;
        $('#enemy').mousemove(function() {
            oldClick++;
            if (oldClick == 50) {
                oldClick = 0;
                click();
            }
        })
        $('#enemy').unbind('click');
    } else {
        $('#enemy').click(function() {
            click()
        })
        $('#enemy').unbind('mousemove');
    }
}

function transformOnOrOff() {
    if ($("#transformOnOrOff").is(":checked")) {
        console.log('1');
        enemyBox();
    } else {
        console.log('2');
        enemyBox().off();
    }
}