const inventory = [];
let secClickAdd = false;

function shopItem() {
    $('#itemSecondMouse').click(buySecMouse);
    $('#itemSecondClick').click(buySecClick);
}

function buySecMouse() {
    if (numberOfClicks >= 10) {
        inventory.push('itemSecondMouse');
        numberOfClicks -= 10;
        $("#itemSecondMouse").clone().appendTo($('#inventory'));
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
    secClickAdd = "numberOfClicks++;";
    reloadNumber();
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