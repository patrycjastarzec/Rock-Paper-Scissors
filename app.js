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
//2.
/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/
const playSingleRound = (playerSelection, computerSelection) => {
    //if(...) => "You Lose! Paper beats Rock"
    //if(...) => "You Lose! Rock beats Scissors"
    //if(...) => "You Lose! Scissors beats Paper"
    //if(...) => "You Win! Scissors beats Paper"
    //if(...) => "You Win! Paper beats Rock"
    //if(...) => "You Win! Rock beats Scissors"
    //if(...) => "DRAW"
    
}