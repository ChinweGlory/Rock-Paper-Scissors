const prompt = require("prompt-sync")();
function getComputerChoice() {
    const gameChoice = ["Rock" , "Paper" , "Scissors"];
    let choices = Math.floor(Math.random() * gameChoice.length);
    return gameChoice[choices]

}
// getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let input = prompt("Enter Your chioice game: Rock, Paper, Scissors");
    if (playerSelection === "rock" && computerSelection === "Paper");
    return "You Lose! Paper beats Rocks";

}

function game() {
    let user = playerSelection();
    let computer = computerSelection();

    if (user === "Rock" && computer === "rock") {
        console.log("Its a tie");
    } else if (user === "Rock" && computer === "Scissors") {
        console.log("You win");
    } else if (user === "Scissors" && computer === "Paper") {
        console.log("You win");
    }else if (user === "Rock" && computer === "Paper") {
        console.log("You Lose");
    }else {
        console.log("Try again");
        return "Start again";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));