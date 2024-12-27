const choices = ["rock", "papper", "scissor"];

const playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";
	if (playerChoice === computerChoice) {
		result = "IT'S A TIE!";
	} else {
		switch (playerChoice) {
			case "papper":
				result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOOSE";
				break;
			case "scissor":
				result = computerChoice === "papper" ? "YOU WIN!" : "YOU LOOSE";
				break;
			case "rock":
				result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOOSE";
				break;
		}
	}

	playerDisplay.textContent = `PLAYER: ${playerChoice}`;
	computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

	resultDisplay.textContent = result;
	resultDisplay.classList.remove("greenText", "redText");
	switch (result) {
		case "YOU WIN!":
			resultDisplay.classList.add("greenText");
			playerScore++;
			playerScoreDisplay.textContent = playerScore;
			break;
		case "YOU LOOSE":
			resultDisplay.classList.add("redText");
			computerScore++;
			computerScoreDisplay.textContent = computerScore;
	}
}
