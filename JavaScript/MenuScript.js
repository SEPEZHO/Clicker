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
    subInvetoryLink();
    endShopAnimate();
    endSettingsAnimate();
    $('#subInventory').stop();
    $('#subInventory').css({
        zIndex: 4
    })
    $('#subInventory').animate({
        height: '100%'
    }, {
        duration: time,
        complete: function() {
            $('#subInventory').click(endInventoryAnimate);
        }
    })
}

function endInventoryAnimate() {
    $('#subInventory').stop();
    $('#subInventory').css({
        zIndex: 3
    })
    $('#subInventory').animate({
        height: '0%'
    }, {
        duration: time
    })
}

function beginShopAnimate() {
    subShopLink();
    endInventoryAnimate();
    endSettingsAnimate();
    $('#subShop').stop();
    $('#subShop').css({
        zIndex: 4
    })
    $('#subShop').animate({
        height: '100%'
    }, {
        duration: time,
        complete: function() {
            $('#subShop').click(endShopAnimate);
        }
    })
}

function endShopAnimate() {
    $('#subShop').stop();
    $('#subShop').css({
        zIndex: 2
    })
    $('#subShop').animate({
        height: '0%'
    }, {
        duration: time
    })
}

function beginSettingsAnimate() {
    subSettingsLink();
    endInventoryAnimate();
    endShopAnimate();
    $('#subSettings').stop();
    $('#subSettings').css({
        zIndex: 4
    })
    $('#subSettings').animate({
        height: '100%'
    }, {
        duration: time,
        complete: function() {
            $('#subSettings').click(endSettingsAnimate);
        }
    })
}

function endSettingsAnimate() {
    $('#subSettings').stop();
    $('#subSettings').css({
        zIndex: 1
    })
    $('#subSettings').animate({
        height: '0%'
    }, {
        duration: time
    })
}

function subInvetoryLink() {
    $('#subInvetoryLink').click(function() {
        $("footer > section:not('#description')").hide();
        $('#inventory').show();
    });
    $('.exit').click(function() {
        $('#inventory').hide();
    })
}

function subShopLink() {
    $('#subShopLink').click(function() {
        $("footer > section:not('#description')").hide();
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