const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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