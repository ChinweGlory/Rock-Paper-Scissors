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


// function playRound(playerSelection, computerSelection) {
//     let input = prompt("Enter Your choice game: Rock, Paper, Scissors");
//      if (playerSelection === "Rock" && computerSelection === "Paper") {
//          return "You Lose! Paper beats Rock";
//      }
// }

function game() {
    let user = playerSelection();
    let computer = computerSelection();

    if(user === "Rock") {
        if(computer === "Scissors") {
            console.log("You won! Rock smashed scissors");
            return "win";
        } else if (computer === "Paper") {
            console.log("You Lose! Paper beats rock");
            return "lose";
        } else {
            console.log("Its a tie!");
        }
    } else if ( user === "Paper") {
        if (computer === "Rock") {
            console.log("You win! Paper covers rock");
            return "win";
        } else if (computer === "Scissors") {
            console.log("You Lose! scissors cuts paper");
            return "lose";
        } else {
            console.log("It's a tie");
        }
    } else if (user === "Scissors") {
        if (computer === "Paper") {
            console.log("You win! scissors cuts paper");
            return "win";
        } else if (computer === "Rock") {
            console.log("You Lose Rock smashes scissors");
            return "lose";
        } else {
            console.log("It's a tie");
        }
    } else {
        console.log("Input a valid game choice");
    }

}
// game();

function gameRound() {
    let userScore = 0;
    let computerScore = 0;
    let round = 0;
    

    for(let i = 1; i <= 4; i++) {
        let start = game();

        if (start === "win") {
            userScore++;
            round++;
            console.log(`Round : ${round}  userScore ${userScore} : computerScore ${computerScore}`);
        } else if (start === "lose") {
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
