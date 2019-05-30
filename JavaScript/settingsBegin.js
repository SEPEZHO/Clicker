function settingsBegin() {
    if ($("#bigDig").is(":checked")) {
        console.log('1');
        delete enemyClick;
        var enemyMousemove = () => {
            console.log('1/1');
            let oldClick = 0;
            $('#enemy').mousemove(function() {
                console.log('3');
                oldClick++;
                if (oldClick % 20 == 0) {
                    click()
                }
            })
        }
        enemyMousemove();
    } else {
        console.log('2');
        delete enemyMousemove;
        var enemyClick = () => {
            console.log('3')
            $('#enemy').click(function() {
                click()
            })
        }
        enemyClick();
    }
}