var time = 50;

function menuAnim() {
  $('#menuInventory').click(beginInventoryAnimate);
  $('#menuShop').click(beginShopAnimate);
  $('#menuSettings').click(beginSettingsAnimate);
  $('#shop').hide();
  $('#inventory').hide();
  $('#settings').hide();
}

function beginInventoryAnimate() {
  $('#subInventory').css({
    zIndex:1,
    padding: '1vw'
  });
  $('#subShop').css({
    zIndex:0,
    padding: 0
  });
  $('#subSettings').css({
    zIndex:0,
    padding: 0
  });
  subInvetoryLink();
  endShopAnimate();
  endSettingsAnimate();
  $('#subInventory').click(endInventoryAnimate);
  $('#subInventory').css({
    height: '70%'
  },time)
}

function endInventoryAnimate() {
  $('#subInventory').stop();
  $('#subInventory').css({
    height: '0%',
    padding: 0
  },time)
}

function beginShopAnimate() {
  subShopLink();
  $('#subInventory').css({
    zIndex: 0,
    padding: 0
  });
  $('#subShop').css({
    zIndex: 1,
    padding: '1vw'
  });
  $('#subSettings').css({
    zIndex: 0,
    padding: 0
  });
  endInventoryAnimate();
  endSettingsAnimate();
  $('#subShop').click(endShopAnimate);
  $('#subShop').css({
    height: '57.5%',
  },time)
}

function endShopAnimate() {
  $('#subShop').stop();
  $('#subShop').css({
    height: '0%',
    padding: 0
  },time)
}

function beginSettingsAnimate() {
  subSettingsLink();
  $('#subInventory').css({
    zIndex: 0,
    padding: 0
  });
  $('#subShop').css({
    zIndex: 0,
    padding: 0
  });
  $('#subSettings').css({
    zIndex:1,
    padding: '1vw'
  });
  endInventoryAnimate();
  endShopAnimate();
  $('#subSettings').click(endSettingsAnimate);
  $('#subSettings').css({
    height: '45%'
  },time)
}

function endSettingsAnimate() {
  $('#subSettings').stop();
  $('#subSettings').css({
    height: '0%',
    padding: 0
  },time)
}

function subInvetoryLink() {
  $('#subInvetoryLink').click(function() {
    $("footer > section:not('#description')").hide();
    $('#description').show();
    $('#inventory').show();
  });
  $('.exit').click(function() {
    $('#inventory').hide();
  })
}

function subShopLink() {
  $('#subShopLink').click(function() {
    $("footer > section:not('#description')").hide();
    $('#description').show();
    $('#shop').show();
  });
  $('.exit').click(function() {
    $('#shop').hide();
  })
}

function subSettingsLink() {
  $('#subSettingsLink').click(function() {
    $("footer > section:not('#description')").hide();
    $('#settings').show();
  });
  $('.exit').click(function() {
    $('#settings').hide();
  })
}

function cAlert(text){
  clearTimeout(timeForAlert);
  $('#cAlert').text(text);
  $('#cAlert').css({height: '7vh', borderWidth: '1px'});
  var timeForAlert = setTimeout(()=>{$('#cAlert').css({height: '0vh', borderWidth: '0px'})},7000);
  $('#cAlert').click(()=>{
  clearTimeout(timeForAlert);
  $('#cAlert').css({height: '0vh', borderWidth: '0px'});
  })
}