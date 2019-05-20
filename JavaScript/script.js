function menuAnim(argument) {
	$('#inventory').click(beginInventoryAnimate);
	$('#subInventory').mouseout(endInventoryAnimate);
	$('#subInventory').hide();

}
function beginInventoryAnimate(){
console.log('Begin')
$('#subInventory').show();

}
function endInventoryAnimate(){
console.log('End')
$('#subInventory').hide();

}