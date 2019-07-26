
function logFunc(login,numCl,inv,settings){

  alert('Вы успешно вошли, '+ login);
  numberOfClicks = Number(numCl);
  inventory = JSON.parse(inv);
  console.log(inventory);
  settings = JSON.parse(settings);
  console.log(settings);

  if(inventory.itemSecondMouse != 0 ){
    loginForItemSecMouse();
  }

  if(inventory.itemSecondClick != 0){
    loginForItemSecClick();
  }

  if(inventory.itemPersonalComp != 0){
    loginForItemPersonalComp();
  }

  if(settings.transform == 'on'){
    $('#transformOnOrOff').prop('checked', true);
  }else{
    $('#transformOnOrOff').prop('checked', false);
  }
  if(settings.mousemove == 'on'){
    $('#clickOrMousemove').prop('checked', true);
  }else{
    $('#clickOrMousemove').prop('checked', false);
  }
  reloadNumber();
}

function loginForItemSecMouse(){
  firstAppendForSecMouse = false;
  clone = $('#itemSecondMouse').clone().appendTo('#inventory');
  clone.removeAttr('id');
  $(clone).append("<span class='firstAppend' id='secondMouseFirstAppend'> </span>");
  $('#secondMouseFirstAppend').text('x' + inventory.itemSecondMouse);
  for (var i = 0; i <= inventory.itemSecondMouse; i++){
    costForItemSecondMouse = (costForItemSecondMouse * 1.5).toFixed();
    includeItemSecMouse();
  }
  $('.costForItemSecondMouse').text(costForItemSecondMouse);
  itemSecondMouseDescription();
}

function loginForItemSecClick(){
  clone = $("#itemSecondClick").clone().appendTo('#inventory');
  clone.removeAttr('id');
  $(clone).append('<span class="firstAppend" id="secondClickFirstAppend"> </span>');
  $('#secondClickFirstAppend').text('x' + inventory.itemSecondClick);
  for (var ii = 0; ii <= inventory.itemSecondClick; ii++){
    costForItemSecondClick = (costForItemSecondClick * 1.5).toFixed();
    includeItemSecClick();
  }
  $('.costForItemSecondClick').text(costForItemSecondClick);
  $('#secondClickFirstAppend').unbind();
  itemSecondClickDescription();
  firstAppendForSecClick = false;
}

function loginForItemPersonalComp(){
  firstAppendForPerComp = false;
  clone = $('#itemPersonalComp').clone().appendTo('#inventory');
  clone.removeAttr('id');
  $(clone).append("<span class='firstAppend' id='personalCompAppend'> </span>");
  itemPersonalCompDescription();
  $('#personalCompAppend').text('x' + inventory.itemPersonalComp);
  includeItemPerComp();
  for (var iii = 0; iii <= inventory.itemPersonalComp; iii++){
    costForItemPerComp = (costForItemPerComp * 1.5).toFixed();
  }
  $('.costForItemPersonalComp').text(costForItemPerComp);
}
