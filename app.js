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
    //console.log(`Computer selection: ${computerSelection}`);
    computerChoiceDiv.textContent = computerSelection;
    return computerSelection;
}

// 2. Function which allows to select the item by the player using the button. 

const playerPlay = (item) => {
    let playerSelection;
    playerSelection = item;
    playerChoiceDiv.textContent = playerSelection;
    //console.log(`Player selection: ${playerSelection}`);
    return playerSelection;
}

// 3. Function that count the scores and display the result
let computerScore = 0;
let playerScore = 0;
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
    //console.log(`Player score: ${playerScore}`);
    playerScoreDiv.textContent = playerScore;
    //console.log(`Computer score: ${computerScore}`);
    computerScoreDiv.textContent = computerScore;
}

// 4. Function that starts the game

const selectItem = (item) => {
    if (playerScore < 5 && computerScore < 5) {
        playRound(playerPlay(item), computerPlay());
    } else if (playerScore === 5) {
        alert('Player won!');
    } else if (computerScore === 5) {
        alert('Computer won!');
    } else if (playerScore === 5 && computerScore === 5) {
        alert('It\'s a draw');
    }
}

rockButton.addEventListener("click", selectItem.bind(this, ROCK));
paperButton.addEventListener("click", selectItem.bind(this, PAPER));
scissorsButton.addEventListener("click", selectItem.bind(this, SCISSORS));





/*
const displayResult = () => {
    while (computerScore < 6 || playerScore < 6) {
        playGame(playerSelection, computerSelection);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Player score: ${playerScore}`);
    }
    if (computerScore > playerScore) {
        console.log('Computer won!');
    }else if (computerScore < playerScore) {
        console.log('Player won!');
    } else {
        console.log('It is a draw!');
    }
}
 */

/*
const selectRock = () =>{
    playerSelection = ROCK;
    console.log(`Player selection: ${playerSelection}`);
    return playerSelection;
}

const selectPaper = () =>{
    playerSelection = PAPER;
    console.log(`Player selection: ${playerSelection}`);
    return playerSelection;
}

const selectScissors = () =>{
    playerSelection = SCISSORS;
    console.log(`Player selection: ${playerSelection}`);
    return playerSelection;
}

const userPlay = () => {
   playerSelection = prompt("Please insert your choice: ROCK, PAPER or SCISSORS?");
   playerSelection = playerSelection.toUpperCase();
   if (playerSelection == ROCK || playerSelection == PAPER || playerSelection == SCISSORS) {
    return playerSelection;
   } else {
       alert("You entered invalid input. Try again");
   }
}

//userPlay();

const playSingleRound = (playerInput, computerInput) => {
    if (playerInput == ROCK && computerInput == PAPER) {
        alert("You Lose! Paper beats rock");
    } else if (playerInput == SCISSORS && computerInput == ROCK) {
        alert("You Lose! Rock beats scissors");
    } else if (playerInput == PAPER && computerInput == SCISSORS) {
        alert("You Lose! Scissors beats paper");
    } else if (playerInput == SCISSORS && computerInput == PAPER) {
        alert("You Win! Scissors beats paper");
    } else if (playerInput == PAPER && computerInput == ROCK) {
        alert("You Win! Paper beats rock");
    } else if (playerInput == ROCK && computerInput == SCISSORS) {
        alert("You Win! Rock beats scissors");
    } else if (playerInput == computerInput){
        alert("It's a draw");
    }    
}

playSingleRound(playerSelection, computerSelection);
*/