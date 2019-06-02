const inventory = [];
let secClickAdd = false;
let firstAppendForSecMouse = 0;
let firstAppendForSecClick = 0;
let firstAppendForPerComp = 0;
var costForItemSecondMouse = 10;
var costForItemSecondClick = 50;
var costForItemPerComp = 1;
var kritFunc1 = () => {
    return
};

function shopItem() {
    $('#itemSecondMouse').click(buySecMouse);
    $('#itemSecondClick').click(buySecClick);
    $('#itemPersonalComp').click(buyPerComp);
    itemSecondMouseDescription();
    itemSecondClickDescription();
    itemPersonalCompDescription();
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

function buyPerComp() {
    if (numberOfClicks >= costForItemPerComp) {
        inventory.push('itemPersonalComp');
        numberOfClicks -= costForItemPerComp;
        reloadNumber();
        costForItemPerComp = (costForItemPerComp * 1.5).toFixed();
        $('.costForItemPerComp').empty();
        $('.costForItemPerComp').append(costForItemPerComp);
        if (firstAppendForPerComp == 0) {
            clone = $("#itemPersonalComp").clone();
            $(clone).append('<span class="firstAppend" id="personalCompAppend"> </span>');
            $("#inventory").append(clone);
            itemPersonalCompDescription();
            firstAppendForPerComp++;
        } else {
            firstAppendForPerComp++;
            $("#personalCompAppend").empty();
            $('#personalCompAppend').append('x' + firstAppendForPerComp);
        }
        $('#enemy').unbind();
        $('#enemy').click(as);
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
}
let clickPerOneOld = clickPerOne;

function as() {
    let randKrit = Math.random() * (11 - 1);
    randKrit = randKrit.toFixed();
    console.log(randKrit)
    if (randKrit == 10) {
        console.log('asdad');
        let krit = Math.random() * (clickPerOne * 10 - clickPerOne * 1);
        krit = krit.toFixed();
        clickPerOne = krit;
    }
    click();
    clickPerOne = clickPerOneOld;
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

function itemPersonalCompDescription() {
    $('#itemPersonalCompDescription').hide();
    $('.itemPersonalCompClass').mouseover(function() {
        $('#itemPersonalCompDescription').show();
    });
    $('.itemPersonalCompClass').mouseleave(function() {
        $('#itemPersonalCompDescription').hide();
    });
}