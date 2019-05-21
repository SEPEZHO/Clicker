const inventory = [];

function shopItem() {
    $('#secondMouse').click(buy);
    setInterval(inventorySecondMouse, 1000);
}

function buy() {
    if (numberOfClicks >= 10) {
        inventory.push('secondMouse');
        numberOfClicks -= 10;
        rloadNumber();
        inventoryPush();
    }
}

function inventoryPush() {
    console.log('asd')
    if (inventory.includes('secondMouse') == true) {
        $("#secondMouse").clone().appendTo($('#oflineFarmInv'));
    }
}

function inventorySecondMouse() {
    if (inventory.includes('secondMouse') == true) {
        numberOfClicks++;
        rloadNumber();
    }
}