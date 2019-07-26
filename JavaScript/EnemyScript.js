let numberOfClicks = 0;
let clickPerOne = 1;
const enemy = '#enemy';
const ground = '#ground';
const enemyMas = [];
enemyMas[0] = {
  background: 'url(../Enemy`s/Slime.png) 100% no-repeat',
  backgroundSize: 'cover'
};
enemyMas[1] = {
  background: 'url(../Enemy`s/Laptop.png) 100% no-repeat',
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
  background: 'url(../Enemy`s/ground.png) no-repeat',
  backgroundSize: '100%',
};
groundMas[1] = {
  background: 'url(../Enemy`s/space.png) no-repeat',
  backgroundSize: '100%',
};

$(document).ready(begin);

function begin() {
  settingsBegin();
  shopItem();
  menuAnim();
  beginForm();
  dps();
  ajaxA();
  buttonReady();
  sendMailToDev();
  levelChange();
}

function reloadNumber() {
  $('#numberOfClicks').text('NOC: ' + numberOfClicks);
  levelChange();
}

function click() {
  numberOfClicks += clickPerOne;
  $('#damage').text('+' + clickPerOne);
  damage+=clickPerOne;
  reloadNumber();
}


var numClick = 0;
function hp(min,max){
  var num = max-min;
  var numCl = numberOfClicks-min;
  numClick = (numCl/num)*100;
  if(numClick >= 100){
    numClick = 0;
  }
  $('#hp').width(numClick+"%");
  $('#damage').css({left:numClick+"%"});
}

var damage = 0;
function dps(){
  window.setInterval(()=>{$('#dps').text('Dps: '+ damage);damage = 0}, 1000);
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
  if (numberOfClicks >= 0 && numberOfClicks < 100) {
    $(enemy).css(enemyMas[0]);
    $(ground).css(groundMas[0]);
    $('#level').text('level: 1')
    hp(0,100);
    return;
  };
  if (numberOfClicks >= 100 && numberOfClicks < 500) {
    $(enemy).css(enemyMas[1]);
    $(ground).css(groundMas[1]);
    $('#level').text('level: 2')
    hp(100,500);
    return;
  };
  if (numberOfClicks >= 501 && numberOfClicks < 1000) {
    $(enemy).css(enemyMas[2]);
    $('#level').text('level: 3')
    hp(500,1000);
    return;
  };
  if (numberOfClicks >= 1001 && numberOfClicks < 2000) {
    $(enemy).css(enemyMas[3]);
    $('#level').text('level: 4')
    hp(1000,2000);
    return
  };
  if (numberOfClicks >= 2001 && numberOfClicks < 4000) {
    $(enemy).css(enemyMas[4]);
    $('#level').text('level: 5')
    hp(2000,4000);
    return;
  };
  if (numberOfClicks >= 4001 && numberOfClicks < 8000) {
    $(enemy).css(enemyMas[5]);
    $('#level').text('level: 6')
    hp(4000,8000);
    return;
  };
  if (numberOfClicks >= 8001 && numberOfClicks < 16000) {
    $(enemy).css(enemyMas[6]);
    $('#level').text('level: 7')
    hp(8000,16000);
    return;
  };
  if (numberOfClicks >= 16001 && numberOfClicks < 32000) {
    $(enemy).css(enemyMas[7]);
    $('#level').text('level: 8')
    hp(16000,32000);
    return;
  };
  if (numberOfClicks >= 32001 && numberOfClicks < 64000) {
    $(enemy).css(enemyMas[8]);
    $('#level').text('level: 9')
    hp(32000,64000);
    return;
  };
  if (numberOfClicks >= 64001 && numberOfClicks < 128000) {
    $(enemy).css(enemyMas[9]);
    $('#level').text('level: 10')
    hp(64000,128000);
    return;
  };
}
