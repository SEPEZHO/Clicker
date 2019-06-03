var stopEnemyBox;

function settingsBegin() {
    transformOnOrOff();
}

// function clickOrMousemove() {
//     if ($("#clickOrMousemove").is(":checked")) {
//         let oldClick = 0;
//         $('#enemy').mousemove(function() {
//             oldClick++;
//             if (oldClick == 50) {
//                 oldClick = 0;
//                 click();
//             }
//         })
//         $('#enemy').unbind('click');
//     } else {
//         $('#enemy').click(function() {
//             click()
//         })
//         $('#enemy').unbind('mousemove');
//     }
// }

function transformOnOrOff(argument) {
    if ($("#transformOnOrOff").is(":checked")) {
        enemyBox();
    } else {
        $('#enemyBox').unbind();
    }
}