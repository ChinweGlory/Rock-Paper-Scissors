const prompt = require("prompt-sync")();
function computerSelection() {
    const gameChoice = ["Rock" , "Paper" , "Scissors"];
    let choices = Math.floor(Math.random() * gameChoice.length);
    console.log(`computer choice ${gameChoice[choices]}`);
    return gameChoice[choices];

}
// computerSelection();

function playerSelection() {
    let input = prompt("Enter Your choice game: Rock, Paper, Scissors:");
    if (input === "Rock") {
        console.log("You choose Rock")
        return "Rock";
    } else if (input === "Paper") {
        console.log("You choose Paper");
        return "Paper";
    }else if (input === "Scissors") {
        console.log("You choose Scissors");
        return "Scissors";
    } else {
        console.log("Choose a valid game type");
        return input;
    }

}


function playRound(playerSelection, computerSelection) {
    let input = prompt("Enter Your choice game: Rock, Paper, Scissors");
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }
}

function game() {
    let user = playerSelection();
    let computer = computerSelection();

    if (user === "Rock" && computer === "Paper") {
        console.log("You Lose");
        return "You lose";
    } else if (user === "Rock" && computer === "Scissors") {
        console.log("You win");
        return "You win";
    } else if (user === "Scissors" && computer === "Paper" || user === "Paper" && computer === "Rock") {
        console.log("You win");
        return "You win";
    }else if (user === "Paper" && computer === "Scissors") {
        console.log("You Lose");
        return "You Lose";
    }else if (user === computer){
        console.log("Its a tie");
        return "tie";
    }else {
        console.log("Try again");
        return "Try again";
    }
}
// game();

function gameRound() {
    let userScore = 0;
    let computerScore = 0;
    let round = 0;

    for(let i = 1; i <= 5; i++) {
        let start = game();

        if (start === "You win") {
            userScore++;
            round++;
            console.log(`Round : ${round}  userScore ${userScore} : computerScore ${computerScore}`);
        } else if (start === "You Lose") {
            computerScore++;
            round++;
            console.log(`Round: ${round}  userScore ${userScore} : computerScore ${computerScore}`);
        } else if (start === "tie") {
            round++;
            console.log(`Round: ${round}  userScore ${userScore} : computerScore ${computerScore}`);
        }else {
            console.log("Try again");
            break;
        }
    }
}
gameRound();


// const playerSelection = newUser();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));