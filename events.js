//Set variables
var choices = [0, 1, 2];
var outcomeUser 
var computerChoice
var gamePlayed = false;

//Function to check if the game was played
function gameChecker() {
	if (gamePlayed == true) {
		playAgain();
	} else {
		gamePlayed = false 
	}
};

// function rockChoice() {
// 	gameChecker();
// 	outcomeUser = 0;
// 	compuChoice(outcomeUser);
// };


//Functions that check what choice user clicked
function rockChoice() {
	gameChecker();
	document.getElementsByClassName("rockstar")[0].style.backgroundColor = "rgba(237, 56, 68, 1)";
	outcomeUser = 0;
	compuChoice(outcomeUser);
};

function paperChoice() {
	gameChecker();
	document.getElementsByClassName("rockstar")[1].style.backgroundColor = "rgba(237, 56, 68, 1)";
	outcomeUser = 1;
	compuChoice(outcomeUser);
};

function scissorsChoice() {
	gameChecker();
	document.getElementsByClassName("rockstar")[2].style.backgroundColor = "rgba(237, 56, 68, 1)";
	outcomeUser = 2;
	compuChoice(outcomeUser);
};


//Function that creates computer choice and displays computer choice different color
function compuChoice(choice) {
	computerChoice = Math.floor(Math.random() * choices.length);
	document.getElementsByClassName("rockstar")[computerChoice].style.backgroundColor = "rgba(174,140,0,1)";

	if ((computerChoice == outcomeUser) || (outcomeUser == computerChoice)){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>It's a Tie! <br>Peace & Love for Everyone!<p/>";
		gamePlayed = true;
	} else if (
		(outcomeUser == 0 && computerChoice == 1 ) ||
		(outcomeUser == 1 && computerChoice == 2 ) ||
		(outcomeUser == 2 && computerChoice == 0 )) {
			document.getElementsByClassName("whoWins")[0].innerHTML = "<p>You Lost!(Kanye Voice)</p>";
			gamePlayed = true;
	} else if (
		(outcomeUser == 0 && computerChoice == 2 ) ||
		(outcomeUser == 1 && computerChoice == 0 ) ||
		(outcomeUser == 2 && computerChoice == 1 )) {
			document.getElementsByClassName("whoWins")[0].innerHTML = "<p>You Won!<br>Do you play for the Bulls or somethin'?</p>";
			gamePlayed = true;
	} else {
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p> Something's Up...</p>";

	}

}

function compChose () {
	document.getElementsByClassName("compChose")[0].innerHTML
}


function playAgain () {
	document.getElementsByClassName("whoWins")[0].innerHTML= "<p>Will You Win?</p>";
	gamePlayed = false;
	for (i = 0; i <= 2; i++) { document.getElementsByClassName("rockstar")[i].style.backgroundColor = "rgba(87,180,219,1)"};
		
}
