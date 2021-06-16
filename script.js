
/* Rock Paper Scissors is a game in which two players make a selection from three pre-determined, weighted options. By luck of the draw, the player who chooses the higher-weighted options wins the round. 
Players will compete five times to determine the winner of the game. In this version, we are determining the winner of the game as the
winner of rounds out of five, NOT the first player to reach five on the scoreboard. */

/* Scores are set to zero at the beginning of the game */

let computerScore = 0;
let playerScore = 0;

/* First we will let the computer make a random selection and convert it to a string. */

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

/* Then we will take the computer's selection and compare it to the player's selection. 
The corresponding score will increase and and a message in the console will display declaring the winner. */

			
function playRound(playerSelection, computerSelection) { 
	if (playerSelection === computerSelection){
			return "It's a tie!"

		} else if ((playerSelection == "rock" && computerSelection == "scissors") ||
			(playerSelection == "scissors" && computerSelection == "paper") ||
			(playerSelection == "paper" && computerSelection == "rock")) {
			playerScore++;
			return `You selected ${playerSelection}, you win!`;
					
		} else {
			computerScore++;
			return `You selected ${playerSelection}, you lose!`;
		
	}
}

/* Next we will repeat the same steps five times */

function game(){
	for (i = 0; i < 5; i++) {
		const playerSelection = prompt("...").toLowerCase();
		const computerSelection = computerPlay();

		console.log(`Computer selected ${computerSelection}`);
		console.log(playRound(playerSelection, computerSelection));
		console.log(playerScore);
		console.log(computerScore);
	}
}

/* This plays the game! */

game();


