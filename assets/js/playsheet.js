

var currentTurn = null;


function submit() {
	if(currentTurn == null) {
		updateTurn(1);
	}

	var outputDiv = document.getElementById('output');

	outputDiv.innerHTML = getTurnHeader(currentTurn) + getContent() + getDoubleNewline() + outputDiv.innerHTML;

	updateTurn(parseInt(currentTurn)+1);
}

function onUserUpdateTurn() {
	let turn = document.getElementById("turn-counter").value;
	updateTurn(turn);
}

function updateTurn(turn) {
	currentTurn = turn;
	document.getElementById("turn-counter").value = turn;
}

function getTurnHeader(turn) {
	return "<div class='turnHeader'>" + "Turn " + turn + " actions:" + "</div>";
}

function getContent() {
	let left = document.getElementById("left-trade").value;
	let right = document.getElementById("right-trade").value;
	let tradeSteal = "[" + left + "," + right + "]"

	let attacks = "";
	attacks += getPlayerAttacks("-");
	attacks += getPlayerAttacks("+");

	return tradeSteal + attacks;
}

function getDoubleNewline() {
	return "<br><br>"
}

function getPlayerAttacks(side) {
	attacks = ""
	for(let i=1; i<=6; i++) {
		let val = document.getElementById("p" + side + i).value;
		if(parseInt(val)) {
			attacks += "<br>P" + side + i + " ["+ val +"]"
		}
	}
	return attacks;
}