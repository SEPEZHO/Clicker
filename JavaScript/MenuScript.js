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
            $('#subInventory').mouseleave(endInventoryAnimate);
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
            $('#subShop').mouseleave(endShopAnimate);
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
            $('#subSettings').mouseleave(endSettingsAnimate);
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
    $('#inventory').mouseleave(function() {
        $('#inventory').hide();
    })
}

function subShopLink() {
    $('#subShopLink').click(function() {
        $("footer > section:not('#description')").hide();
        $('#shop').show();
    });
    $('#shop').mouseleave(function() {
        $('#shop').hide();
    })
}

function subSettingsLink() {
    $('#subSettingsLink').click(function() {
        $("footer > section:not('#description')").hide();
        $('#settings').show();
    });
    $('#settings').mouseleave(function() {
        $('#settings').hide();
    })
}