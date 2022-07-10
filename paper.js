function computerChoice(){
    result = Math.floor(Math.random() * 3 + 1)
    return result;
}
let computerSelection = computerChoice();

let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
let playerSelection;
switch(playerChoice) {
    case "rock":
        playerSelection =  1;
        break;
    case "paper":
        playerSelection = 2;
        break;
    case "scissors":
        playerSelection = 3;
        break;
    default: 
        playerSelection = "Invalid. Choose rock, paper or scissors."

}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0; 
    let computerScore = 0; 
    if (playerSelection == 1  && computerSelection == 3  ) {
        playerScore += 1;
        console.log(`Player Score is: ${playerScore}`)
        return "Player wins";
 }  else if (playerSelection == 3 && computerSelection == 1) {
        computerScore += 1;
        console.log(`Computer Score is: ${computerScore}`)
        return "Computer wins";
 }  else if (playerSelection > computerSelection) {
        playerScore += 1;
        console.log(`Player Score is: ${playerScore}`)
        return "Player wins";
  } else if (computerSelection > playerSelection) {
        computerScore += 1;
        console.log(`Computer Score is: ${computerScore}`)
        return "Computer wins";
 }  else if (playerSelection == computerSelection ) {
        return "Draw";
 }

}

console.log(playRound(playerSelection, computerSelection));

