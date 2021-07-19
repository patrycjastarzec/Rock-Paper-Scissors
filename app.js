const playerChoiceDiv = document.querySelector('#player-choice');
const computerChoiceDiv = document.querySelector('#computer-choice');

const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const gameButton = document.querySelectorAll('button');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let computerScore = 0;
let playerScore = 0;

const selectItem = (item) => {

    let playerSelection = item;
    playerChoiceDiv.textContent = playerSelection;

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

        if (playerScore == 5) {
            gameButton.forEach(i => {
                i.disabled = true;
            });
            alert('Player won!'); 
        } else if (computerScore == 5){
            gameButton.forEach(i => {
                i.disabled = true;
            });
            alert('Computer won!');
        }
    }
    playRound(playerSelection, computerPlay());
}



rockButton.addEventListener("click", selectItem.bind(this, ROCK));
paperButton.addEventListener("click", selectItem.bind(this, PAPER));
scissorsButton.addEventListener("click", selectItem.bind(this, SCISSORS));