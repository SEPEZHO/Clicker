var stopEnemyBox;
var setArr = {
  'transform': '',
  'mousemove': ''
};
function settingsBegin() {
  transformOnOrOff();
  beginClick();
}
function transformOnOrOff() {
  if ($("#transformOnOrOff").is(":checked")) {
    setArr.transform = 'on';
    enemyBox();
  } else {
    setArr.transform = 'off';
    $('#enemyBox').unbind();
  }
}

function beginClick() {
  if (inventory.itemWinPro != 0) {
    $('#enemy').click(clickWithPC);
    setArr.mousemove = 'off';
    if ($("#clickOrMousemove").is(":checked")) {
      setArr.mousemove = 'on';
      $('#enemy').unbind('click');
      let oldClick = 0;
      $('#enemy').mousemove(function() {
        oldClick++;
        if (oldClick == 20) {
          oldClick = 0;
          clickWithPC();
        }
      })
    }else{
      $('#enemy').unbind('mousemove')
    }
  } else {
    $('#enemy').click(click);
    setArr.mousemove = 'off';
    if ($("#clickOrMousemove").is(":checked")) {
      setArr.mousemove = 'on';
      $('#enemy').unbind('click');
      let oldClick = 0;
      $('#enemy').mousemove(function() {
        oldClick++;
        if (oldClick == 20) {
          oldClick = 0;
          click();
        }
      })
    }else{
      $('#enemy').unbind('mousemove')
    }
  }
}
