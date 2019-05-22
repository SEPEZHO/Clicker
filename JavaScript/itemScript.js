const inventory = [];
let sadSecondClickAdd = false;

function shopItem() {
    $('#secondMouse').click(buySecMouse);
    $('#secondClick').click(buySecClick);
}

function buySecMouse() {
    if (numberOfClicks >= 10) {
        inventory.push('secondMouse');
        numberOfClicks -= 10;
        reloadNumber();
        $("#secondMouse").clone().appendTo($('#oflineFarmInv'));
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    if (inventory.includes('secondMouse') == true) {
        setInterval(function() {
            numberOfClicks++;
            reloadNumber();
        }, 1000);
    }
}

function buySecClick() {
    if (numberOfClicks >= 1) {
        inventory.push('SadSecondClick');
        numberOfClicks -= 1;
        reloadNumber();
        $("#secondClick").clone().appendTo($('#oflineFarmInv'));
    } else {
        alert('нет деняк, но вы держитесь');
        return;
    }
    sadSecondClickAdd = "numberOfClicks++;";
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