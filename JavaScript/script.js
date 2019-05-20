function menuAnim() {
	$('#inventory').click(beginInventoryAnimate);
	$('#subInventory').mouseout(endInventoryAnimate);
	$('#shop').click(beginShopAnimate);
	$('#subShop').mouseout(endShopAnimate);
	$('#settings').click(beginSettingsAnimate);
	$('#subSettings').mouseout(endSettingsAnimate);
}
function beginInventoryAnimate(){
	$('#subInventory').css({
		zIndex: 2
	})
	$('#subInventory').animate({
		height: '100%'
	},{
		duration: 10
	})
	endShopAnimate();
	endSettingsAnimate();
}
function endInventoryAnimate(){
	$('#subInventory').css({
		zIndex: 0
	})
	$('#subInventory').animate({
		height: '0%'
	},{
		duration: 10
	})
}
function beginShopAnimate(){
	$('#subShop').css({
		zIndex: 2
	})
	$('#subShop').animate({
		height: '100%'
	},{
		duration: 10
	})
	endInventoryAnimate();
	endSettingsAnimate();
}
function endShopAnimate(){
	$('#subShop').css({
		zIndex: 0
	})
	$('#subShop').animate({
		height: '0%'
	},{
		duration: 10
	})
}
function beginSettingsAnimate(){
	$('#subSettings').css({
		zIndex: 2
	})
	$('#subSettings').animate({
		height: '100%'
	},{
		duration: 10
	})
	endInventoryAnimate();
	endShopAnimate();
}
function endSettingsAnimate(){
	$('#subSettings').css({
		zIndex: 0
	})
	$('#subSettings').animate({
		height: '0%'
	},{
		duration: 10
	})
}