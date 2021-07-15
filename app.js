const playerChoiceDiv = document.querySelector('#player-choice');
const computerChoiceDiv = document.querySelector('#computer-choice');

const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

// 1. Function which randomly generates computer choice

const computerPlay = () => {
    let computerSelection;
    let interval = Math.random();
    if (interval < 0.33) {
        computerSelection = ROCK;
    } else if (interval < 0.66) {
        computerSelection = PAPER;
    } else {
        computerSelection = SCISSORS;
    }
    computerChoiceDiv.textContent = computerSelection;
    return computerSelection;
}

// 2. Function which allows to select the item by the player using the button. 

const playerPlay = (item) => {
    let playerSelection;
    playerSelection = item;
    playerChoiceDiv.textContent = playerSelection;
    return playerSelection;
}

// 3. Function that count the scores and display the result
let computerScore = 0;
let playerScore = 0;
/*
const playRound = (playerInput, computerInput) => {
    if (playerInput == ROCK && computerInput == PAPER) {
        computerScore++;
    } else if (playerInput == SCISSORS && computerInput == ROCK) {
        computerScore++;
    } else if (playerInput == PAPER && computerInput == SCISSORS) {
        computerScore++;
    } else if (playerInput == SCISSORS && computerInput == PAPER) {
        playerScore++;
    } else if (playerInput == PAPER && computerInput == ROCK) {
        playerScore++;
    } else if (playerInput == ROCK && computerInput == SCISSORS) {
        playerScore++;
    }
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    const final = () => {
      if (playerScore == 5) {
        alert('Player won!'); 
      } else if (computerScore == 5){
        alert('Computer won!');
      }
    }
    final();
}
*/
const playRound = (playerInput, computerInput) => {
    if (
        playerInput == ROCK && computerInput == PAPER ||
        playerInput == SCISSORS && computerInput == ROCK ||
        playerInput == PAPER && computerInput == SCISSORS
        ) {
        computerScore++;
    } else if (
        playerInput == SCISSORS && computerInput == PAPER ||
        playerInput == PAPER && computerInput == ROCK ||
        playerInput == ROCK && computerInput == SCISSORS
        ) {
        playerScore++;
    } 
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    const final = () => {
      if (playerScore == 5) {
        alert('Player won!'); 
      } else if (computerScore == 5){
        alert('Computer won!');
      }
    }
    final();
}

// 4. Function that starts the game

const selectItem = (item) => {
    playRound(playerPlay(item), computerPlay());
}

rockButton.addEventListener("click", selectItem.bind(this, ROCK));
paperButton.addEventListener("click", selectItem.bind(this, PAPER));
scissorsButton.addEventListener("click", selectItem.bind(this, SCISSORS));