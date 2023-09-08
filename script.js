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


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));