const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let computerSelection;
let playerSelection;

const computerPlay = () => {
    let interval = Math.random()*100;
    if (interval < 33) {
        computerSelection = ROCK;
    } else if (interval < 66){
        computerSelection = PAPER;
    } else {
        computerSelection = SCISSORS;
    }
    console.log(`Computer choice: ${computerSelection}`);
    return computerSelection;
}

//computerPlay();

const userPlay = () => {
   playerSelection = prompt("Please insert your choice: ROCK, PAPER or SCISSORS?");
   playerSelection = playerSelection.toUpperCase();
   if (playerSelection == ROCK || playerSelection == PAPER || playerSelection == SCISSORS) {
    console.log(`Player choice: ${playerSelection}`);
    return playerSelection;
   } else {
       alert("You entered invalid input. Try again");
   }
}

//userPlay();
/*
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
let computerScore = 0;
let playerScore = 0;
const playSingleRoundAndCountScores = (playerInput, computerInput) => {
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
}

const game = () => {
    let i = 0;
    let roundNumber = 1;
    while(i < 5) {
        console.log(`Round: ${roundNumber}`);
        userPlay();
        computerPlay();
        playSingleRoundAndCountScores(playerSelection, computerSelection);
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        i++;
        roundNumber++;
    }
    if(computerScore < playerScore){
        alert("Player won");
    } else if (computerScore > playerScore) {
        alert("Computer won");
    } else {
        alert("It's a draw");
    }
}

game();