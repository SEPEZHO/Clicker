let numberOfClicks = 0;
const enemy = '#enemy';
const enemyMas = [];
enemyMas[0] = {background: 'green'};
enemyMas[1] = {background: 'blue'};
function begin() {
	$(enemy).click(click)
}

function click(){
	numberOfClicks++;
	console.log(numberOfClicks);
	if(numberOfClicks==10){
		$(enemy).css(enemyMas[0]);
		console.log(numberOfClicks+ ' click')
	}
	if(numberOfClicks== 20){
		$(enemy).css(enemyMas[1]);
		console.log(numberOfClicks+ ' click')
	}

}