

var currentTurn = null;


function submit() {
	if(currentTurn == null) {
		updateTurn(1);
	}

	var outputDiv = document.getElementById('output');

	outputDiv.innerHTML = addTurnHeader(currentTurn) + "content" + doubleNewline() + outputDiv.innerHTML;

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

function doubleNewline() {
	return "<br><br>"
}

function addTurnHeader(turn) {
	return "Turn " + turn + ":<br>";
}

