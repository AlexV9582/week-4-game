var currentTotal = 0
var wins = 0
var losses = 0
var randomNumber
var redNumber
var clearNumber
var greenNumber
var blueNumber
var inProgress = false

$(".currentTotal").append(currentTotal);
$(".wins").append(wins)
$(".losses").append(losses)

function randomNumGen() {
	randomNumber = Math.floor((Math.random() * 120) + 19)
	console.log(randomNumber)
}

function redNumGen() {
	redNumber = Math.floor((Math.random() * 12) + 1)
	console.log(redNumber)
}

function greenNumGen() {
	greenNumber = Math.floor((Math.random() * 12) + 1)
	console.log(greenNumber)
}

function clearNumGen() {
	clearNumber = Math.floor((Math.random() * 12) + 1)
	console.log(clearNumber)
}

function blueNumGen() {
	blueNumber = Math.floor((Math.random() * 12) + 1)
	console.log(blueNumber)
}

$(".start").on("click", function() {
	if (inProgress === false) {
		randomNumGen();
		redNumGen();
		greenNumGen();
		clearNumGen();
		blueNumGen();
		$(".randomNumber").append(randomNumber);
		currentTotal = 0;
		inProgress = true;
		wins = 0
		losses = 0
	}
});

$(".btn-default").on("click", function(){
	if (inProgress === false) {
		randomNumGen();
		redNumGen();
		greenNumGen();
		clearNumGen();
		blueNumGen();
		$(".randomNumber").append(randomNumber);
		currentTotal = 0;
		inProgress = true;
	};

	if (inProgress === true && this.value === "red") {
		currentTotal += redNumber;
		$(".currentTotal").html(currentTotal);
	}else if (inProgress === true && this.value === "clear") {
		currentTotal += clearNumber;
		$(".currentTotal").html(currentTotal);
	}else if (inProgress === true && this.value === "green") {
		currentTotal += greenNumber;
		$(".currentTotal").html(currentTotal);
	}else if (inProgress === true && this.value === "blue") {
		currentTotal += blueNumber;
		$(".currentTotal").html(currentTotal);
	};

	if (currentTotal === randomNumber) {
		wins++;
		inProgress === false;
		//alert("You Win!!!");
	}else if (currentTotal > randomNumber) {
		losses++;
		inProgress === false;
		//alert("You Lose...");
	};
});










