const inventory = [];
let secClickAdd = false;
let firstAppendForSecMouse = 0;
let firstAppendForSecClick = 0;
let costForItemSecondMouse = 10;
let costForItemSecondClick = 50;

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
        costForItemSecondMouse = (costForItemSecondMouse * 1.5).toFixed();
        $('.costForItemSecondMouse').empty();
        $('.costForItemSecondMouse').append(costForItemSecondMouse);
        if (firstAppendForSecMouse == 0) {
            clone = $("#itemSecondMouse").clone();
            $(clone).append('<span class="firstAppend" id="secondMouseFirstAppend"> </span>');
            $("#inventory").append(clone);
            itemSecondMouseDescription();
            firstAppendForSecMouse++;
        } else {
            firstAppendForSecMouse++;
            $("#secondMouseFirstAppend").empty();
            $('#secondMouseFirstAppend').append('x' + firstAppendForSecMouse);
        }
        reloadNumber();
        if (inventory.includes('itemSecondMouse') == true) {
            setInterval(function() {
                click();
            }, 1000);
        }
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
}

function buySecClick() {
    if (numberOfClicks >= costForItemSecondClick) {
        inventory.push('itemSecondClick');
        numberOfClicks -= costForItemSecondClick;
        costForItemSecondClick = (costForItemSecondClick * 1.5).toFixed();
        $('.costForItemSecondClick').empty();
        $('.costForItemSecondClick').append(costForItemSecondClick);
        if (firstAppendForSecClick == 0) {
            clone = $("#itemSecondClick").clone();
            $(clone).append('<span class="firstAppend" id="secondClickFirstAppend"> </span>');
            $("#inventory").append(clone);
            itemSecondClickDescription();
            firstAppendForSecClick++;
        } else {
            firstAppendForSecClick++;
            $("#secondClickFirstAppend").empty();
            $('#secondClickFirstAppend').append('x' + firstAppendForSecClick);
        }
        clickPerOne++;
        reloadNumber();
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
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