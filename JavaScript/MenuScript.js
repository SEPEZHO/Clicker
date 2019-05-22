var time = 50;

function menuAnim() {
    $('#inventory').click(beginInventoryAnimate);
    $('#shop').click(beginShopAnimate);
    $('#settings').click(beginSettingsAnimate);
    $('#ItemShop').hide();
    $('#oflineFarmInv').hide();
    $('#TheSettings').hide();
}

function beginInventoryAnimate() {
    subInvetoryLink();
    endShopAnimate();
    endSettingsAnimate();
    $('#subInventory').css({
        zIndex: 4
    })
    $('#subInventory').animate({
        height: '100%'
    }, {
        duration: time
    })
    $('#subInventory').mouseleave(endInventoryAnimate);
}

function endInventoryAnimate() {
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
    $('#subShop').css({
        zIndex: 4
    })
    $('#subShop').animate({
        height: '100%'
    }, {
        duration: time
    })
    $('#subShop').mouseleave(endShopAnimate);
}

function endShopAnimate() {
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
    $('#subSettings').css({
        zIndex: 4
    })
    $('#subSettings').animate({
        height: '100%'
    }, {
        duration: time
    })
    $('#subSettings').mouseleave(endSettingsAnimate);
}

function endSettingsAnimate() {
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
        $("footer > section:not('#oflineFarmInv')").hide();
        $('#oflineFarmInv').show();
    });
    $('#oflineFarmInv').mouseleave(function() {
        $('#oflineFarmInv').hide();
    })
}

function subShopLink() {
    $('#subShopLink').click(function() {
        $("footer > section:not('#ItemShop')").hide();
        $('#ItemShop').show();
    });
    $('#ItemShop').mouseleave(function() {
        $('#ItemShop').hide();
    })
}

function subSettingsLink() {
    $('#subSettingsLink').click(function() {
        $("footer > section:not('#TheSettings')").hide();
        $('#TheSettings').show();
    });
    $('#TheSettings').mouseleave(function() {
        $('#TheSettings').hide();
    })
}