var inventory = {
    itemScroll: 0,
    itemUphone: 0,
    itemWinbookAir: 0,
    itemWinPro: 0,
};
let WinbookAirAdd = false;
let firstAppendForUphone = true;
let firstAppendForWinbookAir = true;
let firstAppendForWinPro = true;
var costForItemUphone = 100;
var costForItemWinbookAir = 500;
var costForItemWinPro = 1000;

function shopItem() {
    $('#itemUphone').click(buyUphone);
    $('#itemScroll').click(buyScroll);
    $('#itemWinbookAir').click(buyWinbookAir);
    $('#itemWinPro').click(buyWinPro);
    itemScrollDescription();
    itemUphoneDescription();
    itemWinbookAirDescription();
    itemWinProDescription();
}

function buyScroll() {
    inventory.itemScroll = 1;
    $("#inventory").append($("#itemScroll"));
    $('#itemScroll').unbind('click').click(() => {
        $('body').append('<div id="filter"></div>');
        $('#filter').css({ position: 'absolute', background: 'black', width: '100vw', height: '100vh', opacity: 0.75, zIndex: 2, display: 'block' });
        var text = "Ну шо, чувачек, фрилансер, да? Так иди и фрилансируй при помощи рутинных кликов ради достижения определенной задачи. А после сливай их в магазине на новыйы Uphone или что там сейчас у молодежи модно. <hr> Включи консоль, там прикольно инфа выводится. <hr> Советую играть с пк.";
        $('#regulations').html(text).show();
        $('#filter').click(() => {
            $('#filter').remove();
            $('#regulations').hide();
        });
    })
}

function buyUphone() {
    if (numberOfClicks >= costForItemUphone) {
        inventory.itemUphone++;
        numberOfClicks -= costForItemUphone;
        costForItemUphone = (costForItemUphone * 1.5).toFixed();
        $('.costForItemUphone').text(costForItemUphone);
        if (firstAppendForUphone) {
            clone = $("#itemUphone").clone();
            $(clone).append('<span class="firstAppend" id="UphoneFirstAppend"> </span>');
            $("#inventory").append(clone);
            itemUphoneDescription();
            firstAppendForUphone = false;
        } else {
            $('#UphoneFirstAppend').text('x' + inventory.itemUphone);
        }
        includeItemUphone();
        reloadNumber();
    } else {
        cAlert('нет деняк, но вы держитесь');
        return;
    }
}

function includeItemUphone() {
    setInterval(() => {
        if (inventory.itemWinPro != 0) {
            clickWithPC();
        } else {
            click();
        }
    }, 1000);
}


function buyWinbookAir() {
    if (numberOfClicks >= costForItemWinbookAir) {
        inventory.itemWinbookAir++;
        numberOfClicks -= costForItemWinbookAir;
        costForItemWinbookAir = (costForItemWinbookAir * 1.5).toFixed();
        $('.costForItemWinbookAir').text(costForItemWinbookAir);
        if (firstAppendForWinbookAir) {
            clone = $("#itemWinbookAir").clone();
            $(clone).append('<span class="firstAppend" id="WinbookAirFirstAppend"> </span>');
            $("#inventory").append(clone);
            itemWinbookAirDescription();
            firstAppendForWinbookAir = false;
        } else {
            $('#WinbookAirFirstAppend').text('x' + inventory.itemWinbookAir);
        }
        includeItemWinbookAir();
        reloadNumber();
    } else {
        cAlert('нет деняк, но вы держитесь');
        return;
    }
}

function includeItemWinbookAir() {
    clickPerOne++;
}

function buyWinPro() {
    if (numberOfClicks >= costForItemWinPro) {
        inventory.itemWinPro++;
        numberOfClicks -= costForItemWinPro;
        costForItemWinPro = (costForItemWinPro * 1.5).toFixed();
        $('.costForItemWinPro').text(costForItemWinPro);
        if (firstAppendForWinPro) {
            clone = $("#itemWinPro").clone();
            $(clone).append('<span class="firstAppend" id="WinProAppend"> </span>');
            $("#inventory").append(clone);
            firstAppendForWinPro = false;
            includeItemWinPro();
        } else {
            $('#WinProAppend').text('x' + inventory.itemWinPro);
        }
        reloadNumber();
    } else {
        cAlert('нет деняк, но вы держитесь');
        return;
    }
}

function includeItemWinPro() {
    $('#enemy').unbind();
    $('#enemy').click(clickWithPC);
}

function clickWithPC() {
    let randKrit = Math.floor((Math.random() * 10) + 1);
    if (randKrit == 10) {
        let clickPerOneOld = clickPerOne;
        let krit = (Math.floor((Math.random() * (clickPerOne * 10)) + (clickPerOne))) * inventory.itemWinPro;
        clickPerOne = krit;
        click();
        clickPerOne = clickPerOneOld;
    } else {
        click();
    }
}

function itemScrollDescription() {
    $('#itemScrollDescription').hide();
    $('.itemScrollClass').mouseover(function() {
        $('#itemScrollDescription').show();
    });
    $('.itemScrollClass').mouseleave(function() {
        $('#itemScrollDescription').hide();
    });
}

function itemUphoneDescription() {
    $('#itemUphoneDescription').hide();
    $('.itemUphoneClass').mouseover(function() {
        $('#itemUphoneDescription').show();
    });
    $('.itemUphoneClass').mouseleave(function() {
        $('#itemUphoneDescription').hide();
    });
}

function itemWinbookAirDescription() {
    $('#itemWinbookAirDescription').hide();
    $('.itemWinbookAirClass').mouseover(function() {
        $('#itemWinbookAirDescription').show();
    });
    $('.itemWinbookAirClass').mouseleave(function() {
        $('#itemWinbookAirDescription').hide();
    });
}

function itemWinProDescription() {
    $('#itemWinProDescription').hide();
    $('.itemWinProClass').mouseover(function() {
        $('#itemWinProDescription').show();
    });
    $('.itemWinProClass').mouseleave(function() {
        $('#itemWinProDescription').hide();
    });
}