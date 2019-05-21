const inventory = [];

function shopItem() {
    $('#secondMouse').click(buySecMouse);
    $('#secondClick').click(buySecClick);

    setInterval(inventorySecondMouse, 1000);
}

function buySecMouse() {
    if (numberOfClicks >= 10) {
        inventory.push('secondMouse');
        numberOfClicks -= 10;
        reloadNumber();
        $("#secondMouse").clone().appendTo($('#oflineFarmInv'));
        
    }
}
function buySecClick() {
    if (numberOfClicks >= 50) {
        inventory.push('SadSecondClick');
        numberOfClicks -= 50;
        reloadNumber();
        $("#secondClick").clone().appendTo($('#oflineFarmInv'));
        
    }
}



function inventorySecondMouse() {
    if (inventory.includes('secondMouse') == true) {
        numberOfClicks++;
        reloadNumber();
    }
}
// function inventoryPush() {
//     console.log('asd')
//     if (inventory.includes('secondMouse') == true) {
//     }
//     if (inventory.includes('SadSecondClick') == true) {
//     }
// }
