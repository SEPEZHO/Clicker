
function logFunc(login,numCl,inv,settings){

  alert('Вы успешно вошли, '+ login);
  numberOfClicks = Number(numCl);
  inventory = JSON.parse(inv);
  console.log(inventory);
  settings = JSON.parse(settings);
  console.log(settings);

  if(inventory.itemScroll != 0 ){
    buyScroll();
  }
  if(inventory.itemUphone != 0 ){
    loginForItemUphone();
  }

  if(inventory.itemWinbookAir != 0){
    loginForItemWinbookAir();
  }

  if(inventory.itemWinPro != 0){
    loginForItemWinPro();
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

function loginForItemUphone(){
  firstAppendForUphone = false;
  clone = $('#itemUphone').clone().appendTo('#inventory');
  clone.removeAttr('id');
  $(clone).append("<span class='firstAppend' id='UphoneFirstAppend'> </span>");
  $('#UphoneFirstAppend').text('x' + inventory.itemUphone);
  for (var i = 0; i <= inventory.itemUphone; i++){
    costForItemUphone = (costForItemUphone * 1.5).toFixed();
    includeItemUphone();
  }
  $('.costForItemUphone').text(costForItemUphone);
  itemUphoneDescription();
}

function loginForItemWinbookAir(){
  clone = $("#itemWinbookAir").clone().appendTo('#inventory');
  clone.removeAttr('id');
  $(clone).append('<span class="firstAppend" id="WinbookAirFirstAppend"> </span>');
  $('#WinbookAirFirstAppend').text('x' + inventory.itemWinbookAir);
  for (var ii = 0; ii <= inventory.itemWinbookAir; ii++){
    costForItemWinbookAir = (costForItemWinbookAir * 1.5).toFixed();
    includeItemWinbookAir();
  }
  $('.costForItemWinbookAir').text(costForItemWinbookAir);
  $('#WinbookAirFirstAppend').unbind();
  itemWinbookAirDescription();
  firstAppendForWinbookAir = false;
}

function loginForItemWinPro(){
  firstAppendForWinPro = false;
  clone = $('#itemWinPro').clone().appendTo('#inventory');
  clone.removeAttr('id');
  $(clone).append("<span class='firstAppend' id='WinProAppend'> </span>");
  itemWinProDescription();
  $('#WinProAppend').text('x' + inventory.itemWinPro);
  includeItemWinPro();
  for (var iii = 0; iii <= inventory.itemWinPro; iii++){
    costForItemWinPro = (costForItemWinPro * 1.5).toFixed();
  }
  $('.costForItemWinPro').text(costForItemWinPro);
}
