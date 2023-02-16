var flowers = 0;
var flowersPerSecond = 0;
var flowersPerClick = 1;

var blueCost = 10;
var redCost = 20;
var orangeCost = 500;	
var purpleCost = 1000;
var whiteCost = 2000;
var rainbowCost = 5000;
var yellowCost = 5000;
var lotusCost = 10000;
var lastCost = 50000;

var blueNum = 0;
var redNum = 0;
var orangeNum = 0;
var purpleNum = 0;
var whiteNum = 0;
var rainbowNum = 0;
var yellowNum = 0;
var lotusNum = 0;
var lastNum = 0;

function increment() {
	flowers += flowersPerClick; 
	document.getElementById("showFlowers").innerText = flowers; 

	if (flowers >= 7800000000) 
	{
		document.getElementById("gameOver").innerText = "You won the game! "
	}
}
setInterval(function() {
	flowers += flowersPerSecond; 
	document.getElementById("showFlowers").innerText = flowers;
}, 1000)
function buyBlue() {
	if (flowers >= blueCost) {
		flowers -= blueCost;
		document.getElementById("showFlowers").innerText = flowers;
		blueNum++; 
		document.getElementById("blueNum").innerText = blueNum;
		blueCost *=2; 
		document.getElementById("blueCost").innerText = blueCost;
		flowersPerSecond += 1;
		document.getElementById("showFlowersPerSecond").innerText = flowersPerSecond;	
	}	else {
		alert("You don't have enough Flowers!") 
	}
}
function buyRed() {
	if (flowers >= redCost) {
		flowers -= redCost; 
		document.getElementById("showFlowers").innerText = flowers;
		redNum++;
		document.getElementById("redNum").innerText = redNum;
		redCost *=2; 
		document.getElementById("redCost").innerText = redCost;
		flowersPerClick += 1; 
		document.getElementById("showFlowersPerClick").innerText = flowersPerClick;	
	}	else {
		alert("You don't have enough Flowers!") 
	}
}
function buyOrange() {
	if (flowers >= orangeCost) {
		flowers -= orangeCost;
		document.getElementById("showFlowers").innerText = flowers;
		orangeNum++;  
		document.getElementById("orangeNum").innerText = orangeNum;
		orangeCost *=2;
		document.getElementById("orangeCost").innerText = orangeCost;
		flowersPerSecond += 50; 
		document.getElementById("showFlowersPerSecond").innerText = flowersPerSecond;	
	}	else { 
		alert("You don't have enough Flowers!") 
	}
}
function buyPurple() {
	if (flowers >= purpleCost) {
		flowers -= purpleCost; 
		document.getElementById("showFlowers").innerText = flowers;
		purpleNum++;
		document.getElementById("purpleNum").innerText = purpleNum;
		purpleCost *=2;
		document.getElementById("purpleCost").innerText = purpleCost;
		flowersPerClick += 30; 
		document.getElementById("showFlowersPerClick").innerText = flowersPerClick;	
	}	else {
		alert("You don't have enough Flowers!") 
	}
}
function buyWhite() {
	if (flowers >= whiteCost) {
		flowers -= whiteCost; 
		document.getElementById("showFlowers").innerText = flowers;
		whiteNum++; 
		document.getElementById("whiteNum").innerText = whiteNum;
		whiteCost *=2;
		document.getElementById("whiteCost").innerText = whiteCost;
		flowersPerSecond += 100;
		document.getElementById("showFlowersPerSecond").innerText = flowersPerSecond;	
	}	else {
		alert("You don't have enough Flowers!") 
	}
}
function buyRainbow() {
	if (flowers >= rainbowCost) {
		flowers -= rainbowCost; 
		document.getElementById("showFlowers").innerText = flowers;
		rainbowNum++;
		document.getElementById("rainbowNum").innerText = rainbowNum;
		rainbowCost *=2;
		document.getElementById("rainbowCost").innerText = rainbowCost;
		flowersPerSecond += 500;
		document.getElementById("showFlowersPerSecond").innerText = flowersPerSecond;	
	}	else { 
		alert("You don't have enough Flowers!") 
	}
}
function buyYellow() {
	if (flowers >= yellowCost) {
		flowers -= yellowCost;
		document.getElementById("showFlowers").innerText = flowers;
		yellowNum++; 
		document.getElementById("yellowNum").innerText = yellowNum;
		yellowCost *=2; 
		document.getElementById("yellowCost").innerText = yellowCost;
		flowersPerClick += 100;
		document.getElementById("showFlowersPerClick").innerText = flowersPerClick;	
	}	else { 
		alert("You don't have enough Flowers!") 
	}
}
function buyLotus() {
	if (flowers >= lotusCost) {
		flowers -= lotusCost; 
		document.getElementById("showFlowers").innerText = flowers;
		lotusNum++;
		document.getElementById("lotusNum").innerText = lotusNum;
		lotusCost *=2;
		document.getElementById("lotusCost").innerText = lotusCost;
		flowersPerSecond += 1000;
		document.getElementById("showFlowersPerSecond").innerText = flowersPerSecond;	
	}	else { 
		alert("You don't have enough Flowers!") 
	}
}
function buy2Flowers() {
	if (flowers >= lastCost) {
		flowers -= lastCost; 
		document.getElementById("showFlowers").innerText = flowers;
		lastNum++;
		document.getElementById("lastNum").innerText = lastNum;
		lastCost *=2;
		document.getElementById("lastCost").innerText = lastCost;
		flowersPerSecond += 5000;
		document.getElementById("showFlowersPerSecond").innerText = flowersPerSecond;	
		document.getElementById("gameOver").innerText = "You won the game! "
	}	else { 
		alert("You don't have enough Flowers!") 
	}
}