const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

let computerSelection;
let playerSelection;

// 1.
const computerPlay = () => {
    let interval = Math.random()*100;
    if (interval < 33) {
        return computerSelection = ROCK;
    } else if (interval < 66){
        return computerSelection = PAPER;
    } else {
        return computerSelection = SCISSORS;
    }
}

computerPlay();

const userPlay = () => {
   playerSelection = prompt("Please insert your choice: ROCK, PAPER or SCISSORS?");
   playerSelection = playerSelection.toUpperCase();
   if (playerSelection == ROCK || playerSelection == PAPER || playerSelection == SCISSORS) {
    return playerSelection;
   } else {
       alert("You entered invalid input. Try again");
   }
}

userPlay();

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