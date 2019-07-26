var inventory = {
  itemSecondMouse: 0,
  itemSecondClick: 0,
  itemPersonalComp: 0,
};
let secClickAdd = false;
let firstAppendForSecMouse = true;
let firstAppendForSecClick = true;
let firstAppendForPerComp = true;
var costForItemSecondMouse = 100;
var costForItemSecondClick = 500;
var costForItemPerComp = 1000;

function shopItem() {
  $('#itemSecondMouse').click(buySecMouse);
  $('#itemSecondClick').click(buySecClick);
  $('#itemPersonalComp').click(buyPerComp);
  itemSecondMouseDescription();
  itemSecondClickDescription();
  itemPersonalCompDescription();
}

function buySecMouse() {
  console.log('asdasdasd');
  if (numberOfClicks >= costForItemSecondMouse) {
    inventory.itemSecondMouse++;
    numberOfClicks -= costForItemSecondMouse;
    costForItemSecondMouse = (costForItemSecondMouse * 1.5).toFixed();
    $('.costForItemSecondMouse').text(costForItemSecondMouse);
    if (firstAppendForSecMouse) {
      clone = $("#itemSecondMouse").clone();
      $(clone).append('<span class="firstAppend" id="secondMouseFirstAppend"> </span>');
      $("#inventory").append(clone);
      itemSecondMouseDescription();
      firstAppendForSecMouse = false;
    } else {
      $('#secondMouseFirstAppend').text('x' + inventory.itemSecondMouse);
    }
    includeItemSecMouse();
    reloadNumber();
  } else {
    alert('нет деняк, но вы держитесь');
    return;
  }
}

function includeItemSecMouse(){
  setInterval(()=>{
    if (inventory.itemPersonalComp != 0) {
      clickWithPC();
    } else {
      click();
    }
  }, 1000);
}


function buySecClick() {
  console.log('asdasdasd1');
  if (numberOfClicks >= costForItemSecondClick) {
    inventory.itemSecondClick++;
    numberOfClicks -= costForItemSecondClick;
    costForItemSecondClick = (costForItemSecondClick * 1.5).toFixed();
    $('.costForItemSecondClick').text(costForItemSecondClick);
    if (firstAppendForSecClick) {
      clone = $("#itemSecondClick").clone();
      $(clone).append('<span class="firstAppend" id="secondClickFirstAppend"> </span>');
      $("#inventory").append(clone);
      itemSecondClickDescription();
      firstAppendForSecClick = false;
    } else {
      $('#secondClickFirstAppend').text('x' + inventory.itemSecondClick);
    }
    includeItemSecClick();
    reloadNumber();
  } else {
    alert('нет деняк, но вы держитесь');
    return;
  }
}

function includeItemSecClick(){
  clickPerOne++;
}

function buyPerComp() {
  if (numberOfClicks >= costForItemPerComp) {
    inventory.itemPersonalComp++;
    numberOfClicks -= costForItemPerComp;
    costForItemPerComp = (costForItemPerComp * 1.5).toFixed();
    $('.costForItemPersonalComp').text(costForItemPerComp);
    if (firstAppendForPerComp) {
      clone = $("#itemPersonalComp").clone();
      $(clone).append('<span class="firstAppend" id="personalCompAppend"> </span>');
      $("#inventory").append(clone);
      itemPersonalCompDescription();
      firstAppendForPerComp = false;
      includeItemPerComp();
    } else {
      $('#personalCompAppend').text('x' + inventory.itemPersonalComp);
    }
    reloadNumber();
  } else {
    alert('нет деняк, но вы держитесь');
    return;
  }
}

function includeItemPerComp(){
  $('#enemy').unbind();
  $('#enemy').click(clickWithPC);
}
function clickWithPC() {
  let randKrit = Math.floor((Math.random() * 10) + 1);
  if (randKrit == 10) {
    let clickPerOneOld = clickPerOne;
    let krit = (Math.floor((Math.random() * (clickPerOne * 10)) + (clickPerOne)))*inventory.itemPersonalComp;
    clickPerOne = krit;
    click();
    clickPerOne = clickPerOneOld;
  } else {
    click();
  }
}

function itemSecondMouseDescription() {
  $('#itemSecondMouseDescription').hide();
  $('.itemSecondMouseClass').mouseover(function() {
    $('#itemSecondMouseDescription').show();
  });
  $('.itemSecondMouseClass').mouseleave(function() {
    $('#itemSecondMouseDescription').hide();
  });
}

function itemSecondClickDescription() {
  $('#itemSecondClickDescription').hide();
  $('.itemSecondClickClass').mouseover(function() {
    $('#itemSecondClickDescription').show();
  });
  $('.itemSecondClickClass').mouseleave(function() {
    $('#itemSecondClickDescription').hide();
  });
}

function itemPersonalCompDescription() {
  $('#itemPersonalCompDescription').hide();
  $('.itemPersonalCompClass').mouseover(function() {
    $('#itemPersonalCompDescription').show();
  });
  $('.itemPersonalCompClass').mouseleave(function() {
    $('#itemPersonalCompDescription').hide();
  });
}
