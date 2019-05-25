const inventory = [];
let secClickAdd = false;

function shopItem() {
    $('#itemSecondMouse').click(buySecMouse);
    $('#itemSecondClick').click(buySecClick);
    itemSecondMouseDescription();
    itemSecondClickDescription();
}
let firstAppendForSecMouse = 0;
let firstAppendForSecClick = 0;
function buySecMouse() {
    if (numberOfClicks >= 10) {
        inventory.push('itemSecondMouse');
        numberOfClicks -= 10;
        if (firstAppendForSecMouse == 0) {
            firstAppendForSecMouse++;
            clone = $("#itemSecondMouse").clone();
            $(clone).append('<span class="firstAppend" id="secondMouseFirstAppend"> </span>');
            $("#inventory").append(clone);
        } else {
            firstAppendForSecMouse++;
            $("#secondMouseFirstAppend").empty();
            $('#secondMouseFirstAppend').append('x' + firstAppendForSecMouse);
        }
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    if (inventory.includes('itemSecondMouse') == true) {
        setInterval(function() {
            click(); // <-----
        }, 1000);
    }
    reloadNumber();
    itemSecondMouseDescription();
}

function buySecClick() {
    if (numberOfClicks >= 50) {
        inventory.push('itemSecondClick');
        numberOfClicks -= 50;
        if (firstAppendForSecClick == 0) {
            firstAppendForSecClick++;
            clone = $("#itemSecondClick").clone();
            $(clone).append('<span class="firstAppend" id="secondClickFirstAppend"> </span>');
            $("#inventory").append(clone);
        } else {
            firstAppendForSecClick++;
            $("#secondClickFirstAppend").empty();
            $('#secondClickFirstAppend').append('x' + firstAppendForSecClick);
        }
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