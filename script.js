
/* Rock Paper Scissors is a game in which two players make a selection from three pre-determined, weighted options.
By luck of the draw, the player who chooses the higher-weighted options wins the round. Players will compete five times to determine the winner of the game. */


let computerScore = 0;
let playerScore = 0;

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
			
function playRound(playerSelection, computerSelection) { 
	if (playerSelection === computerSelection){
			return "try again"

		} else if ((playerSelection == "rock" && computerSelection == "scissors") ||
			(playerSelection == "scissors" && computerSelection == "paper") ||
			(playerSelection == "paper" && computerSelection == "rock")) {
			playerScore++;
			return "you win!";
					
		} else {
			computerScore++;
			return "computer wins!";
		
	}
}

function game(){
	for (i = 0; i < 5; i++) {
		const playerSelection = prompt("...").toLowerCase();
		const computerSelection = computerPlay();

		console.log(playRound(playerSelection, computerSelection));
		console.log(playerScore);
		console.log(computerScore);
	}
}

game();





/*

let playGame = playRound ();
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

gameRound++;


computerPlay ();
playerSelection ();

playRound ();


let 



function playGame () {
	loop (playRound; gameRound = 5 {
		if ()
	}

playGame ();

*/