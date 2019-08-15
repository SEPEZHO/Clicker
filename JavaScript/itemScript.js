var inventory = {
    itemScroll: 0,
    itemUphone: 0,
    itemKeyBoard: 0,
    itemWinbookAir: 0,
    itemWinPro: 0,
};
let WinbookAirAdd = false;
let firstAppendForUphone = true;
let firstAppendForKeyBoard = true;
let firstAppendForWinbookAir = true;
let firstAppendForWinPro = true;
var costForItemUphone = 100;
var costForItemKeyBoard = 250;
var costForItemWinbookAir = 500;
var costForItemWinPro = 1000;

function shopItem() {
    $('#itemScroll').click(buyScroll);
    $('#itemUphone').click(buyUphone);
    $('#itemKeyBoard').click(buyKeyBoard);
    $('#itemWinbookAir').click(buyWinbookAir);
    $('#itemWinPro').click(buyWinPro);
    itemDescription('itemScroll');
    itemDescription('itemUphone');
    itemDescription('itemKeyBoard');
    itemDescription('itemWinbookAir');
    itemDescription('itemWinPro');
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
        $('.costForItemUphone').text('Update: ' + costForItemUphone);
        if (firstAppendForUphone) {
            clone = $("#itemUphone").clone();
            $(clone).append('<span class="firstAppend" id="UphoneFirstAppend"> </span>');
            $("#inventory").append(clone);
            firstAppendForUphone = false;
        } else {
            $('#UphoneFirstAppend').text('x' + inventory.itemUphone);
        }
        includeItemUphone();
        itemDescription('itemUphone');
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

function buyKeyBoard() {
    if (numberOfClicks >= costForItemKeyBoard) {
        inventory.itemKeyBoard++;
        numberOfClicks -= costForItemKeyBoard;
        costForItemKeyBoard = (costForItemKeyBoard * 1.5).toFixed();
        $('.costForItemKeyBoard').text('Update: ' + costForItemKeyBoard);
        if (firstAppendForKeyBoard) {
            clone = $("#itemKeyBoard").clone();
            $(clone).append('<span class="firstAppend" id="KeyBoardFirstAppend"> </span>');
            $("#inventory").append(clone);
            firstAppendForKeyBoard = false;
        } else {
            $('#KeyBoardFirstAppend').text('x' + inventory.itemKeyBoard);
        }
        itemDescription('itemKeyBoard');
        includeItemKeyBoard();
        reloadNumber();
    } else {
        cAlert('нет деняк, но вы держитесь');
        return;
    }
}

function includeItemKeyBoard() {
    if (inventory.itemWinPro != 0) {
        $(window).keypress(function(e) {
            if (e.keyCode === 32) {
                clickWithPC();
            }
        })
    } else {
        $(window).keypress(function(e) {
            if (e.keyCode === 32) {
                click();
            }
        })
    }
}

function buyWinbookAir() {
    if (numberOfClicks >= costForItemWinbookAir) {
        inventory.itemWinbookAir++;
        numberOfClicks -= costForItemWinbookAir;
        costForItemWinbookAir = (costForItemWinbookAir * 1.5).toFixed();
        $('.costForItemWinbookAir').text('Update: ' + costForItemWinbookAir);
        if (firstAppendForWinbookAir) {
            clone = $("#itemWinbookAir").clone();
            $(clone).append('<span class="firstAppend" id="WinbookAirFirstAppend"> </span>');
            $("#inventory").append(clone);
            firstAppendForWinbookAir = false;
        } else {
            $('#WinbookAirFirstAppend').text('x' + inventory.itemWinbookAir);
        }
        includeItemWinbookAir();
        itemDescription('itemWinbookAir');
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
        $('.costForItemWinPro').text('Update: ' + costForItemWinPro);
        if (firstAppendForWinPro) {
            clone = $("#itemWinPro").clone();
            $(clone).append('<span class="firstAppend" id="WinProAppend"> </span>');
            $("#inventory").append(clone);
            firstAppendForWinPro = false;
        } else {
            $('#WinProAppend').text('x' + inventory.itemWinPro);
        }
        itemDescription('itemWinPro');
        reloadNumber();
        if (inventory.itemKeyBoard != 0) {
            includeItemKeyBoard();
        }
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

function itemDescription(item) {
    $('#' + item + 'Description').hide();
    $('.' + item + 'Class').mouseover(function() {
        $('#' + item + 'Description').show();
    });
    $('.' + item + 'Class').mouseleave(function() {
        $('#' + item + 'Description').hide();
    });
}