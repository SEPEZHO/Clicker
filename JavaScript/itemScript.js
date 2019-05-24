const inventory = [];
let secClickAdd = false;

function shopItem() {
    $('#itemSecondMouse').click(buySecMouse);
    $('#itemSecondClick').click(buySecClick);
    itemSecondMouseDescription();
    itemSecondClickDescription();
}

function buySecMouse() {
    if (numberOfClicks >= 10) {
        inventory.push('itemSecondMouse');
        numberOfClicks -= 10;
        clone = $("#itemSecondMouse").clone();
        $("#inventory").append(clone);
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    if (inventory.includes('itemSecondMouse') == true) {
        setInterval(function() {
            numberOfClicks++;
            reloadNumber();
        }, 1000);
    }
    reloadNumber();
    itemSecondMouseDescription();
}

function buySecClick() {
    if (numberOfClicks >= 50) {
        inventory.push('itemSecondClick');
        numberOfClicks -= 50;
        $("#itemSecondClick").clone().appendTo($('#inventory'));
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    clickPerOne++;
    reloadNumber();
    itemSecondClickDescription();
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
// function inventorySecondMouse() {
//     if (inventory.includes('secondMouse') == true) {
//         numberOfClicks++;
//         reloadNumber();
//     }
// }
// function inventoryPush() {
//     console.log('asd')
//     if (inventory.includes('secondMouse') == true) {
//     }
//     if (inventory.includes('SadSecondClick') == true) {
//     }
// }