const inventory = [];
let secClickAdd = false;
let firstAppendForSecMouse = 0;
let firstAppendForSecClick = 0;
let costForItemSecondMouse = 10;

function shopItem() {
    $('#itemSecondMouse').click(buySecMouse);
    $('#itemSecondClick').click(buySecClick);
    itemSecondMouseDescription();
    itemSecondClickDescription();
}

function buySecMouse() {
    if (numberOfClicks >= costForItemSecondMouse) {
        inventory.push('itemSecondMouse');
        numberOfClicks -= costForItemSecondMouse;
        costForItemSecondMouse = (costForItemSecondMouse*1.5).toFixed();
        if (firstAppendForSecMouse == 0) {
            clone = $("#itemSecondMouse").clone();
            $(clone).append('<span class="firstAppend" id="secondMouseFirstAppend"> </span>');
            $("#inventory").append(clone);
            itemSecondMouseDescription();
           $('.costForItemSecondMouse').empty();
           $('.costForItemSecondMouse').append(costForItemSecondMouse);
        } else {
            $("#secondMouseFirstAppend").empty();
            $('#secondMouseFirstAppend').append('x' + firstAppendForSecMouse);
        }
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    if (inventory.includes('itemSecondMouse') == true) {
        setInterval(function() {
            click();
        }, 1000);
    }
    firstAppendForSecMouse++;
    reloadNumber();
}

function buySecClick() {
    if (numberOfClicks >= 50) {
        inventory.push('itemSecondClick');
        numberOfClicks -= 50;
        if (firstAppendForSecClick == 0) {
            clone = $("#itemSecondClick").clone();
            $(clone).append('<span class="firstAppend" id="secondClickFirstAppend"> </span>');
            $("#inventory").append(clone);
            itemSecondClickDescription();
        } else {
            $("#secondClickFirstAppend").empty();
            $('#secondClickFirstAppend').append('x' + firstAppendForSecClick);
        }
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    firstAppendForSecClick++;
    clickPerOne++;
    reloadNumber();
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