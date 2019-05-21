function menuAnim() {
    $('#inventory').click(beginInventoryAnimate);
    $('#subInventory').mouseleave(endInventoryAnimate);
    $('#shop').click(beginShopAnimate);
    $('#subShop').mouseleave(endShopAnimate);
    $('#settings').click(beginSettingsAnimate);
    $('#subSettings').mouseleave(endSettingsAnimate);
    subInvetoryLink();
    subShopLink();
    subSettingsLink();
}

function beginInventoryAnimate() {
    $('#subInventory').css({
        zIndex: 2
    })
    $('#subInventory').animate({
        height: '100%'
    }, {
        duration: 10
    })
    endShopAnimate();
    endSettingsAnimate();
}

function endInventoryAnimate() {
    $('#subInventory').css({
        zIndex: 0
    })
    $('#subInventory').animate({
        height: '0%'
    }, {
        duration: 10
    })
}

function beginShopAnimate() {
    $('#subShop').css({
        zIndex: 2
    })
    $('#subShop').animate({
        height: '100%'
    }, {
        duration: 10
    })
    endInventoryAnimate();
    endSettingsAnimate();
}

function endShopAnimate() {
    $('#subShop').css({
        zIndex: 0
    })
    $('#subShop').animate({
        height: '0%'
    }, {
        duration: 10
    })
}

function beginSettingsAnimate() {
    $('#subSettings').css({
        zIndex: 2
    })
    $('#subSettings').animate({
        height: '100%'
    }, {
        duration: 10
    })
    endInventoryAnimate();
    endShopAnimate();
}

function endSettingsAnimate() {
    $('#subSettings').css({
        zIndex: 0
    })
    $('#subSettings').animate({
        height: '0%'
    }, {
        duration: 10
    })
}

function subInvetoryLink() {
    $('#subInvetoryLink').click(subInventoryLinkDo);
    $('#oflineFarmInv').hide();
    if (inventory.indexOf('secondMouse') == true) {}
}

function subInventoryLinkDo() {
    $("footer > section:not('#oflineFarmInv')").hide();
    $('#oflineFarmInv').show();
}

function subShopLink() {
    $('#subShopLink').click(subShopLinkDo);
    $('#ItemShop').hide();
}

function subShopLinkDo() {
    $("footer > section:not('#ItemShop')").hide();
    $('#ItemShop').show();
}

function subSettingsLink() {
    $('#subSettingsLink').click(subSettingsLinkDo);
    $('#TheSettings').hide();
}

function subSettingsLinkDo() {
    $("footer > section:not('#TheSettings')").hide();
    $('#TheSettings').show();
}