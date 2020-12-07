
/* Rock Paper Scissors is a game in which two players make a selection from three pre-determined, weighted options.
By luck of the draw, the player who chooses the higher-weighted options wins the round. Players will compete five times to determine the winner of the game. */

let playerSelection = prompt("...").toLowerCase();
let computerSelection = computerPlay ();
	function computerPlay() {
		let computerRoll = Math.floor(Math.random() * 3); 
			if (computerRoll === 0) {
				return "rock";
			} else if (computerRoll === 1) {
				return "paper";
			} else {
				return "scissors"; 
			}
		}
			
let computerScore = 0;
let playerScore = 0;
let gameRound = 0;




let playGame = playRound ();
	function playRound(playerSelection, computerSelection) { 
		if ((playerSelection == "rock" && computerSelection == "scissors") ||
			(playerSelection == "scissors" && computerSelection == "paper") ||
			(playerSelection == "paper" && computerSelection == "rock")) {
				return playerScore = playerScore + 1;
		gameRound++;
		console.log("player wings this roung owo");
		}	else if (playerSelection === computerSelection) {
		/* WELL FELLAS WE GOT DOWN TO THIS LINE WOAH BOY GOTTA SAY I AM PROUD OF THIS TEAM !!! FERDA */
	 	console.log("ohhh no a tie try again!");
		}	else {
				return computerScore = computerScore + 1;
		gameRound++;
		console.log("compupter wings!! yayy!");
	}



return computerScore;
	if (computerScore == 5) { 
		console.log("game over")}

return playerScore;
	if (playerScore == 5) { 
		console.log("game over")}

return gameRound;
	if (gameRound == 5) {
		console.log("game over")
	}
}


/* junk
const 


computerPlay ();
playerSelection ();

playRound ();


let 

for (i = 0; i < 5; i++) {

function playGame () {
	loop (playRound; gameRound = 5 {
		if ()
	}

playGame ();

*/